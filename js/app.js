/* =========================================================
   LACOLO DEV & CREATIVE — app.js
   ========================================================= */

/* Numero de WhatsApp de LaColo */
var WHATSAPP_NUMBER = "50377471010";

/* ==== Modelo de datos del cotizador (ES / EN) — catálogo y precios tomados de la página de referencia ==== */
var QUOTE_AREAS_ES = [
  {
    id: 'sitios-web',
    name: 'Sitios Web',
    icon: 'bi-globe2',
    tagline: 'Landing pages, sitios corporativos y tiendas online.',
    disabled: false,
    subgroups: [
      {
        name: 'Landing Page',
        items: [
          { id: 'lp-base', name: 'Base: diseño + 1 página + hosting inicial', price: 220, kind: 'check' },
          { id: 'lp-form', name: 'Formulario con guardado en base de datos', price: 35, kind: 'check' },
          { id: 'lp-seo', name: 'SEO básico', price: 30, kind: 'check' },
          { id: 'lp-analytics', name: 'Analítica básica (GA/Meta Pixel)', price: 20, kind: 'check' },
          { id: 'lp-anim', name: 'Animaciones avanzadas (estilo premium)', price: 70, kind: 'check' },
          { id: 'lp-pay', name: 'Botón/link de pago (1 producto)', price: 35, kind: 'check' },
          { id: 'lp-booking', name: 'Integración de agenda/citas', price: 45, kind: 'check' },
          { id: 'lp-multi', name: 'Multi-idioma', price: 60, kind: 'check' }
        ]
      },
      {
        name: 'Corporativo',
        items: [
          { id: 'cp-base', name: 'Base: estructura + 1ª página incluida', price: 350, kind: 'check' },
          { id: 'cp-page', name: 'Página adicional', price: 60, kind: 'qty' },
          { id: 'cp-cms', name: 'Blog/CMS editable (incluye hosting dinámico: $10/mes)', price: 160, kind: 'check' },
          { id: 'cp-multi', name: 'Multi-idioma', price: 80, kind: 'check' }
        ]
      },
      {
        name: 'Tienda Online',
        items: [
          { id: 'ti-base', name: 'Base: carrito + 1 método de pago (incluye hosting dinámico: $10/mes)', price: 660, kind: 'check' },
          { id: 'ti-page', name: 'Página adicional', price: 60, kind: 'qty' },
          {
            id: 'ti-catalog', name: 'Catálogo de productos', kind: 'radio', options: [
              { id: 'ti-cat-25', name: 'Hasta 25 productos', price: 100 },
              { id: 'ti-cat-50', name: '26–50 productos', price: 180 },
              { id: 'ti-cat-100', name: '51–100 productos', price: 300 },
              { id: 'ti-cat-plus', name: '100+ productos', price: 0, customQuote: true }
            ]
          },
          { id: 'ti-currency', name: 'Multi-moneda', price: 70, kind: 'check' },
          { id: 'ti-shipping', name: 'Calculadora de envío', price: 90, kind: 'check' }
        ]
      }
    ]
  },
  {
    id: 'atencion-ia',
    name: 'Atención al Cliente con IA',
    icon: 'bi-chat-dots',
    subtitle: 'Conversación en tiempo real — alguien te escribe y el chat responde ahora',
    tagline: 'Responde a tus clientes automáticamente, donde sea que te escriban.',
    disabled: false,
    items: [
      { id: 'web-bot', name: 'Chatbot de atención al cliente con IA (sitio web) (incluye hosting dinámico: $10/mes)', price: 130, kind: 'check' },
      { id: 'wa-link', name: 'WhatsApp — botón directo en tu sitio web', price: 25, kind: 'check' },
      { id: 'ig-dm', name: 'Instagram DM con IA', kind: 'check', soon: true }
    ]
  },
  {
    id: 'apps-sistemas',
    name: 'Apps, Sistemas y Paneles',
    icon: 'bi-grid-3x3-gap',
    tagline: 'Proyectos a medida — cotización personalizada según alcance.',
    disabled: false,
    items: [
      { id: 'info-app-mvp', name: 'App móvil simple (MVP, 1 plataforma)', kind: 'check', customQuote: true, range: '$1,500 – $3,000' },
      { id: 'info-app-full', name: 'App móvil completa (iOS + Android)', kind: 'check', customQuote: true, range: '$3,500 – $8,000' },
      { id: 'info-saas', name: 'Sistema SaaS / plataforma personalizada', kind: 'check', customQuote: true, range: '$4,000 – $12,000+' },
      { id: 'info-admin-panel', name: 'Panel administrativo', kind: 'check', customQuote: true, range: '$1,200 – $3,000' }
    ]
  },
  {
    id: 'automatizacion-ventas',
    name: 'Automatización de Ventas',
    icon: 'bi-bullseye',
    subtitle: 'Seguimiento automático después — sin conversación en vivo, da seguimiento solo con el tiempo',
    tagline: 'Seguimiento y calificación automática de tus prospectos.',
    disabled: true,
    items: [
      { id: 'lead-bot', name: 'Bot calificador de leads', kind: 'check', soon: true },
      { id: 'lead-follow', name: 'Seguimiento automático de prospectos', kind: 'check', soon: true },
      { id: 'lead-crm', name: 'Agendado automático de citas/CRM', kind: 'check', soon: true }
    ]
  },
  {
    id: 'marketing-contenido',
    name: 'Marketing y Contenido',
    icon: 'bi-stars',
    tagline: 'Piezas gráficas y contenido mensual para tus redes, creado por un diseñador gráfico.',
    disabled: false,
    items: [
      { id: 'social-content', name: 'Marketing y Contenido (diseño gráfico para redes)', kind: 'check', customQuote: true, range: '$100 – $200 / mes' }
    ]
  }
];

