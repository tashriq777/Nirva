<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(Request $request): Response
    {
        // Pre-select the service dropdown when arriving from a service detail page (?service=slug).
        $selected = $request->query('service');
        $selectedService = is_string($selected)
            ? collect(config('nirva.services'))->firstWhere('slug', $selected)['name'] ?? null
            : null;

        return Inertia::render('Contact', [
            'services' => config('nirva.services'),
            'contact' => config('nirva.contact'),
            'selectedService' => $selectedService,
            'meta' => [
                'title' => 'Contact NIRVA — Get a Quote',
                'description' => 'Tell us about your project. The NIRVA team replies fast with a tailored outsourcing and automation plan.',
            ],
        ]);
    }

    /**
     * Phase 1: validate + flash success (no persistence yet).
     *
     * Phase 2 swap-in (small diff, no rewrite):
     *   1. Add migration for `leads` table:
     *      name, email, company nullable, message, service_interested, timestamps.
     *   2. Create `Lead` model + `Lead::create($request->validated())` here.
     *   3. Fire `Mail::to(config('nirva.contact.email'))->send(new ContactLeadMail($lead))`.
     * Validation already lives in ContactRequest, so only this method body grows.
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        // Phase 2: persist + notify, e.g.
        // $lead = \App\Models\Lead::create([
        //     'name' => $validated['name'],
        //     'email' => $validated['email'],
        //     'company' => $validated['company'] ?? null,
        //     'message' => $validated['message'],
        //     'service_interested' => $validated['service'],
        // ]);
        // \Illuminate\Support\Facades\Mail::to(config('nirva.contact.email'))
        //     ->send(new \App\Mail\ContactLeadMail($lead));

        // Optional Phase 1 functional fallback without DB: log the inquiry.
        // \Illuminate\Support\Facades\Log::info('Contact inquiry', $validated);

        return redirect()
            ->route('contact.index')
            ->with('success', 'Thanks, '.$validated['name'].'! Your message was received — the NIRVA team will reply shortly.');
    }
}
