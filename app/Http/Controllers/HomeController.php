<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home', [
            'hero' => [
                'brand' => 'NIRVA',
                'title' => 'NIRVA — AI-Powered Business Process Outsourcing',
                'tagline' => 'Smarter Operations. Faster Growth.',
                'intro' => 'NIRVA combines artificial intelligence with professional outsourcing services to help businesses automate operations, reduce costs, improve customer experience, and scale globally.',
            ],
            'services' => config('nirva.services'),
            'whyChoose' => config('nirva.whyChoose'),
            'meta' => [
                'title' => 'NIRVA — AI-Powered Business Process Outsourcing',
                'description' => 'NIRVA combines AI, automation, and human expertise to help businesses automate operations, reduce costs, and scale globally.',
            ],
        ]);
    }
}