var QUOTE_AREAS_EN = [
  {
    id: 'sitios-web',
    name: 'Websites',
    icon: 'bi-globe2',
    tagline: 'Landing pages, corporate sites, and online stores.',
    disabled: false,
    subgroups: [
      {
        name: 'Landing Page',
        items: [
          { id: 'lp-base', name: 'Base: design + 1 page + initial hosting', price: 220, kind: 'check' },
          { id: 'lp-form', name: 'Form with database storage', price: 35, kind: 'check' },
          { id: 'lp-seo', name: 'Basic SEO', price: 30, kind: 'check' },
          { id: 'lp-analytics', name: 'Basic analytics (GA/Meta Pixel)', price: 20, kind: 'check' },
          { id: 'lp-anim', name: 'Advanced animations (premium style)', price: 70, kind: 'check' },
          { id: 'lp-pay', name: 'Payment button/link (1 product)', price: 35, kind: 'check' },
          { id: 'lp-booking', name: 'Booking/appointment integration', price: 45, kind: 'check' },
          { id: 'lp-multi', name: 'Multi-language', price: 60, kind: 'check' }
        ]
      },
      {
        name: 'Corporate',
        items: [
          { id: 'cp-base', name: 'Base: structure + 1st page included', price: 350, kind: 'check' },
          { id: 'cp-page', name: 'Additional page', price: 60, kind: 'qty' },
          { id: 'cp-cms', name: 'Editable Blog/CMS (includes dynamic hosting: $10/mo)', price: 160, kind: 'check' },
          { id: 'cp-multi', name: 'Multi-language', price: 80, kind: 'check' }
        ]
      },
      {
        name: 'Online Store',
        items: [
          { id: 'ti-base', name: 'Base: cart + 1 payment method (includes dynamic hosting: $10/mo)', price: 660, kind: 'check' },
          { id: 'ti-page', name: 'Additional page', price: 60, kind: 'qty' },
          {
            id: 'ti-catalog', name: 'Product catalog', kind: 'radio', options: [
              { id: 'ti-cat-25', name: 'Up to 25 products', price: 100 },
              { id: 'ti-cat-50', name: '26–50 products', price: 180 },
              { id: 'ti-cat-100', name: '51–100 products', price: 300 },
              { id: 'ti-cat-plus', name: '100+ products', price: 0, customQuote: true }
            ]
          },
          { id: 'ti-currency', name: 'Multi-currency', price: 70, kind: 'check' },
          { id: 'ti-shipping', name: 'Shipping calculator', price: 90, kind: 'check' }
        ]
      }
    ]
  },
  {
    id: 'atencion-ia',
    name: 'AI Customer Support',
    icon: 'bi-chat-dots',
    subtitle: 'Real-time conversation — someone messages you and the chat replies now',
    tagline: 'Automatically responds to your customers, wherever they message you.',
    disabled: false,
    items: [
      { id: 'web-bot', name: 'AI customer support chatbot (website) (includes dynamic hosting: $10/mo)', price: 130, kind: 'check' },
      { id: 'wa-link', name: 'WhatsApp — direct button on your website', price: 25, kind: 'check' },
      { id: 'ig-dm', name: 'Instagram DM with AI', kind: 'check', soon: true }
    ]
  },
  {
    id: 'apps-sistemas',
    name: 'Apps, Systems & Dashboards',
    icon: 'bi-grid-3x3-gap',
    tagline: 'Custom projects — personalized quote based on scope.',
    disabled: false,
    items: [
      { id: 'info-app-mvp', name: 'Simple mobile app (MVP, 1 platform)', kind: 'check', customQuote: true, range: '$1,500 – $3,000' },
      { id: 'info-app-full', name: 'Full mobile app (iOS + Android)', kind: 'check', customQuote: true, range: '$3,500 – $8,000' },
      { id: 'info-saas', name: 'SaaS system / custom platform', kind: 'check', customQuote: true, range: '$4,000 – $12,000+' },
      { id: 'info-admin-panel', name: 'Admin panel', kind: 'check', customQuote: true, range: '$1,200 – $3,000' }
    ]
  },
  {
    id: 'automatizacion-ventas',
    name: 'Sales Automation',
    icon: 'bi-bullseye',
    subtitle: 'Automatic follow-up afterward — no live conversation, it follows up over time',
    tagline: 'Automatic follow-up and qualification of your leads.',
    disabled: true,
    items: [
      { id: 'lead-bot', name: 'Lead-qualifying bot', kind: 'check', soon: true },
      { id: 'lead-follow', name: 'Automatic lead follow-up', kind: 'check', soon: true },
      { id: 'lead-crm', name: 'Automatic appointment scheduling/CRM', kind: 'check', soon: true }
    ]
  },
  {
    id: 'marketing-contenido',
    name: 'Marketing & Content',
    icon: 'bi-stars',
    tagline: 'Monthly graphic pieces and content for your social media, made by a graphic designer.',
    disabled: false,
    items: [
      { id: 'social-content', name: 'Marketing & Content (social media graphic design)', kind: 'check', customQuote: true, range: '$100 – $200 / mo' }
    ]
  }
];

var QUOTE_EXTRA_ITEM_ES = { id: 'extra-round', name: 'Ronda de cambios adicional', price: 25 };
var QUOTE_EXTRA_ITEM_EN = { id: 'extra-round', name: 'Additional revision round', price: 25 };

