<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('About', [
            'mission' => config('nirva.mission'),
            'vision' => config('nirva.vision'),
            'audiences' => config('nirva.audiences'),
            'revenueModels' => config('nirva.revenueModels'),
            'howWeWork' => config('nirva.howWeWork'),
            'meta' => [
                'title' => 'About NIRVA — Mission, Vision & Business Model',
                'description' => 'NIRVA is an AI-powered BPO company helping businesses streamline operations through intelligent automation and professional outsourcing.',
            ],
        ]);
    }
}
