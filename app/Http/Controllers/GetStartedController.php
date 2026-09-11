<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetStartedRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GetStartedController extends Controller
{
    public function index(Request $request): Response
    {
        // Pre-check service boxes when arriving from a service detail page (?service=slug, repeatable).
        $slugs = (array) $request->query('service', []);
        $validSlugs = collect(config('nirva.services'))->pluck('slug')->all();
        $selectedServices = collect($slugs)
            ->filter(fn ($slug) => in_array($slug, $validSlugs, true))
            ->values()
            ->all();

        return Inertia::render('GetStarted', [
            'services' => config('nirva.services'),
            'categories' => config('nirva.categories'),
            'options' => config('nirva.getStarted'),
            'selectedServices' => $selectedServices,
            'meta' => [
                'title' => 'Get Started — Build Your Outsourcing Solution',
                'description' => 'Tell us about your business and goals. NIRVA responds within 24 hours with a tailored outsourcing and automation plan.',
            ],
        ]);
    }

    /**
     * Phase 1: validate + flash success (no persistence yet).
     *
     * Phase 2 swap-in (small diff, no rewrite):
     *   1. Extend the `leads` table with: company_size, services_interested (json),
     *      pain_point, budget nullable, timeline.
     *   2. Create the `Lead` model + `Lead::create(...)` here (map validated fields).
     *   3. Fire `Mail::to(config('nirva.contact.email'))->send(new GetStartedLeadMail($lead))`.
     * Validation already lives in GetStartedRequest, so only this method body grows.
     */
    public function store(GetStartedRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        // Phase 2: persist + notify, e.g.
        // $lead = \App\Models\Lead::create([...]);
        // \Illuminate\Support\Facades\Mail::to(config('nirva.contact.email'))
        //     ->send(new \App\Mail\GetStartedLeadMail($lead));

        // Optional Phase 1 functional fallback without DB: log the inquiry.
        // \Illuminate\Support\Facades\Log::info('Get-started inquiry', $validated);

        return redirect()
            ->route('get-started.index')
            ->with('success', 'Thanks, '.$validated['name'].'! We review every inquiry personally and will reply within 24 hours with next steps.');
    }
}