/* ==== Traducciones de texto estático ==== */
var translations = {
    es: {
        site_title: "LaColo Dev & Creative | Excelencia en Ingeniería y Diseño",
        nav_services: "Servicios",
        nav_pricing: "Cotizar",
        nav_faq: "FAQ",
        nav_contact: "Contacto",
        nav_cta: "Hablemos",
        hero_lockup_tag: "Dev & Creative",
        hero_eyebrow: "Ingeniería + Creatividad",
        hero_title: "Desarrollo web de alto rendimiento con un alma creativa.",
        hero_lead: "Construimos experiencias digitales seguras, rápidas e impactantes. Potenciado por la ingeniería, protegido por Cloudflare e impulsado por el impacto social.",
        btn_build: "Cotizar mi Proyecto",
        btn_consultation: "Consultoría Gratis",
        trust_1: "Código a la medida",
        trust_2: "Protegido con Cloudflare",
        trust_3: "Acompañamiento cercano",
        services_eyebrow: "Lo que hacemos",
        services_title: "Ingeniería y creatividad al servicio de tu negocio",
        services_lead: "No solo construimos, pensamos primero en cómo tu negocio va a vender y atender mejor. Hoy ya ofrecemos 4 de estas áreas; la otra viene en camino.",
        svc_tag_live: "● Disponible ahora",
        svc_tag_soon: "Próximamente",
        svc_1_title: "Sitios Web",
        svc_1_desc: "Landing page, sitio corporativo o tienda en línea — diseñados para convertir visitas en clientes.",
        svc_2_title: "Atención al Cliente con IA",
        svc_2_desc: "Chat en tu sitio y WhatsApp respondiendo por ti las 24 horas, sin perder el trato humano.",
        svc_3_title: "Apps, Sistemas y Paneles",
        svc_3_desc: "Proyectos a la medida — apps móviles, sistemas propios, paneles administrativos — cotizados según tu necesidad.",
        svc_4_title: "Marketing y Contenido",
        svc_4_desc: "Piezas gráficas y contenido mensual para tus redes, creado por un diseñador gráfico.",
        svc_5_title: "Automatización de Ventas",
        svc_5_desc: "Seguimiento automático de tus prospectos para que ninguna oportunidad se enfríe ni se pierda.",
        btn_view_pricing: "Ver precios y armar tu cotización",
        why_eyebrow: "Por qué LaColo",
        why_title: "Pensado en la persona del otro lado de la pantalla",
        why_1_title: "Estrategia antes que tecnología",
        why_1_desc: "Empezamos entendiendo tu negocio y a tus clientes, no vendiéndote una herramienta genérica.",
        why_2_title: "Honestidad y excelencia",
        why_2_desc: "Mi trabajo se guía por la honestidad; no solo contrato servicios técnicos, me asocio con tu negocio.",
        why_3_title: "Cercano y con alcance global",
        why_3_desc: "Con base en El Salvador, comunicación directa y honesta en cada paso del proyecto.",
        testi_eyebrow: "Lo que dicen",
        testi_title: "Confianza que se construye entregando",
        testi_lead: "Espacio de ejemplo — aquí irán los testimonios reales de tus clientes a medida que los vayas consiguiendo.",
        testi_1_quote: "\"LaColo nos entregó el sitio antes de lo prometido y el soporte mensual nos ha quitado un problema de encima.\"",
        testi_1_role: "Dueña, Repostería Dulce Trigo",
        testi_2_quote: "\"Se nota la mezcla entre lo técnico y lo creativo. El sitio se ve profesional y carga muy rápido.\"",
        testi_2_role: "Gerente, Clínica Dental Sonrisas",
        testi_3_quote: "\"El acompañamiento fue cercano en todo el proceso. Primero entendieron el negocio y después construyeron.\"",
        testi_3_role: "Fundadora, Estudio Fit Daniela",
        quote_eyebrow: "Cotiza tu proyecto",
        quote_title: "Arma tu propuesta a tu medida",
        quote_lead: "Elige lo que tu negocio necesita y mira el estimado en tiempo real. Al final, nos escribes por WhatsApp y afinamos los detalles juntos.",
        quote_chat_title: "¿No sabes qué elegir?",
        quote_chat_lead: "Escríbenos por WhatsApp y te recomendamos lo ideal para tu negocio.",
        quote_chat_btn: "Hablar por WhatsApp",
        quote_total_label: "Total estimado",
        quote_empty: "Aún no has elegido nada.",
        quote_note_custom: "Incluye ítems de cotización personalizada — el total final puede variar.",
        quote_submit: "Enviar mi solicitud",
        quote_submit_mobile: "Enviar solicitud",
        quote_modal_title: "Casi listo — cuéntanos cómo contactarte",
        form_name_label: "Nombre",
        form_company_label: "Empresa o marca personal",
        form_optional: "(opcional)",
        quote_modal_submit: "Enviar por WhatsApp",
        process_eyebrow: "Cómo trabajamos",
        process_title: "De la idea a tu sitio funcionando",
        step_1_title: "Conversamos sobre tu negocio",
        step_1_desc: "Entendemos qué necesitas, quiénes son tus clientes y qué te está costando tiempo o ventas hoy.",
        step_2_title: "Armamos tu cotización",
        step_2_desc: "Usas el configurador de precios o hablamos directo por WhatsApp para definir el alcance exacto.",
        step_3_title: "Diseñamos y construimos",
        step_3_desc: "Te mostramos avances antes de dar por definitivo cualquier elemento visual o técnico.",
        step_4_title: "Lanzamos y te acompañamos",
        step_4_desc: "Publicamos tu sitio y seguimos cerca en las primeras semanas de uso.",
        faq_eyebrow: "Preguntas frecuentes",
        faq_title: "Antes de que preguntes",
        faq_1_q: "¿Cuánto tarda en estar listo mi sitio web?",
        faq_1_a: "Depende del alcance, pero una landing page suele estar lista en 1-2 semanas desde que definimos el contenido y el diseño contigo.",
        faq_2_q: "¿Qué pasa si quiero cambios después del lanzamiento?",
        faq_2_a: "Cada proyecto de sitio web incluye 2 rondas de cambios/revisiones antes del lanzamiento (puedes agregar rondas adicionales por $25 c/u desde el mismo configurador de precios). Una vez lanzado tu proyecto, cualquier cambio o ajuste nuevo se cotiza según el caso — no manejamos un plan mensual fijo. Usamos una tarifa por hora según la complejidad (desde $10/hora para ajustes simples, hasta $30/hora para trabajo que involucra IA real), así que solo pagas por el trabajo real que necesitas, cuando lo necesitas.",
        faq_3_q: "¿Necesito saber de tecnología para trabajar contigo?",
        faq_3_a: "No. Yo me encargo de toda la parte técnica; tú solo me cuentas cómo funciona tu negocio y qué quieres lograr.",
        faq_4_q: "¿Qué pasa después de enviar mi cotización?",
        faq_4_a: "Tu selección se envía por WhatsApp directamente a mí. Te respondo para afinar detalles, resolver dudas y confirmar el alcance final antes de arrancar.",
        cta_title: "Tu negocio merece un sitio que trabaje mientras tú descansas.",
        cta_lead: "Cuéntanos sobre tu negocio y te mostramos cómo se vería tu sitio.",
        cta_btn: "Empezar ahora",
        impact_eyebrow: "Más que código",
        impact_title: "Nuestra Misión Social",
        impact_lead: "En LaColo, creemos que la tecnología debe ser una fuerza para el bien.",
        impact_text: "Un porcentaje de cada proyecto se destina directamente a financiar proyectos de arte urbano para jóvenes en El Salvador.",
        about_eyebrow: "Sobre mí",
        about_title: "Ingeniería precisa. Visión creativa. Con propósito.",
        about_subtitle: "La intersección entre tecnología y narrativa",
        about_p1: "Como estudiante de 4to año de Ingeniería en Desarrollo de Software (ITCA), Licenciado en Comunicación Social (UCA) y Técnico en Electrónica (INTI), uno la lógica rigurosa del código con la narrativa estratégica.",
        about_p2: "Mi trabajo como cristiano se guía por la honestidad y la excelencia. No solo contrato servicios técnicos; me asocio con su negocio para asegurar que su ecosistema digital comunique su esencia con integridad.",
        about_location: "Con base en El Salvador | Sirviendo globalmente",
        contact_eyebrow: "Hablemos",
        contact_title: "Escríbenos por el canal que prefieras",
        contact_lead: "Respondemos rápido y sin rodeos. Cuéntanos qué necesita tu negocio.",
        form_msg_label: "Cuéntanos sobre tu negocio",
        form_name_placeholder: "Tu nombre",
        form_msg_placeholder: "¿Cómo podemos elevar su presencia digital?",
        btn_send_whatsapp: "Enviar por WhatsApp",
        contact_hablemos: "Contacto directo",
        contact_sub: "Atención directa para proyectos de desarrollo y creativos.",
        chat_header_title: "Asistente LaColo",
        chat_header_sub: "Escríbenos y te respondemos rápido",
        chat_greeting: "¡Hola! Gracias por visitarnos. Escríbenos por WhatsApp y con gusto te ayudamos con tu proyecto.",
        chat_wa_btn: "Chatear por WhatsApp",
        footer_copy: "&copy; 2026 LaColo Dev & Creative. Con base en El Salvador 🇸🇻"
    },
    en: {
        site_title: "LaColo Dev & Creative | Engineering & Design Excellence",
        nav_services: "Services",
        nav_pricing: "Get a Quote",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_cta: "Let's Talk",
        hero_lockup_tag: "Dev & Creative",
        hero_eyebrow: "Engineering + Creativity",
        hero_title: "High-performance web development with a creative soul.",
        hero_lead: "We build secure, fast, and impactful digital experiences. Powered by engineering, protected by Cloudflare, and driven by social impact.",
        btn_build: "Quote My Project",
        btn_consultation: "Free Consultation",
        trust_1: "Custom-built code",
        trust_2: "Cloudflare protected",
        trust_3: "Close support",
        services_eyebrow: "What we do",
        services_title: "Engineering and creativity for your business",
        services_lead: "We don't just build — we think first about how your business will sell and serve better. Today we already offer 4 of these areas; the other one is on the way.",
        svc_tag_live: "● Available now",
        svc_tag_soon: "Coming soon",
        svc_1_title: "Websites",
        svc_1_desc: "Landing page, corporate site, or online store — designed to convert visits into customers.",
        svc_2_title: "AI Customer Support",
        svc_2_desc: "Chat on your site and WhatsApp responding for you 24/7, without losing the human touch.",
        svc_3_title: "Apps, Systems & Dashboards",
        svc_3_desc: "Custom projects — mobile apps, your own systems, admin panels — quoted to your needs.",
        svc_4_title: "Marketing & Content",
        svc_4_desc: "Monthly graphic pieces and content for your social media, made by a graphic designer.",
        svc_5_title: "Sales Automation",
        svc_5_desc: "Automatic follow-up for your leads so no opportunity goes cold or gets lost.",
        btn_view_pricing: "See pricing and build your quote",
        why_eyebrow: "Why LaColo",
        why_title: "Designed with the person on the other side of the screen in mind",
        why_1_title: "Strategy before technology",
        why_1_desc: "We start by understanding your business and your clients, not selling you a generic tool.",
        why_2_title: "Honesty and excellence",
        why_2_desc: "My work is guided by honesty; I don't just provide technical services, I partner with your business.",
        why_3_title: "Close, with global reach",
        why_3_desc: "Based in El Salvador, with direct and honest communication at every step of the project.",
        testi_eyebrow: "What people say",
        testi_title: "Trust built by delivering",
        testi_lead: "Example space — your real client testimonials will go here as you collect them.",
        testi_1_quote: "\"LaColo delivered our site ahead of schedule, and the monthly support has taken a load off our shoulders.\"",
        testi_1_role: "Owner, Repostería Dulce Trigo",
        testi_2_quote: "\"You can tell the technical and creative sides work together. The site looks professional and loads fast.\"",
        testi_2_role: "Manager, Clínica Dental Sonrisas",
        testi_3_quote: "\"The support felt close throughout the whole process. They understood the business first, then built.\"",
        testi_3_role: "Founder, Estudio Fit Daniela",
        quote_eyebrow: "Get your quote",
        quote_title: "Build your proposal your way",
        quote_lead: "Choose what your business needs and see the estimate in real time. At the end, message us on WhatsApp and we'll fine-tune the details together.",
        quote_chat_title: "Not sure what to choose?",
        quote_chat_lead: "Message us on WhatsApp and we'll recommend what's best for your business.",
        quote_chat_btn: "Chat on WhatsApp",
        quote_total_label: "Estimated total",
        quote_empty: "You haven't chosen anything yet.",
        quote_note_custom: "Includes custom-quote items — the final total may vary.",
        quote_submit: "Send my request",
        quote_submit_mobile: "Send request",
        quote_modal_title: "Almost done — tell us how to reach you",
        form_name_label: "Name",
        form_company_label: "Company or personal brand",
        form_optional: "(optional)",
        quote_modal_submit: "Send via WhatsApp",
        process_eyebrow: "How we work",
        process_title: "From idea to a working website",
        step_1_title: "We talk about your business",
        step_1_desc: "We understand what you need, who your clients are, and what's costing you time or sales today.",
        step_2_title: "We build your quote",
        step_2_desc: "Use the pricing configurator or talk to us directly on WhatsApp to define the exact scope.",
        step_3_title: "We design and build",
        step_3_desc: "We show you progress before finalizing any visual or technical element.",
        step_4_title: "We launch and stay close",
        step_4_desc: "We publish your site and stay close during the first weeks of use.",
        faq_eyebrow: "Frequently asked questions",
        faq_title: "Before you ask",
        faq_1_q: "How long until my website is ready?",
        faq_1_a: "It depends on scope, but a landing page is usually ready in 1-2 weeks once we define content and design together.",
        faq_2_q: "What if I want changes after launch?",
        faq_2_a: "Every website project includes 2 rounds of changes/revisions before launch (you can add extra rounds for $25 each right from the pricing configurator). Once your project is live, any new change or adjustment is quoted case by case — we don't run a fixed monthly plan. We use an hourly rate based on complexity (from $10/hour for simple tweaks, up to $30/hour for work involving real AI), so you only pay for the actual work you need, when you need it.",
        faq_3_q: "Do I need to know about technology to work with you?",
        faq_3_a: "No. I handle the entire technical side; you just tell me how your business works and what you want to achieve.",
        faq_4_q: "What happens after I send my quote?",
        faq_4_a: "Your selection is sent directly to me via WhatsApp. I'll reply to fine-tune details, answer questions, and confirm the final scope before we start.",
        cta_title: "Your business deserves a site that works while you rest.",
        cta_lead: "Tell us about your business and we'll show you what your site could look like.",
        cta_btn: "Get started",
        impact_eyebrow: "More than code",
        impact_title: "Our Social Mission",
        impact_lead: "At LaColo, we believe technology should be a force for good.",
        impact_text: "A percentage of every project goes directly to funding urban art projects for young people in El Salvador.",
        about_eyebrow: "About me",
        about_title: "Precise engineering. Creative vision. With purpose.",
        about_subtitle: "The intersection of technology and storytelling",
        about_p1: "As a 4th-year Software Engineering student (ITCA), with a degree in Social Communication (UCA) and a Technician in Electronics (INTI), I combine rigorous coding logic with strategic storytelling.",
        about_p2: "My work as a Christian is guided by honesty and excellence. I don't just provide technical services; I partner with your business to make sure your digital ecosystem communicates its essence with integrity.",
        about_location: "Proudly based in El Salvador | Serving globally",
        contact_eyebrow: "Let's talk",
        contact_title: "Write to us through the channel you prefer",
        contact_lead: "We respond fast and straight to the point. Tell us what your business needs.",
        form_msg_label: "Tell us about your business",
        form_name_placeholder: "Your name",
        form_msg_placeholder: "How can we elevate your digital presence?",
        btn_send_whatsapp: "Send via WhatsApp",
        contact_hablemos: "Direct contact",
        contact_sub: "Direct attention for development and creative projects.",
        chat_header_title: "LaColo Assistant",
        chat_header_sub: "Message us and we'll reply fast",
        chat_greeting: "Hi! Thanks for stopping by. Message us on WhatsApp and we'll gladly help with your project.",
        chat_wa_btn: "Chat on WhatsApp",
        footer_copy: "&copy; 2026 LaColo Dev & Creative. Based in El Salvador 🇸🇻"
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        var key = element.getAttribute('data-i18n');
        var dict = translations[lang] || translations.es;
        if (dict[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = dict[key];
            } else {
                element.innerHTML = dict[key];
            }
        }
    });
    document.documentElement.lang = lang;
}

