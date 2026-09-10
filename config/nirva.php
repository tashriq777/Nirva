<?php

return [

    /*
    |--------------------------------------------------------------------------
    | NIRVA shared marketing content
    |--------------------------------------------------------------------------
    |
    | Central content source passed from controllers to Inertia pages as
    | props. Edit copy here instead of inside React components.
    |
    */

    'tagline' => 'Smarter Operations. Faster Growth.',

    'mission' => 'To empower businesses with intelligent outsourcing solutions that combine artificial intelligence, automation, and human expertise.',

    'vision' => 'To become a globally trusted AI-powered BPO company delivering innovative, scalable, and cost-effective business solutions.',

    'categories' => [
        'ai' => [
            'title' => 'AI-Powered BPO',
            'blurb' => 'Voice agents, chat assistants, scribing, and workflow automation — AI doing the heavy lifting with human experts in the loop.',
        ],
        'bpo' => [
            'title' => 'BPO Services',
            'blurb' => 'Classic outsourcing done right — dedicated specialists for pipeline, web, store, and revenue operations.',
        ],
    ],

    'services' => [
        [
            'slug' => 'ai-cold-calling',
            'name' => 'AI Cold Calling',
            'category' => 'ai',
            'short' => 'Voice agents for outreach',
            'description' => 'Voice agents for lead generation, appointment setting & sales outreach.',
            'icon' => 'phone',
            'overview' => [
                'Outbound sales is expensive and inconsistent. SDRs burn out, pitches vary from rep to rep, and follow-up happens only during working hours — while most prospects are missed on the first attempt. Scaling outreach usually means scaling headcount, cost, and management overhead.',
                'NIRVA AI voice agents hold natural, human-like phone conversations at any scale. They introduce your offer, qualify prospects against your criteria, handle common objections, and book qualified meetings straight into your team\'s calendar — 24/7, in multiple languages, with the exact same pitch every single time. Every call is recorded, transcribed, and logged to your CRM automatically.',
                'Engagements start with your ICP and call list: we design the script with you, select and tune the voice, and configure compliance guardrails such as do-not-call suppression, calling windows, and AI disclosure where required. After a paid pilot batch, we review transcripts together, tighten the pitch based on real objections, and then scale volume up while reporting bookings, show-rates, and cost per meeting every week.',
            ],
            'benefits' => [
                '10x outreach volume without hiring SDRs',
                'Perfectly consistent pitch on every call',
                'Instant speed-to-lead, nights and weekends included',
                'Lower cost per qualified meeting',
                'Full transcripts for coaching and insight mining',
                'Scales up or down in days, not quarters',
            ],
            'included' => [
                'AI voice agent setup and voice tuning',
                'Script design and objection handling',
                'List management and DNC suppression',
                'Calendar and CRM integration',
                'Call recordings, transcripts, and QA sampling',
                'Weekly reporting: bookings, show-rate, cost per meeting',
            ],
            'process' => [
                ['title' => 'Discovery', 'text' => 'We map your ICP, offer, calendar rules, and CRM so the agent sells exactly like your best rep.'],
                ['title' => 'Script & voice design', 'text' => 'We write the pitch, rebuttals, and qualification questions, then tune a natural voice for your brand.'],
                ['title' => 'Pilot batch', 'text' => 'A controlled run of calls with full transcripts; we review objections and tighten the script with you.'],
                ['title' => 'Scale & optimize', 'text' => 'We ramp volume, A/B test openers, and report on meetings booked and pipeline generated.'],
            ],
            'faqs' => [
                ['q' => 'Will prospects know they are talking to an AI?', 'a' => 'We follow your preference and local rules: agents can disclose they are an AI assistant upfront, and the voice is tuned to sound natural without deceiving anyone. Transparency actually improves booking rates in most campaigns.'],
                ['q' => 'Is AI cold calling compliant?', 'a' => 'We build compliance in from day one: DNC list suppression, permitted calling windows, consent handling, and call recording notices where required. You approve the setup before any dial happens.'],
                ['q' => 'Which CRMs do you integrate with?', 'a' => 'HubSpot, Salesforce, Pipedrive, GoHighLevel, and most others via native integrations or API — calls, transcripts, and bookings sync automatically.'],
                ['q' => 'What languages are supported?', 'a' => 'English plus 30+ additional languages. Multilingual campaigns can route each prospect to the right voice automatically.'],
            ],
        ],
        [
            'slug' => 'ai-customer-support',
            'name' => 'AI Customer Support',
            'category' => 'ai',
            'short' => '24/7 chat & voice support',
            'description' => '24/7 AI chat & voice assistants improving satisfaction and reducing costs.',
            'icon' => 'chat',
            'overview' => [
                'Customers expect instant answers at 2pm and 2am, but staffing round-the-clock support is expensive and quality varies by shift. Long wait times hurt satisfaction, and repetitive tickets burn out your best agents — who then quit, restarting the hiring cycle.',
                'NIRVA AI support assistants resolve routine conversations instantly across chat, email, and voice. Trained on your help center, policies, and order data, they answer FAQs, track orders, process returns, book appointments, and troubleshoot step by step. When a case truly needs a human, the assistant hands over with a full summary so customers never repeat themselves.',
                'Setup starts by connecting your helpdesk and knowledge base: we train the assistant on your docs, configure tone and escalation rules, and run a supervised period where humans review edge cases. You get live analytics on resolution rate, CSAT, escalation reasons, and cost per ticket — and the assistant keeps improving as we feed resolved escalations back into training.',
            ],
            'benefits' => [
                'Instant responses, 24/7/365, no queues',
                'Higher CSAT from zero wait times',
                'Up to 70% of tickets resolved without humans',
                'Consistent, on-brand answers every time',
                'Support in your customers\u2019 languages',
                'Every conversation logged and searchable',
            ],
            'included' => [
                'AI chat and voice assistant setup',
                'Knowledge-base training and tuning',
                'Helpdesk, phone, and messaging integrations',
                'Human-escalation workflows with context handover',
                'Tone-of-voice and guardrail configuration',
                'Monthly analytics: resolution rate, CSAT, escalations',
            ],
            'process' => [
                ['title' => 'Connect', 'text' => 'We plug into your helpdesk, chat widget, and phone system, then ingest your docs and macros.'],
                ['title' => 'Train', 'text' => 'The assistant learns your policies and tone; we define exactly what it handles versus escalates.'],
                ['title' => 'Supervise', 'text' => 'A monitored launch period where humans review tricky cases and we close knowledge gaps fast.'],
                ['title' => 'Optimize', 'text' => 'We track containment and CSAT monthly, retrain on escalations, and expand coverage to new topics.'],
            ],
            'faqs' => [
                ['q' => 'What happens when the AI cannot solve an issue?', 'a' => 'It escalates to your team (or ours) with a full transcript and suggested next steps — the customer never starts over. You control the escalation rules per topic.'],
                ['q' => 'Can it take actions, not just answer questions?', 'a' => 'Yes: order tracking, returns initiation, appointment booking, password resets, and plan changes via your helpdesk and backend APIs.'],
                ['q' => 'How do you prevent wrong answers?', 'a' => 'Answers are grounded in your approved knowledge base, sensitive topics are escalation-only, and humans sample conversations weekly. Hallucination-prone open-ended generation is disabled for factual questions.'],
                ['q' => 'Does it work on voice calls too?', 'a' => 'Yes — the same brain powers chat, email, and natural-sounding voice calls with IVR replacement or overflow handling.'],
            ],
        ],
        [
            'slug' => 'ai-healthcare-scribing',
            'name' => 'AI Healthcare Scribing',
            'category' => 'ai',
            'short' => 'Clinical documentation',
            'description' => 'AI-assisted medical documentation and clinical note generation.',
            'icon' => 'heart',
            'overview' => [
                'Documentation is one of the biggest drivers of clinician burnout. Hours of after-hours charting, inconsistent note quality across providers, and slow turnaround on records all take time away from patients — and from revenue-generating visits.',
                'NIRVA AI-assisted scribing turns visit conversations into structured draft notes in your preferred format, such as SOAP, with problem lists, orders, and follow-ups captured automatically. The clinician always reviews, edits, and signs every note — the AI drafts, the human decides. Specialty-specific templates keep terminology and coding-relevant detail consistent.',
                'We start with your note templates and EHR workflow, run a supervised pilot with QA sampling on every note, and train your team on the review-and-sign routine. All handling follows HIPAA-aware practices: encrypted capture and transfer, minimum-necessary access, audit trails, and BAAs where applicable.',
            ],
            'benefits' => [
                'Reclaim hours of charting per clinician per week',
                'Same-day note completion and faster billing',
                'Consistent, template-driven note quality',
                'Clinician reviews and signs every note',
                'Secure, HIPAA-aware handling with audit trails',
                'Specialty templates tuned to your practice',
            ],
            'included' => [
                'AI scribe workflow setup and template design',
                'Secure audio capture and transcription pipeline',
                'EHR-ready formatted drafts for clinician sign-off',
                'QA sampling and accuracy reporting',
                'Clinician and staff training',
                'Ongoing template tuning per specialty',
            ],
            'process' => [
                ['title' => 'Template mapping', 'text' => 'We mirror your note formats, required fields, and coding-relevant elements per specialty.'],
                ['title' => 'Supervised pilot', 'text' => 'A small clinician group uses the workflow with 100% QA review while we tune accuracy.'],
                ['title' => 'Rollout & training', 'text' => 'We train every provider on the review-and-sign routine and embed it in the visit workflow.'],
                ['title' => 'Monitor', 'text' => 'Ongoing sampling, turnaround tracking, and template updates as your practice evolves.'],
            ],
            'faqs' => [
                ['q' => 'Is patient data handled securely?', 'a' => 'Yes: encrypted capture and transfer, role-based minimum-necessary access, full audit trails, and BAAs with covered entities. Retention policies are set to your requirements.'],
                ['q' => 'How accurate are the draft notes?', 'a' => 'Drafts are highly structured but the clinician always reviews, edits, and signs — accuracy is a shared workflow, and our QA sampling tracks it visit by visit during rollout.'],
                ['q' => 'Which specialties and EHRs work with this?', 'a' => 'Primary care, behavioral health, PT/OT, dental, and most outpatient specialties. Drafts are delivered EHR-ready for any system via copy-forward, interface files, or API.'],
                ['q' => 'Does it work for telehealth?', 'a' => 'Yes — virtual visits are captured the same way, and async review queues fit telehealth schedules well.'],
            ],
        ],
        [
            'slug' => 'lead-generation',
            'name' => 'Lead Generation',
            'category' => 'bpo',
            'short' => 'Qualified pipelines',
            'description' => 'Targeted prospect lists, data enrichment, and qualified pipeline building.',
            'icon' => 'target',
            'overview' => [
                'Pipeline is the lifeblood of growth, yet list building, enrichment, and verification quietly consume your closers\u2019 week. Stale data means bounced emails, wrong titles, and SDRs researching instead of selling — while competitors work cleaner lists.',
                'NIRVA dedicated researchers build and maintain your database: ICP-defined prospect lists, contact enrichment, email verification, segmentation, and direct CRM upload. Optional outreach support keeps sequences fed with fresh, qualified records on a weekly rhythm.',
                'We start from your best-customer profile and tech/firmographic filters, deliver a sample batch for calibration, then run weekly list drops with quality sampling. A tight feedback loop on bounce rates and meeting quality keeps the data — and your sender reputation — healthy.',
            ],
            'benefits' => [
                'Closers sell instead of researching',
                'Verified data that protects deliverability',
                'Fresh lists on a weekly rhythm',
                'ICP-tight targeting, less waste',
                'CRM kept clean and segmented',
                'Transparent per-lead economics',
            ],
            'included' => [
                'ICP definition and list criteria',
                'Prospect list building and enrichment',
                'Email verification and de-duplication',
                'Segmentation and CRM upload',
                'Bounce and quality monitoring',
                'Weekly delivery and feedback reviews',
            ],
            'process' => [
                ['title' => 'ICP calibration', 'text' => 'We profile your best customers into firmographic and technographic filters.'],
                ['title' => 'Sample batch', 'text' => 'A test list you grade for fit before we scale volume.'],
                ['title' => 'Weekly drops', 'text' => 'Fresh, verified, segmented records delivered to your CRM on schedule.'],
                ['title' => 'Quality loop', 'text' => 'We track bounces and meeting rates with you and retune targeting monthly.'],
            ],
            'faqs' => [
                ['q' => 'Where does the data come from?', 'a' => 'Licensed B2B data providers, public sources, and your own inbound — combined, verified, and de-duplicated, never scraped in violation of terms.'],
                ['q' => 'How do you protect email deliverability?', 'a' => 'Syntax, MX, and catch-all verification on every record plus bounce monitoring; bad-data rates stay within agreed thresholds or we replace the records.'],
                ['q' => 'Can you work inside our CRM?', 'a' => 'Yes — HubSpot, Salesforce, Pipedrive, and others. We follow your dedupe rules, lifecycles, and assignment logic.'],
                ['q' => 'Do you also do the outreach?', 'a' => 'List building is the core; pair it with our AI Cold Calling or Sales & Marketing support for a full pipeline motion.'],
            ],
        ],
        [
            'slug' => 'website-management',
            'name' => 'Website Management',
            'category' => 'bpo',
            'short' => 'Maintain & optimize',
            'description' => 'Updates, maintenance, performance monitoring, and content management.',
            'icon' => 'globe',
            'overview' => [
                'A stale, slow, or broken website quietly costs you trust and conversions. Yet founders and marketers rarely have time for plugin updates, backup checks, uptime monitoring, and the endless small content tweaks the site needs to stay sharp.',
                'NIRVA takes full ownership of day-to-day website operations: core and plugin updates, daily backups, uptime and security monitoring, content and image updates, speed optimization, and small conversion tweaks — all with a ticket queue you can see and SLAs you can hold us to.',
                'Onboarding starts with a full audit: broken links, speed bottlenecks, outdated plugins, SEO basics. Then we put the site on a maintenance plan with a monthly report covering uptime, updates applied, changes shipped, and next-month recommendations.',
            ],
            'benefits' => [
                'A site that is always updated and backed up',
                'Faster load times and better conversions',
                'Issues caught by monitoring, not customers',
                'Content changes done for you in days',
                'Clear monthly reporting, no surprises',
                'One accountable team instead of freelancers',
            ],
            'included' => [
                'Core, theme, and plugin updates',
                'Daily backups with tested restores',
                'Uptime and security monitoring',
                'Content, image, and page updates',
                'Speed optimization and broken-link fixes',
                'Monthly maintenance and performance report',
            ],
            'process' => [
                ['title' => 'Audit', 'text' => 'We scan speed, security, SEO basics, and broken elements, then prioritize fixes.'],
                ['title' => 'Stabilize', 'text' => 'Critical updates, backups, and monitoring go live first — the site gets safe immediately.'],
                ['title' => 'Operate', 'text' => 'Your team submits changes via a shared queue; we ship on SLA and communicate status.'],
                ['title' => 'Improve', 'text' => 'Monthly reports with speed trends and conversion recommendations keep the site compounding.'],
            ],
            'faqs' => [
                ['q' => 'Which platforms do you manage?', 'a' => 'WordPress, Webflow, Shopify, Squarespace, and custom stacks for content and front-end maintenance.'],
                ['q' => 'What if the site gets hacked?', 'a' => 'Monitoring catches anomalies fast, clean backups enable quick restores, and we harden the site after any incident. Response SLAs are in the plan.'],
                ['q' => 'Do you redesign websites too?', 'a' => 'Management plans cover iterations and CRO tweaks; full redesigns are scoped as separate projects with the same team.'],
                ['q' => 'Who owns logins and licenses?', 'a' => 'You do — we work inside your accounts with least-privilege access you can revoke anytime.'],
            ],
        ],
        [
            'slug' => 'ecommerce-support',
            'name' => 'E-commerce Support',
            'category' => 'bpo',
            'short' => 'Stores that convert',
            'description' => 'Catalog management, order support, listings, and customer experience for online stores.',
            'icon' => 'cart',
            'overview' => [
                'Running an online store means two full-time jobs: catalog operations and customer tickets. Listings go stale, variants drift out of sync, and order or returns questions pile up — especially during peaks, when slow responses directly cost revenue and reviews.',
                'NIRVA e-commerce specialists handle both sides: product uploads, descriptions, images, pricing, and inventory coordination on the catalog side; fast, friendly order, shipping, and returns support on the customer side. Review monitoring and listing SEO keep your products discoverable and trusted.',
                'We learn your SKUs, policies, and tools, set response-time SLAs per channel, and build macros for repeat cases. Staffing flexes for launches and holiday peaks, with weekly reporting on ticket volumes, response times, and CSAT.',
            ],
            'benefits' => [
                'Catalog always accurate and SEO-friendly',
                'Fast responses that protect reviews and revenue',
                'Peak-season staffing without hiring stress',
                'Consistent policies across every channel',
                'Fewer returns Escalations through better listings',
                'Clear weekly ops reporting',
            ],
            'included' => [
                'Product uploads, variants, and pricing updates',
                'SEO-friendly titles and descriptions',
                'Order, shipping, and returns support',
                'Review monitoring and responses',
                'Inventory coordination and stock alerts',
                'Peak-season flexible staffing',
            ],
            'process' => [
                ['title' => 'Store immersion', 'text' => 'We learn your catalog, policies, tools, and tone across every sales channel.'],
                ['title' => 'Playbooks & SLAs', 'text' => 'Macros, escalation paths, and response-time targets agreed up front.'],
                ['title' => 'Daily operations', 'text' => 'Catalog updates and ticket queues handled on SLA, with QA sampling.'],
                ['title' => 'Peak readiness', 'text' => 'Forecast-based staffing ramps for launches, promos, and holidays.'],
            ],
            'faqs' => [
                ['q' => 'Which platforms do you support?', 'a' => 'Shopify, WooCommerce, Amazon, eBay, Etsy, and most marketplaces — plus Gorgias, Zendesk, and Richpanel for support.'],
                ['q' => 'Can you handle returns and refunds?', 'a' => 'Yes, within the approval limits you set — routine cases resolved same-day, edge cases escalated with recommendations.'],
                ['q' => 'How do you handle peak seasons?', 'a' => 'We forecast from your history and promos, pre-train flex staff on your store, and ramp coverage for the peak window.'],
                ['q' => 'Do you write product content too?', 'a' => 'Yes — titles, bullets, and descriptions optimized for both search and conversion, in your brand voice.'],
            ],
        ],
        [
            'slug' => 'sales-marketing',
            'name' => 'Sales & Marketing',
            'category' => 'bpo',
            'short' => 'Grow revenue',
            'description' => 'Campaign execution, outreach, and funnel support to drive revenue growth.',
            'icon' => 'chart',
            'overview' => [
                'Most growth plans die in execution: campaigns launch late, follow-ups slip, CRMs fill with stale stages, and nobody can say which activity actually created pipeline. Hiring a full in-house revenue team before product-market fit is usually premature — and expensive.',
                'NIRVA plugs in a fractional revenue pod: SDR-style outreach support, email and LinkedIn sequence execution, CRM hygiene and stage management, and weekly pipeline reporting. Your closers get qualified conversations and a clean funnel; you get a clear view of what is working.',
                'We start from your ICP and existing playbooks (or help you write them), run outreach in weekly sprints, and review reply quality and meeting rates with you. Retargeting, list refreshes, and message testing compound results month over month.',
            ],
            'benefits' => [
                'Consistent outbound without full-time hires',
                'Clean CRM stages you can actually forecast from',
                'Faster follow-up on every inbound lead',
                'Message testing that improves reply rates',
                'Weekly visibility into pipeline activity',
                'Easy to scale up when campaigns land',
            ],
            'included' => [
                'Outbound email and LinkedIn execution',
                'Follow-up sequences and inbox handling',
                'CRM hygiene, stages, and task management',
                'List refreshes and segmentation',
                'A/B testing of subject lines and angles',
                'Weekly pipeline and activity reporting',
            ],
            'process' => [
                ['title' => 'Playbook', 'text' => 'We lock ICP, messaging angles, sequences, and meeting-qualification criteria with you.'],
                ['title' => 'Launch sprint', 'text' => 'First sequences go live; we calibrate on reply quality in week one.'],
                ['title' => 'Weekly rhythm', 'text' => 'Outreach, follow-ups, and CRM hygiene run on schedule with a short review call.'],
                ['title' => 'Compound', 'text' => 'Winners get scaled, losers get replaced — targeting and messaging sharpen monthly.'],
            ],
            'faqs' => [
                ['q' => 'Do you replace our sales team?', 'a' => 'No — we amplify it. We handle top-of-funnel execution and hygiene so your closers spend time closing.'],
                ['q' => 'How do you protect our domain reputation?', 'a' => 'Gradual warm-up, volume caps, verified data only, and bounce/spam monitoring with automatic pauses on anomalies.'],
                ['q' => 'Can you follow our existing playbook?', 'a' => 'Absolutely — or we can draft one from your best-performing campaigns and refine it with you.'],
                ['q' => 'What does reporting look like?', 'a' => 'Weekly: volume, replies, positive rate, meetings booked, and pipeline value — plus what we are testing next.'],
            ],
        ],
        [
            'slug' => 'ai-automation',
            'name' => 'AI Automation',
            'category' => 'ai',
            'short' => 'Automate workflows',
            'description' => 'Automate repetitive business processes using intelligent AI systems.',
            'icon' => 'chip',
            'overview' => [
                'Every team has them: the copy-paste between tools, the manual data entry, the weekly report assembled by hand, the approval chain living in chat messages. This busywork is where margins and morale quietly leak — and headcount is the most expensive way to fix it.',
                'NIRVA designs and builds intelligent automations across your stack: AI document processing, CRM and helpdesk workflows, lead routing, report generation, and system integrations — with human approvals exactly where judgment matters. The result is fewer errors, faster cycles, and hours returned to real work every week.',
                'We begin with a workflow audit to find the highest-ROI candidates, pilot one automation with clear before/after metrics, then roll out in priority order. Every automation ships with monitoring, error handling, and documentation — and we maintain them as your tools and processes evolve.',
            ],
            'benefits' => [
                'Hours returned to high-value work weekly',
                'Fewer manual errors and missed steps',
                'Faster cycle times across operations',
                'Processes that scale without headcount',
                'Full visibility with logs and alerts',
                'Maintained automations, not abandoned scripts',
            ],
            'included' => [
                'Workflow audit and ROI prioritization',
                'Automation design and implementation',
                'AI document and data processing',
                'CRM, helpdesk, and tool integrations',
                'Approval gates and error handling',
                'Monitoring, docs, and ongoing maintenance',
            ],
            'process' => [
                ['title' => 'Audit', 'text' => 'We map your workflows and score candidates by hours saved versus build effort.'],
                ['title' => 'Pilot', 'text' => 'One high-ROI workflow automated first, with before/after metrics you can verify.'],
                ['title' => 'Rollout', 'text' => 'We build the backlog in priority order with approvals and safeguards baked in.'],
                ['title' => 'Maintain', 'text' => 'Monitoring, alerting, and updates as your tools, volumes, and processes change.'],
            ],
            'faqs' => [
                ['q' => 'Which tools can you connect?', 'a' => 'Most modern SaaS via native integrations, Zapier/Make, or direct API work — CRMs, helpdesks, spreadsheets, ERPs, and custom databases.'],
                ['q' => 'What if an automation makes a mistake?', 'a' => 'High-stakes steps get human approval gates; everything is logged, and alerts fire on anomalies so issues surface in minutes, not month-end.'],
                ['q' => 'How fast is the payback?', 'a' => 'Pilots typically target workflows costing 10+ hours a week — most pay back within the first quarter and compound as we add more.'],
                ['q' => 'Do we own the automations?', 'a' => 'Yes — built in your accounts with documentation and handover; we stay on for maintenance as long as useful.'],
            ],
        ],
    ],

    'whyChoose' => [
        'Lower Operational Costs',
        '24/7 Business Support',
        'Human + AI Collaboration',
        'AI-Driven Efficiency',
        'Scalable Solutions',
        'Faster Service Delivery',
    ],

    'audiences' => [
        'Startups',
        'SMEs',
        'E-commerce companies',
        'Healthcare organizations',
        'Tech companies',
        'International enterprises',
    ],

    'revenueModels' => [
        'Monthly service contracts',
        'Project-based outsourcing',
        'Dedicated team model',
        'AI automation solutions',
        'Custom enterprise solutions',
    ],

    'howWeWork' => [
        [
            'title' => 'AI does the heavy lifting',
            'text' => 'Voice agents, support assistants, and automations handle high-volume, repetitive work around the clock — consistently and at scale.',
        ],
        [
            'title' => 'Humans own quality',
            'text' => 'Specialists design every workflow, supervise the AI, and step in wherever judgment, empathy, or compliance matters.',
        ],
        [
            'title' => 'Everything is measured',
            'text' => 'Resolution rates, bookings, turnaround times, and cost per outcome are reported regularly — then used to keep improving.',
        ],
    ],

    'roadmap' => [
        ['phase' => 'Phase 1', 'title' => 'AI Cold Calling'],
        ['phase' => 'Phase 2', 'title' => 'AI Customer Support'],
        ['phase' => 'Phase 3', 'title' => 'Healthcare Scribing'],
        ['phase' => 'Phase 4', 'title' => 'Workflow Automation'],
        ['phase' => 'Phase 5', 'title' => 'CRM Integration'],
        ['phase' => 'Phase 6', 'title' => 'Predictive Analytics'],
        ['phase' => 'Phase 7', 'title' => 'Global Expansion'],
    ],

    // Placeholders — owner to supply real details before launch.
    'contact' => [
        'email' => 'hello@nirva.example',
        'phone' => '+1 (555) 000-0000',
        'address' => 'City, Country',
        'socials' => [
            ['label' => 'LinkedIn', 'href' => 'https://linkedin.com'],
            ['label' => 'X', 'href' => 'https://x.com'],
            ['label' => 'Facebook', 'href' => 'https://facebook.com'],
        ],
    ],
];
