<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{ url('/') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>{{ url('/services') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
@foreach (config('nirva.services') as $service)
    <url>
        <loc>{{ url('/services/'.$service['slug']) }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
@endforeach
    <url>
        <loc>{{ url('/about') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/contact') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/get-started') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