var currentLang = 'es';

document.addEventListener('DOMContentLoaded', function () {
    var selector = document.getElementById('languageSelector');

    var savedLang = localStorage.getItem('preferredLanguage');
    var systemLang = navigator.language.split('-')[0];
    var defaultLang = savedLang || (translations[systemLang] ? systemLang : 'es');

    currentLang = defaultLang;
    selector.value = defaultLang;
    updateContent(defaultLang);
    renderAll();

    selector.addEventListener('change', function (e) {
        currentLang = e.target.value;
        localStorage.setItem('preferredLanguage', currentLang);
        updateContent(currentLang);
        renderAll();
        if (window.refreshChatWaLink) window.refreshChatWaLink();
    });
});

gsap.registerPlugin(ScrollTrigger);

/* ---- Scroll suave para anclas ---- */
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        var target = id.length > 1 ? document.querySelector(id) : null;
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ---- Títulos de sección: reveal tipo máscara ---- */
document.querySelectorAll('.section-head h2').forEach(function (h) {
    gsap.fromTo(h, { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: h, start: 'top 88%' }
    });
});

/* ---- Hero: se desvanece al salir del viewport ---- */
gsap.to('.hero-eyebrow, .hero h1, .hero .sub, .hero-ctas', {
    opacity: 0.15, y: -40, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
});

