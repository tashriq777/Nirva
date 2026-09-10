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
    }
}
