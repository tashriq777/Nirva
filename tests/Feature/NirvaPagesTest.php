<?php

namespace Tests\Feature;

use Tests\TestCase;

class NirvaPagesTest extends TestCase
{
    public function test_home_page_renders(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Home')
            ->has('hero')
            ->has('services')
            ->has('whyChoose')
        );
    }

    public function test_services_page_renders_two_groups(): void
    {
        $response = $this->get('/services');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Services')
            ->has('categories')
            ->has('aiServices', 4)
            ->has('bpoServices', 4)
        );
    }

    public function test_service_detail_page_renders(): void
    {
        $response = $this->get('/services/ai-cold-calling');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('ServiceDetail')
            ->where('service.slug', 'ai-cold-calling')
            ->where('service.category', 'ai')
            ->has('service.overview')
            ->has('service.benefits')
            ->has('service.faqs')
            ->has('related', 3)
        );
    }

    public function test_service_detail_page_renders_bpo_service(): void
    {
        $response = $this->get('/services/lead-generation');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('ServiceDetail')
            ->where('service.slug', 'lead-generation')
            ->where('service.category', 'bpo')
        );
    }

    public function test_service_detail_unknown_slug_404s(): void
    {
        $response = $this->get('/services/not-a-service');

        $response->assertNotFound();
    }

    public function test_about_page_renders(): void
    {
        $response = $this->get('/about');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('About')
            ->where('mission', config('nirva.mission'))
            ->has('audiences')
            ->has('howWeWork', 3)
        );
    }

    public function test_contact_page_renders(): void
    {
        $response = $this->get('/contact');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Contact')
            ->has('services')
            ->has('contact')
        );
    }

    public function test_contact_page_preselects_service_from_query(): void
    {
        $response = $this->get('/contact?service=ai-customer-support');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Contact')
            ->where('selectedService', 'AI Customer Support')
        );
    }

    public function test_get_started_page_renders(): void
    {
        $response = $this->get('/get-started');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('GetStarted')
            ->has('services')
            ->has('options')
            ->where('selectedServices', [])
        );
    }

    public function test_get_started_page_preselects_service_from_query(): void
    {
        $response = $this->get('/get-started?service=ai-cold-calling');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('GetStarted')
            ->where('selectedServices', ['ai-cold-calling'])
        );
    }

    public function test_get_started_page_ignores_unknown_service_slug(): void
    {
        $response = $this->get('/get-started?service=not-a-service');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('GetStarted')
            ->where('selectedServices', [])
        );
    }

    public function test_get_started_store_validates(): void
    {
        $response = $this->post('/get-started', []);

        $response->assertInvalid(['name', 'email', 'company', 'company_size', 'services', 'pain_point', 'timeline']);
    }

    public function test_get_started_store_accepts_valid_submission(): void
    {
        $response = $this->post('/get-started', [
            'name' => 'Jane Cooper',
            'email' => 'jane@company.com',
            'company' => 'Acme Inc.',
            'company_size' => '11–50',
            'services' => ['AI Customer Support', 'Lead Generation'],
            'pain_point' => 'Slow response times / coverage gaps',
            'budget' => 'Prefer not to say',
            'timeline' => '1–3 months',
            'message' => 'Looking to outsource tier-1 support.',
        ]);

        $response->assertRedirect(route('get-started.index'));
        $response->assertSessionHas('success');
    }

    public function test_contact_store_validates(): void
    {
        $response = $this->post('/contact', []);

        $response->assertInvalid(['name', 'email', 'service', 'message']);
    }

    public function test_contact_store_accepts_valid_submission(): void
    {
        $service = config('nirva.services')[0]['name'];

        $response = $this->post('/contact', [
            'name' => 'Jane Cooper',
            'email' => 'jane@company.com',
            'company' => 'Acme Inc.',
            'service' => $service,
            'message' => 'We need help scaling our support team globally.',
        ]);

        $response->assertRedirect(route('contact.index'));
        $response->assertSessionHas('success');
    }

    public function test_sitemap_renders(): void
    {
        $response = $this->get('/sitemap.xml');

        $response->assertOk();
        $response->assertHeader('Content-Type', 'text/xml; charset=UTF-8');
        $response->assertSee('/services/ai-cold-calling', false);
        $response->assertSee('/services/lead-generation', false);
        $response->assertSee('/get-started', false);
    }
}