/* ---- Parallax de los blobs del hero ---- */
gsap.to('.parallax-blob-1', { y: 120, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
gsap.to('.parallax-blob-2', { y: -90, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

/* ---- Nav: se condensa al hacer scroll ---- */
ScrollTrigger.create({
    start: 50, end: 99999,
    onUpdate: function (self) {
        var nav = document.querySelector('nav');
        if (nav) nav.classList.toggle('scrolled', self.scroll() > 50);
    }
});

/* ---- Botones magnéticos ---- */
document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.2;
        var y = (e.clientY - r.top - r.height / 2) * 0.3;
        gsap.to(btn, { x: x, y: y, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', function () {
        gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1,0.4)' });
    });
});

/* ---- Reveal de grupos y elementos sueltos al hacer scroll ---- */
document.querySelectorAll('.reveal-group').forEach(function (group) {
    var items = group.querySelectorAll('.reveal');
    if (items.length) {
        gsap.fromTo(items, { opacity: 0, y: 36 }, {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: group, start: 'top 82%' }
        });
    }
});
document.querySelectorAll('.reveal-solo').forEach(function (el) {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
    });
});

/* ---- Testimonial carousel ---- */
(function () {
    var track = document.querySelector('.testi-track');
    if (!track) return;
    var slides = track.querySelectorAll('.testi-slide');
    var dotsWrap = document.querySelector('.testi-dots');
    var idx = 0;
    slides.forEach(function (_, i) {
        var d = document.createElement('button');
        d.className = 'testi-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Testimonio ' + (i + 1));
        d.addEventListener('click', function () { go(i); });
        dotsWrap.appendChild(d);
    });
    function go(i) {
        idx = (i + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        dotsWrap.querySelectorAll('.testi-dot').forEach(function (d, di) { d.classList.toggle('active', di === idx); });
    }
    document.querySelector('.testi-next').addEventListener('click', function () { go(idx + 1); });
    document.querySelector('.testi-prev').addEventListener('click', function () { go(idx - 1); });
    setInterval(function () { go(idx + 1); }, 6000);
})();

/* ---- FAQ accordion ---- */
document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
        var open = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (o) { if (o !== item) o.classList.remove('open'); });
        item.classList.toggle('open', !open);
    });
});

