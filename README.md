# NIRVA — AI-Powered Business Process Outsourcing (Marketing Website)

Marketing site for **NIRVA** — *"Smarter Operations. Faster Growth."* — built with
**Laravel + Inertia.js + React + TypeScript + Tailwind CSS + Vite**.

Phase 1 scope: server-routed marketing pages (Home, Services, About, Contact) plus one
detail page per service, with a validated contact form (no DB persistence yet —
swap-in-ready for Phase 2).

## Pages & Routes

| Route       | Controller               | Inertia Page  |
| ----------- | ------------------------ | ------------- |
| `GET /`     | `HomeController@index`    | `Home`        |
| `GET /services` | `ServiceController@index` | `Services` (AI-Powered BPO + BPO Services sections) |
| `GET /services/{slug}` | `ServiceController@show` | `ServiceDetail` (overview, benefits, included, process, FAQs, related) |
| `GET /about`    | `AboutController@index`   | `About`   |
| `GET /contact`  | `ContactController@index` | `Contact` (`?service=slug` pre-selects the dropdown) |
| `POST /contact` | `ContactController@store`| — (redirects back with flash success) |
| `GET /sitemap.xml` | closure → `sitemap` view | — (pages + all 8 service detail URLs) |

Page content (services, mission/vision, roadmap, contact placeholders) lives in
`config/nirva.php` and is passed to React as props from the controllers — edit copy
there, not inside the TSX files.

## Requirements

- PHP 8.2+ with `sqlite` extension (local dev uses SQLite; production can use MySQL)
- Composer 2.x
- Node.js 20+ and npm

## Local Setup

```bash
cd Nirva

# 1. PHP dependencies
composer install

# 2. Environment
cp .env.example .env
php artisan key:generate
# .env already points at SQLite; create the file DB + run migrations:
php artisan migrate

# 3. Frontend dependencies
npm install

# 4. Run both servers (two terminals):
npm run dev          # Vite dev server with hot reload
php artisan serve    # Laravel at http://localhost:8000
```

Open http://localhost:8000 — Home, Services, About, Contact are in the header nav.

## Production Build

```bash
npm run build        # runs `tsc && vite build` (type-check + minified assets)
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

`public/robots.txt` is static; `/sitemap.xml` is served dynamically from
`resources/views/sitemap.blade.php` using `APP_URL` (set it in `.env`).
There is intentionally no static `public/sitemap.xml` — it would shadow the dynamic
route under `php artisan serve` and most static hosts.

## Contact Form (Phase 1 → Phase 2)

- Frontend: `resources/js/Pages/Contact.tsx` uses Inertia's `useForm` and posts to
  `contact.store`. Server validation lives in `app/Http/Requests/ContactRequest.php`;
  errors are returned automatically to the form.
- Success: redirect back to `contact.index` with `flash.success` (shared in
  `HandleInertiaRequests`), shown as a green banner.
- **Phase 2** (DB + email + admin) is a small diff, documented in
  `ContactController@store`: add a `leads` migration/model, call
  `Lead::create($request->validated())`, and `Mail::to(...)->send(...)`.

## Tests & Code Style

```bash
php artisan test                        # NIRVA pages + Breeze auth (all green)
php vendor/bin/pint --test              # PHP / PSR-12 style check
npx eslint resources/js --ext .js,.jsx,.ts,.tsx   # React/TS style check
```

## Project Structure (NIRVA additions)

```
app/Http/Controllers/HomeController.php | ServiceController.php
                        AboutController.php | ContactController.php
app/Http/Requests/ContactRequest.php
config/nirva.php                 # shared marketing copy (services, mission, roadmap…)
resources/js/Layouts/AppLayout.tsx
resources/js/Components/Nav.tsx | Footer.tsx | ServiceCard.tsx
                        ServiceIcon.tsx | NetworkBackground.tsx
resources/js/Pages/Home.tsx | Services.tsx | ServiceDetail.tsx | About.tsx | Contact.tsx
resources/js/types/nirva.ts
tests/Feature/NirvaPagesTest.php # pages render, detail pages + 404, preselect, validation, sitemap
```

Breeze auth scaffolding (`/login`, `/register`, `/dashboard`, `/profile`) is kept
intentionally for the Phase 2 admin view.

## Before Launch (owner to supply)

- Final logo file (SVG preferred) — currently a placeholder "N" badge in `Nav`/`Footer`
- Real contact details (email, phone, address, social links) — placeholders live in
  `config/nirva.php` → `contact` and are rendered on the Contact page + footer
- Production domain + hosting target (affects deployment notes above)
- Decision: blog/news section later, or 4 pages long-term?
