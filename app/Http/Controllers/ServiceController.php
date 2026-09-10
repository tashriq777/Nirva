<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        $services = collect(config('nirva.services'));

        return Inertia::render('Services', [
            'categories' => config('nirva.categories'),
            'aiServices' => $services->where('category', 'ai')->values()->all(),
            'bpoServices' => $services->where('category', 'bpo')->values()->all(),
            'meta' => [
                'title' => 'Services — AI-Powered BPO & Outsourcing',
                'description' => 'Explore NIRVA services: AI cold calling, AI customer support, healthcare scribing, AI automation, plus lead generation, web, e-commerce, and sales support.',
            ],
        ]);
    }

    public function show(string $slug): Response
    {
        $services = collect(config('nirva.services'));
        $service = $services->firstWhere('slug', $slug);

        abort_if(! $service, 404);

        $related = $services
            ->where('category', $service['category'])
            ->where('slug', '!=', $slug)
            ->values()
            ->all();

        return Inertia::render('ServiceDetail', [
            'service' => $service,
            'related' => $related,
            'categoryLabel' => config('nirva.categories')[$service['category']]['title'],
            'meta' => [
                'title' => $service['name'].' — NIRVA',
                'description' => $service['description'],
            ],
        ]);
    }
}