/* =========================================
   COTIZADOR (catálogo/lógica de la referencia) + INTEGRACIÓN WHATSAPP
   ========================================= */
(function () {
    var areasEl = document.getElementById('quote-areas');
    if (!areasEl) return;

    function getQuoteAreas() { return currentLang === 'en' ? QUOTE_AREAS_EN : QUOTE_AREAS_ES; }
    function getExtraItem() { return currentLang === 'en' ? QUOTE_EXTRA_ITEM_EN : QUOTE_EXTRA_ITEM_ES; }

    function collectItemsFlat(area) {
        var out = [];
        if (area.subgroups) area.subgroups.forEach(function (sg) { out = out.concat(sg.items); });
        if (area.items) out = out.concat(area.items);
        return out;
    }

    var AREA_BY_ID = {};
    var ITEM_LOOKUP = {};
    var state = { items: {}, radios: {}, extra: 0, openAreas: {}, siteType: null };
    var lastResult = { lines: [], total: 0 };

    function registerItem(item) {
        if (item.kind === 'radio') {
            item.options.forEach(function (opt) {
                ITEM_LOOKUP[opt.id] = { name: item.name + ' — ' + opt.name, price: opt.price, customQuote: !!opt.customQuote };
            });
        } else {
            var name = item.range ? (item.name + ' (' + item.range + ')') : item.name;
            ITEM_LOOKUP[item.id] = { name: name, price: item.price, customQuote: !!item.customQuote };
        }
    }

    function resetAreaState(area) {
        collectItemsFlat(area).forEach(function (item) {
            if (item.kind === 'radio') { state.radios[item.id] = null; }
            else { state.items[item.id] = 0; }
        });
        if (area.subgroups) state.siteType = null;
    }

    function initState() {
        AREA_BY_ID = {};
        ITEM_LOOKUP = {};
        getQuoteAreas().forEach(function (area) {
            AREA_BY_ID[area.id] = area;
            if (!(area.id in state.openAreas)) state.openAreas[area.id] = false;
            collectItemsFlat(area).forEach(function (item) {
                registerItem(item);
                if (item.kind === 'radio') {
                    if (!(item.id in state.radios)) state.radios[item.id] = null;
                } else {
                    if (!(item.id in state.items)) state.items[item.id] = 0;
                }
            });
        });
        var extra = getExtraItem();
        ITEM_LOOKUP[extra.id] = { name: extra.name, price: extra.price, customQuote: false };
    }

    /* ---- Rendering ---- */
    function renderItemRow(item) {
        if (item.kind === 'radio') return renderRadioGroup(item);
        var soon = !!item.soon;
        var qty = state.items[item.id] || 0;
        if (item.kind === 'qty') {
            return '<div class="quote-item-row' + (soon ? ' disabled' : '') + '">' +
                '<span class="quote-item-name">' + item.name + '</span>' +
                '<span class="quote-item-price' + (soon ? ' muted' : '') + '">' + (soon ? translations[currentLang].svc_tag_soon : '$' + item.price + ' c/u') + '</span>' +
                '<input type="number" class="quote-qty-input" data-item="' + item.id + '" min="0" value="' + qty + '"' + (soon ? ' disabled' : '') + '>' +
                '</div>';
        }
        var checked = qty > 0;
        var priceLabel, priceClass = '';
        if (soon) { priceLabel = translations[currentLang].svc_tag_soon; priceClass = ' muted'; }
        else if (item.range) { priceLabel = item.range; priceClass = ' range'; }
        else { priceLabel = '$' + item.price; }
        return '<label class="quote-item-row' + (soon ? ' disabled' : '') + '">' +
            '<input type="checkbox" class="quote-item-check" data-item="' + item.id + '"' + (checked ? ' checked' : '') + (soon ? ' disabled' : '') + '>' +
            '<span class="quote-item-name">' + item.name + '</span>' +
            '<span class="quote-item-price' + priceClass + '">' + priceLabel + '</span>' +
            '</label>';
    }

    function renderRadioGroup(item) {
        var selected = state.radios[item.id] || null;
        var noneLabel = currentLang === 'en' ? 'None' : 'Ninguno';
        var html = '<div class="quote-subgroup" style="padding-top:10px;"><h4>' + item.name + '</h4>';
        item.options.forEach(function (opt) {
            var checked = selected === opt.id;
            var priceLabel = opt.customQuote ? (currentLang === 'en' ? 'Custom quote' : 'Cotización personalizada') : ('$' + opt.price);
            html += '<label class="quote-item-row">' +
                '<input type="radio" class="quote-item-radio" name="radio-' + item.id + '" data-radio-group="' + item.id + '" data-item="' + opt.id + '"' + (checked ? ' checked' : '') + '>' +
                '<span class="quote-item-name">' + opt.name + '</span>' +
                '<span class="quote-item-price' + (opt.customQuote ? ' muted' : '') + '">' + priceLabel + '</span>' +
                '</label>';
        });
        html += '<label class="quote-item-row">' +
            '<input type="radio" class="quote-item-radio" name="radio-' + item.id + '" data-radio-group="' + item.id + '" data-item="__none__"' + (!selected ? ' checked' : '') + '>' +
            '<span class="quote-item-name" style="color:var(--pale-dim);">' + noneLabel + '</span><span></span>' +
            '</label>';
        html += '</div>';
        return html;
    }

    function renderSiteTypeSelector(area) {
        var selected = state.siteType;
        var noneLabel = currentLang === 'en' ? 'None' : 'Ninguno';
        var title = currentLang === 'en' ? 'What type of site do you need?' : '¿Qué tipo de sitio necesitas?';
        var html = '<div class="quote-subgroup" style="padding-top:16px;"><h4>' + title + '</h4>';
        area.subgroups.forEach(function (sg) {
            var checked = selected === sg.name;
            html += '<label class="quote-item-row">' +
                '<input type="radio" class="quote-sitetype-radio" name="site-type" data-sitetype="' + sg.name + '"' + (checked ? ' checked' : '') + '>' +
                '<span class="quote-item-name">' + sg.name + '</span><span></span>' +
                '</label>';
        });
        html += '<label class="quote-item-row">' +
            '<input type="radio" class="quote-sitetype-radio" name="site-type" data-sitetype="__none__"' + (!selected ? ' checked' : '') + '>' +
            '<span class="quote-item-name" style="color:var(--pale-dim);">' + noneLabel + '</span><span></span>' +
            '</label>';
        html += '</div>';
        return html;
    }

    function renderAreaItemsHTML(area) {
        if (area.subgroups) {
            var sg = state.siteType ? area.subgroups.filter(function (s) { return s.name === state.siteType; })[0] : null;
            var selectedHtml = sg ? '<div class="quote-subgroup"><h4>' + sg.name + '</h4>' + sg.items.map(renderItemRow).join('') + '</div>' : '';
            return renderSiteTypeSelector(area) + selectedHtml;
        }
        return area.items.map(renderItemRow).join('');
    }

    function renderAreaCard(area) {
        var isOpen = !area.disabled && state.openAreas[area.id];
        var headerTag = area.disabled ? 'div' : 'label';
        var headerCheckbox = area.disabled ? '' :
            '<input type="checkbox" class="quote-area-check" data-area-toggle="' + area.id + '"' + (state.openAreas[area.id] ? ' checked' : '') + '>';
        var soonBadge = area.disabled ? '<span class="badge-soon">' + translations[currentLang].svc_tag_soon + '</span>' : '';
        var chevron = area.disabled ? '' : '<span class="quote-area-chevron">▾</span>';
        var subtitleHtml = area.subtitle ? '<p class="quote-area-subtitle">' + area.subtitle + '</p>' : '';
        return '<div class="quote-area' + (isOpen ? ' open' : '') + (area.disabled ? ' disabled' : '') + '" data-area="' + area.id + '">' +
            '<' + headerTag + ' class="quote-area-header">' +
            headerCheckbox +
            '<div class="quote-area-icon"><i class="bi ' + area.icon + '"></i></div>' +
            '<div class="quote-area-body">' +
            '<h3>' + area.name + soonBadge + '</h3>' +
            subtitleHtml +
            '<p>' + area.tagline + '</p>' +
            '</div>' +
            chevron +
            '</' + headerTag + '>' +
            '<div class="quote-items">' + renderAreaItemsHTML(area) + '</div>' +
            '</div>';
    }

    function renderExtraCard() {
        var extra = getExtraItem();
        var title = currentLang === 'en' ? 'Additional changes' : 'Cambios adicionales';
        var note = currentLang === 'en'
            ? 'Every Website project includes 2 rounds of changes/revisions by default.'
            : 'Cada proyecto de Sitios Web incluye 2 rondas de cambios/revisiones por defecto.';
        var perUnit = currentLang === 'en' ? ' each' : ' c/u';
        return '<div class="quote-extra-card" id="quote-extra-card">' +
            '<h3>' + title + '</h3>' +
            '<p class="quote-extra-note">' + note + '</p>' +
            '<div class="quote-item-row">' +
            '<span class="quote-item-name">' + extra.name + '</span>' +
            '<span class="quote-item-price">$' + extra.price + perUnit + '</span>' +
            '<input type="number" class="quote-qty-input" id="quote-extra-qty" min="0" value="' + state.extra + '" inputmode="numeric">' +
            '</div>' +
            '</div>';
    }

    function renderAll() {
        initState();
        var html = '';
        getQuoteAreas().forEach(function (area) {
            html += renderAreaCard(area);
            if (area.id === 'sitios-web') html += renderExtraCard();
        });
        areasEl.innerHTML = html;
        renderTotal();
    }
    window.renderAll = renderAll;

    /* ---- Totals ---- */
    function computeSelected() {
        var lines = [], total = 0;
        var extra = getExtraItem();
        Object.keys(state.items).forEach(function (id) {
            var qty = state.items[id];
            if (qty > 0) {
                var meta = ITEM_LOOKUP[id];
                if (!meta) return;
                var lineTotal = (meta.price || 0) * qty;
                total += lineTotal;
                lines.push({ id: id, name: meta.name, price: meta.price || 0, qty: qty, lineTotal: lineTotal, customQuote: !!meta.customQuote });
            }
        });
        Object.keys(state.radios).forEach(function (groupId) {
            var optId = state.radios[groupId];
            if (optId) {
                var meta = ITEM_LOOKUP[optId];
                if (!meta) return;
                total += (meta.price || 0);
                lines.push({ id: optId, name: meta.name, price: meta.price || 0, qty: 1, lineTotal: meta.price || 0, customQuote: !!meta.customQuote });
            }
        });
        if (state.extra > 0) {
            var extraTotal = extra.price * state.extra;
            total += extraTotal;
            lines.push({ id: extra.id, name: extra.name, price: extra.price, qty: state.extra, lineTotal: extraTotal, customQuote: false });
        }
        return { lines: lines, total: total };
    }

    function renderTotal() {
        lastResult = computeSelected();
        window.quoteLastResult = lastResult;
        var totalStr = '$' + lastResult.total.toLocaleString('es-SV');
        document.getElementById('quote-total').textContent = totalStr;
        document.getElementById('quote-mobile-total').textContent = totalStr;
        var listEl = document.getElementById('quote-summary-list');
        if (!lastResult.lines.length) {
            listEl.innerHTML = '<li class="empty">' + translations[currentLang].quote_empty + '</li>';
        } else {
            listEl.innerHTML = lastResult.lines.map(function (l) {
                var qtyLabel = l.qty > 1 ? ' ×' + l.qty : '';
                var priceLabel = l.customQuote ? (currentLang === 'en' ? 'Quote' : 'Cotización') : ('$' + l.lineTotal.toLocaleString('es-SV'));
                return '<li><span>' + l.name + qtyLabel + '</span><span>' + priceLabel + '</span></li>';
            }).join('');
        }
        var hasCustom = lastResult.lines.some(function (l) { return l.customQuote; });
        var noteEl = document.getElementById('quote-note');
        if (noteEl) noteEl.textContent = hasCustom ? translations[currentLang].quote_note_custom : '';
        var enabled = lastResult.lines.length > 0;
        document.getElementById('quote-submit-btn').disabled = !enabled;
        document.getElementById('quote-submit-btn-mobile').disabled = !enabled;
    }

    /* ---- Interaction ---- */
    areasEl.addEventListener('change', function (e) {
        var t = e.target;
        if (t.classList.contains('quote-area-check')) {
            var areaId = t.dataset.areaToggle;
            var area = AREA_BY_ID[areaId];
            var areaEl = areasEl.querySelector('.quote-area[data-area="' + areaId + '"]');
            state.openAreas[areaId] = t.checked;
            if (t.checked) {
                areaEl.classList.add('open');
            } else {
                areaEl.classList.remove('open');
                resetAreaState(area);
                areaEl.querySelector('.quote-items').innerHTML = renderAreaItemsHTML(area);
            }
            renderTotal();
            return;
        }
        if (t.classList.contains('quote-item-check')) {
            state.items[t.dataset.item] = t.checked ? 1 : 0;
            renderTotal();
            return;
        }
        if (t.classList.contains('quote-item-radio')) {
            var groupId = t.dataset.radioGroup;
            state.radios[groupId] = (t.dataset.item === '__none__') ? null : t.dataset.item;
            renderTotal();
            return;
        }
        if (t.classList.contains('quote-sitetype-radio')) {
            var area = AREA_BY_ID['sitios-web'];
            resetAreaState(area);
            state.siteType = (t.dataset.sitetype === '__none__') ? null : t.dataset.sitetype;
            var areaEl = areasEl.querySelector('.quote-area[data-area="sitios-web"]');
            areaEl.querySelector('.quote-items').innerHTML = renderAreaItemsHTML(area);
            renderTotal();
            return;
        }
    });

    areasEl.addEventListener('input', function (e) {
        var t = e.target;
        if (!t.classList.contains('quote-qty-input')) return;
        var v = parseInt(t.value, 10);
        if (isNaN(v) || v < 0) v = 0;
        if (t.id === 'quote-extra-qty') {
            state.extra = v;
        } else {
            state.items[t.dataset.item] = v;
        }
        renderTotal();
    });

    /* Botón "¿No sabes qué elegir?" -> abre el widget de WhatsApp */
    var chatCtaBtn = document.getElementById('quote-open-chat');
    if (chatCtaBtn) {
        chatCtaBtn.addEventListener('click', function () {
            if (window.openLaColoChat) window.openLaColoChat();
        });
    }

    /* ---- Submit: recolecta datos de contacto y envía por WhatsApp ---- */
    var quoteModal = document.getElementById('quote-modal');
    var quoteForm = document.getElementById('quote-form');

    document.getElementById('quote-submit-btn').addEventListener('click', function () { quoteModal.classList.add('open'); });
    document.getElementById('quote-submit-btn-mobile').addEventListener('click', function () { quoteModal.classList.add('open'); });
    document.getElementById('quote-modal-close').addEventListener('click', function () { quoteModal.classList.remove('open'); });
    quoteModal.addEventListener('click', function (e) { if (e.target === quoteModal) quoteModal.classList.remove('open'); });

    /* Barra fija móvil visible solo mientras #precios está en pantalla */
    var precioSection = document.getElementById('precios');
    var mobileBar = document.querySelector('.quote-mobile-bar');
    if (precioSection && mobileBar && 'IntersectionObserver' in window) {
        var precioObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                mobileBar.classList.toggle('is-visible', entry.isIntersecting);
                document.body.classList.toggle('mobile-bar-visible', entry.isIntersecting);
            });
        }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
        precioObserver.observe(precioSection);
    }

    quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var nombre = document.getElementById('quote-nombre').value.trim();
        var empresa = document.getElementById('quote-empresa').value.trim();

        var listaServicios = lastResult.lines.map(function (item) {
            var qtyLabel = item.qty > 1 ? ' x' + item.qty : '';
            var priceLabel = item.customQuote ? (currentLang === 'en' ? 'custom quote' : 'cotización personalizada') : ('$' + item.lineTotal.toLocaleString('es-SV'));
            return '✅ ' + item.name + qtyLabel + ' — ' + priceLabel;
        }).join('%0A');

        var textoWA = (currentLang === 'en'
            ? '*Hi! I put together a quote on the LaColo website*%0A%0A'
            : '*¡Hola! He armado una cotización en la web de LaColo*%0A%0A') +
            '*' + (currentLang === 'en' ? 'Name' : 'Nombre') + ':* ' + encodeURIComponent(nombre) + '%0A' +
            (empresa ? '*' + (currentLang === 'en' ? 'Company' : 'Empresa') + ':* ' + encodeURIComponent(empresa) + '%0A%0A' : '%0A') +
            '*' + (currentLang === 'en' ? 'Services of interest' : 'Servicios de interés') + ':*%0A' + listaServicios + '%0A%0A' +
            '*' + (currentLang === 'en' ? 'Estimated total' : 'Total estimado') + ':* $' + lastResult.total.toLocaleString('es-SV');

        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + textoWA, '_blank');
        quoteModal.classList.remove('open');
    });
})();

/* =========================================
   FORMULARIO DE CONTACTO GENERAL -> WHATSAPP
   ========================================= */
var contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var nombre = document.getElementById('cf-name').value.trim();
        var mensaje = document.getElementById('cf-msg').value.trim();

        var textoWA = '*Nueva Consulta desde la Web - LaColo*%0A%0A' +
            '*Nombre:* ' + encodeURIComponent(nombre) + '%0A' +
            '*Mensaje:* ' + encodeURIComponent(mensaje);

        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + textoWA, '_blank');
    });
}

/* =========================================
   WIDGET FLOTANTE DE WHATSAPP (reemplaza al chat con IA)
   ========================================= */
(function () {
    var toggleBtn = document.getElementById('chat-toggle-btn');
    var panel = document.getElementById('chat-panel');
    var waLink = document.getElementById('chat-wa-link');
    if (!toggleBtn || !panel) return;

    function buildWaLink() {
        var msg = currentLang === 'en'
            ? 'Hi! I would like more information about your services.'
            : 'Hola, me gustaría más información sobre sus servicios.';
        return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    }

    function refreshWaLink() {
        if (waLink) waLink.href = buildWaLink();
    }
    window.refreshChatWaLink = refreshWaLink;
    refreshWaLink();

    toggleBtn.addEventListener('click', function () {
        var isOpen = panel.classList.toggle('open');
        toggleBtn.classList.toggle('open', isOpen);
        refreshWaLink();
    });

    window.openLaColoChat = function () {
        panel.classList.add('open');
        toggleBtn.classList.add('open');
        refreshWaLink();
    };
})();

ScrollTrigger.refresh();
