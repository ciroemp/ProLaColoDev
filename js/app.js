/* =========================================================
   LACOLO DEV & CREATIVE — app.js
   Compartido por index.html y cotizar.html
   ========================================================= */

/* Número de WhatsApp de LaColo */
var WHATSAPP_NUMBER = "50377471010";

/* =========================================================
   PRECIOS (USD) — cámbialos solo aquí; se actualizan en
   los paquetes, los extras y el cotizador automáticamente.
   ========================================================= */
var PRICES = {
    presencia: 200,      // Paquete Presencia (landing a la medida)
    negocio: 450,        // Paquete Negocio (4–6 páginas)
    tienda: 750,         // Paquete Tienda (WooCommerce, hasta 30 productos)
    ia: 130,             // Asistente con IA (pago único)
    iaMensual: 10,       // Asistente con IA (mensual)
    productos10: 15,     // Carga de 10 productos adicionales
    ronda: 25,           // Ronda de cambios adicional
    migracion: 150,      // Pasar un WordPress a sitio estático (desde)
    mantEsencial: 25,    // Mantenimiento WordPress Esencial (mensual)
    mantCompleto: 40,    // Mantenimiento WordPress Completo (mensual)
    redesMin: 100,       // Contenido para redes (mensual, mínimo)
    redesMax: 200        // Contenido para redes (mensual, máximo)
};

function money(n) { return '$' + Number(n).toLocaleString('en-US'); }

/* ==== Traducciones ==== */
var translations = {
    es: {
        site_title: "LaColo Dev & Creative | Tu sitio web, sin pagar de más",
        quote_page_title: "Cotiza tu proyecto | LaColo Dev & Creative",
        nav_services: "Servicios",
        nav_compare: "¿Cuál me conviene?",
        nav_packages: "Paquetes",
        nav_faq: "FAQ",
        nav_cta: "Cotizar",
        nav_cta_wa: "Hablemos",
        hero_lockup_tag: "Dev & Creative",
        hero_eyebrow: "Desarrollo web + Diseño",
        hero_title: "Tu sitio web, sin pagar de más.",
        hero_lead: "Te recomiendo la solución que tu negocio realmente necesita: un sitio a la medida, rápido y sin pago mensual de servidor, o WordPress cuando sí te conviene. Yo me encargo de toda la parte técnica para que tú te enfoques en tu negocio.",
        btn_packages: "Ver paquetes",
        btn_whatsapp: "Escribir por WhatsApp",
        trust_1: "Servidor mensual en sitios a la medida",
        trust_2: "Protegido con Cloudflare",
        trust_3: "Acompañamiento cercano",
        services_eyebrow: "Lo que hacemos",
        services_title: "Lo justo para tu negocio",
        services_lead: "Trabajo con HTML, CSS, JavaScript y PHP, y también con WordPress. Por eso puedo recomendarte lo que de verdad te conviene, no lo único que sé hacer.",
        svc_1_title: "Sitios a la medida",
        svc_1_desc: "Landing pages y sitios corporativos rápidos y seguros, sin pago mensual de servidor. Ideales si tu sitio muestra tu negocio y tus clientes te contactan por WhatsApp.",
        svc_2_title: "WordPress y tiendas en línea",
        svc_2_desc: "Creo tu sitio o tienda con WooCommerce y dejo todo configurado: productos, pagos o contra entrega, envíos, dominio, correo y conexiones con WhatsApp, Google y Meta.",
        svc_3_title: "Gestión y mantenimiento",
        svc_3_desc: "Actualizaciones, respaldos y seguridad de tu WordPress, para que no tengas que pelearte con plugins y te enfoques en vender.",
        svc_4_title: "Marketing y contenido",
        svc_4_desc: "Piezas gráficas y contenido mensual para tus redes, hechos por diseño gráfico profesional.",
        services_more: "¿Necesitas algo más grande, como un sistema, un panel o una app?",
        services_more_link: "Lo cotizamos en una conversación →",
        compare_eyebrow: "¿Cuál me conviene?",
        compare_title: "Sitio a la medida o WordPress",
        compare_lead: "Las dos opciones son buenas; la diferencia está en lo que tu negocio necesita y en lo que vas a pagar cada año.",
        cmp_ideal: "Ideal si…",
        cmp_hosting: "Servidor",
        cmp_maint: "Mantenimiento",
        cmp_cost: "Costo cada año",
        cmp_a_title: "Sitio a la medida",
        cmp_a_ideal: "Tu sitio muestra tu negocio y te contactan por WhatsApp o formulario.",
        cmp_a_hosting: "Estático: sin pago mensual.",
        cmp_a_maint: "Casi nulo. Pagas cambios solo cuando los pides.",
        cmp_a_cost: "Solo el dominio: unos $12 – $25",
        cmp_b_title: "WordPress",
        cmp_b_ideal: "Quieres editar el contenido tú mismo, tener un blog o vender en línea.",
        cmp_b_hosting: "Necesita hosting con PHP y base de datos, con pago mensual.",
        cmp_b_maint: "Actualizaciones de plugins, respaldos y seguridad, todo el año.",
        cmp_b_cost: "Hosting y dominio: unos $50 – $160, más mantenimiento",
        compare_cta_lead: "¿No sabes cuál es para ti? Responde 3 preguntas y te lo digo.",
        compare_cta_btn: "Descubrir mi opción",
        pkg_eyebrow: "Paquetes",
        pkg_title: "Precios claros desde el inicio",
        pkg_lead: "Un pago único por tu sitio. El precio final depende de tu proyecto y lo confirmamos juntos antes de empezar.",
        pkg_from: "Desde",
        pkg_badge: "Recomendado",
        pkg_btn: "Lo quiero",
        pkg_1_name: "Presencia",
        pkg_1_for: "Para que te encuentren y te escriban.",
        pkg_1_list: "<li>Landing page a la medida</li><li>Botón de WhatsApp y formulario</li><li>Publicada y protegida con Cloudflare</li><li>Sin pago mensual de servidor</li><li>2 rondas de cambios</li>",
        pkg_2_name: "Negocio",
        pkg_2_for: "Para mostrar tu empresa y tus servicios.",
        pkg_2_list: "<li>Sitio de 4 a 6 páginas</li><li>A la medida o en WordPress, según te convenga</li><li>Dominio y correo profesional configurados</li><li>Botón de WhatsApp y formulario</li><li>2 rondas de cambios</li>",
        pkg_3_name: "Tienda",
        pkg_3_for: "Para vender en línea sin complicarte.",
        pkg_3_list: "<li>Tienda WooCommerce lista para vender</li><li>Hasta 30 productos cargados</li><li>Pagos en línea o contra entrega, y envíos</li><li>Capacitación para manejar tus pedidos</li><li>2 rondas de cambios</li>",
        extras_title: "Extras para cualquier paquete",
        extra_ai: "Asistente con IA que responde a tus clientes 24/7",
        extra_products: "Carga de 10 productos adicionales",
        extra_round: "Ronda de cambios adicional",
        extra_migrate: "Pasar tu WordPress a un sitio sin pago mensual",
        extra_content: "Contenido mensual para redes",
        per_month: "/mes",
        maint_title: "Mantenimiento para WordPress",
        maint_1_name: "Esencial",
        maint_1_desc: "actualizaciones, respaldos y seguridad",
        maint_2_name: "Completo",
        maint_2_desc: "lo anterior + 1 hora de cambios al mes",
        maint_static: "Sitios a la medida: sin plan mensual, cambios por hora cuando los necesites",
        maint_static_price: "$10 – $30/h",
        why_eyebrow: "Por qué LaColo",
        why_title: "Pensado en la persona del otro lado de la pantalla",
        why_1_title: "Estrategia antes que tecnología",
        why_1_desc: "Empezamos entendiendo tu negocio y a tus clientes, no vendiéndote una herramienta genérica.",
        why_2_title: "Honestidad y excelencia",
        why_2_desc: "Mi trabajo se guía por la honestidad; no solo contrato servicios técnicos, me asocio con tu negocio.",
        why_3_title: "Cercano y con alcance global",
        why_3_desc: "Con base en El Salvador, comunicación directa y honesta en cada paso del proyecto.",
        process_eyebrow: "Cómo trabajamos",
        process_title: "De la idea a tu sitio funcionando",
        step_1_title: "Conversamos sobre tu negocio",
        step_1_desc: "Entendemos qué necesitas, quiénes son tus clientes y qué te está costando tiempo o ventas hoy.",
        step_2_title: "Te recomiendo la opción justa",
        step_2_desc: "Sitio a la medida o WordPress, con el precio claro desde el inicio y sin costos que no necesitas.",
        step_3_title: "Diseñamos y construimos",
        step_3_desc: "Te mostramos avances antes de dar por definitivo cualquier elemento visual o técnico.",
        step_4_title: "Lanzamos y te acompañamos",
        step_4_desc: "Publicamos tu sitio y seguimos cerca en las primeras semanas de uso.",
        faq_eyebrow: "Preguntas frecuentes",
        faq_title: "Antes de que preguntes",
        faq_5_q: "¿Por qué no hacer todo en WordPress?",
        faq_5_a: "WordPress es excelente cuando necesitas editar contenido o vender en línea, pero requiere un servidor con pago mensual y mantenimiento constante. Si tu sitio solo muestra tu negocio y te contactan por WhatsApp, un sitio a la medida hace lo mismo, carga más rápido y solo pagas el dominio cada año.",
        faq_1_q: "¿Cuánto tarda en estar listo mi sitio web?",
        faq_1_a: "Depende del alcance, pero una landing page suele estar lista en 1-2 semanas desde que definimos el contenido y el diseño contigo.",
        faq_2_q: "¿Qué pasa si quiero cambios después del lanzamiento?",
        faq_2_a: "Cada paquete incluye 2 rondas de cambios antes del lanzamiento. Después, en un sitio a la medida pagas solo los cambios que pidas, por hora ($10 – $30 según la complejidad). En WordPress te recomiendo un plan de mantenimiento mensual, porque necesita actualizaciones y respaldos aunque no cambies nada.",
        faq_3_q: "¿Necesito saber de tecnología para trabajar contigo?",
        faq_3_a: "No. Yo me encargo de toda la parte técnica; tú solo me cuentas cómo funciona tu negocio y qué quieres lograr.",
        faq_4_q: "¿Qué pasa después de escribirte?",
        faq_4_a: "Tu mensaje me llega por WhatsApp. Te respondo para entender tu negocio, resolver dudas y confirmar el alcance y el precio final antes de arrancar.",
        cta_title: "Tu negocio merece un sitio que trabaje mientras tú descansas.",
        cta_lead: "Responde 3 preguntas y te digo qué opción te conviene y cuánto costaría.",
        cta_btn: "Cotizar mi proyecto",
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
        form_name_label: "Nombre",
        form_msg_label: "Cuéntanos sobre tu negocio",
        form_name_placeholder: "Tu nombre",
        form_msg_placeholder: "¿Qué vende tu negocio y cómo te contactan hoy tus clientes?",
        btn_send_whatsapp: "Enviar por WhatsApp",
        contact_hablemos: "Contacto directo",
        contact_sub: "Atención directa para proyectos de desarrollo y creativos.",
        chat_header_title: "Asistente LaColo",
        chat_header_sub: "Escríbenos y te respondemos rápido",
        chat_greeting: "¡Hola! Gracias por visitarnos. Escríbenos por WhatsApp y con gusto te ayudamos con tu proyecto.",
        chat_wa_btn: "Chatear por WhatsApp",
        footer_copy: "&copy; 2026 LaColo Dev & Creative. Con base en El Salvador 🇸🇻",

        /* Mensajes de WhatsApp */
        wa_msg_general: "Hola, me gustaría más información sobre sus servicios.",
        wa_msg_custom: "Hola, tengo un proyecto a la medida (sistema, panel o app) y me gustaría cotizarlo.",
        wa_msg_pkg_presencia: "Hola, me interesa el paquete Presencia (desde {presencia}).",
        wa_msg_pkg_negocio: "Hola, me interesa el paquete Negocio (desde {negocio}).",
        wa_msg_pkg_tienda: "Hola, me interesa el paquete Tienda (desde {tienda}).",

        /* Cotizador (cotizar.html) */
        wz_eyebrow: "Cotiza tu proyecto",
        wz_title: "3 preguntas y te digo qué te conviene",
        wz_lead: "Sin tecnicismos. Al final ves la opción recomendada, el precio estimado y lo que pagarías cada año. Si te convence, me lo envías por WhatsApp.",
        wz_help: "¿Prefieres hablarlo directamente?",
        wz_help_link: "Escríbeme por WhatsApp →",
        wz_step: "Pregunta {n} de {t}",
        wz_back: "← Atrás",
        wz_q1: "¿Qué quieres lograr con tu sitio?",
        wz_q1_contact: "Que me encuentren y me escriban",
        wz_q1_contact_d: "Una página con tu información y un botón para contactarte.",
        wz_q1_show: "Mostrar mi empresa y mis servicios",
        wz_q1_show_d: "Varias páginas: quiénes son, qué ofrecen, contacto.",
        wz_q1_sell: "Vender en línea",
        wz_q1_sell_d: "Un catálogo donde tus clientes compran y pagan.",
        wz_q2: "¿Quieres poder cambiar el contenido tú mismo?",
        wz_q2_yes: "Sí, quiero editarlo yo",
        wz_q2_yes_d: "Textos, fotos o un blog, sin depender de nadie.",
        wz_q2_no: "No, prefiero que se encarguen",
        wz_q2_no_d: "Cuando necesite un cambio, lo pido.",
        wz_q2_unsure: "No sé todavía",
        wz_q2_unsure_d: "Empecemos simple; se puede cambiar después.",
        wz_q3: "¿Te interesa algo más?",
        wz_q3_hint: "Puedes elegir varios o ninguno.",
        wz_x_ia: "Asistente con IA que responde a mis clientes 24/7",
        wz_x_redes: "Contenido mensual para mis redes",
        wz_x_maint: "Que se encarguen del mantenimiento de mi WordPress",
        wz_see: "Ver mi recomendación",
        wz_rec_eyebrow: "Mi recomendación",
        wz_pkg_presencia: "Paquete Presencia",
        wz_pkg_negocio: "Paquete Negocio",
        wz_pkg_tienda: "Paquete Tienda",
        wz_tech_static: "Sitio a la medida",
        wz_tech_wp: "WordPress",
        wz_tech_woo: "WordPress + WooCommerce",
        wz_why_static: "Tu sitio no necesita un servidor con pago mensual: un sitio a la medida hace lo mismo, carga más rápido y solo pagas el dominio cada año.",
        wz_why_static_unsure: "Empezamos con un sitio a la medida, sin pago mensual de servidor. Si más adelante quieres editarlo tú, se puede pasar a WordPress.",
        wz_why_wp: "Como quieres editar el contenido tú mismo, WordPress es la mejor opción. Te lo dejo listo y te enseño a usarlo.",
        wz_why_woo: "Para vender en línea, WooCommerce te da catálogo, carrito, pagos o contra entrega y control de pedidos. Yo lo configuro todo.",
        wz_row_once: "Pago único",
        wz_row_once_note: "Paquete{plus}",
        wz_row_once_ia: " + asistente con IA",
        wz_row_monthly: "Pagos mensuales",
        wz_row_monthly_none: "Ninguno",
        wz_row_yearly: "Lo que pagarías cada año",
        wz_yearly_static: "Solo el dominio: unos $12 – $25",
        wz_yearly_wp: "Hosting y dominio: unos $50 – $160",
        wz_yearly_woo: "Hosting y dominio: unos $50 – $200, más la comisión por venta si cobras con tarjeta",
        wz_m_ia: "Asistente con IA",
        wz_m_maint: "Mantenimiento Esencial",
        wz_m_redes: "Contenido para redes",
        wz_tip_maint: "Te recomiendo agregar mantenimiento: WordPress necesita actualizaciones y respaldos aunque no cambies nada.",
        wz_disclaimer: "Es un estimado. El precio final lo confirmamos juntos antes de empezar.",
        wz_send: "Enviar por WhatsApp",
        wz_restart: "Volver a empezar",
        quote_modal_title: "Casi listo — cuéntanos cómo contactarte",
        form_company_label: "Empresa o marca personal",
        form_optional: "(opcional)",
        quote_modal_submit: "Enviar por WhatsApp",
        wz_wa_intro: "¡Hola! Hice la cotización en la web de LaColo",
        wz_wa_name: "Nombre",
        wz_wa_company: "Empresa",
        wz_wa_rec: "Recomendación",
        wz_wa_answers: "Mis respuestas"
    },
    en: {
        site_title: "LaColo Dev & Creative | Your website, without overpaying",
        quote_page_title: "Get a quote | LaColo Dev & Creative",
        nav_services: "Services",
        nav_compare: "Which one fits me?",
        nav_packages: "Packages",
        nav_faq: "FAQ",
        nav_cta: "Get a quote",
        nav_cta_wa: "Let's talk",
        hero_lockup_tag: "Dev & Creative",
        hero_eyebrow: "Web development + Design",
        hero_title: "Your website, without overpaying.",
        hero_lead: "I recommend the solution your business actually needs: a custom site that's fast and has no monthly server fee, or WordPress when it truly makes sense. I handle all the technical work so you can focus on your business.",
        btn_packages: "See packages",
        btn_whatsapp: "Message on WhatsApp",
        trust_1: "Monthly server fee on custom sites",
        trust_2: "Cloudflare protected",
        trust_3: "Close support",
        services_eyebrow: "What we do",
        services_title: "Just what your business needs",
        services_lead: "I work with HTML, CSS, JavaScript and PHP, and also with WordPress. That's why I can recommend what really fits you, not just the only thing I know how to do.",
        svc_1_title: "Custom websites",
        svc_1_desc: "Fast, secure landing pages and business sites with no monthly server fee. Ideal if your site presents your business and clients reach you on WhatsApp.",
        svc_2_title: "WordPress & online stores",
        svc_2_desc: "I build your site or WooCommerce store and set everything up: products, online or cash-on-delivery payments, shipping, domain, email, and connections to WhatsApp, Google and Meta.",
        svc_3_title: "Management & maintenance",
        svc_3_desc: "Updates, backups and security for your WordPress, so you don't have to fight with plugins and can focus on selling.",
        svc_4_title: "Marketing & content",
        svc_4_desc: "Monthly graphic pieces and content for your social media, made with professional graphic design.",
        services_more: "Need something bigger, like a system, a dashboard or an app?",
        services_more_link: "Let's quote it in a conversation →",
        compare_eyebrow: "Which one fits me?",
        compare_title: "Custom site or WordPress",
        compare_lead: "Both are good options; the difference is what your business needs and what you'll pay every year.",
        cmp_ideal: "Ideal if…",
        cmp_hosting: "Server",
        cmp_maint: "Maintenance",
        cmp_cost: "Yearly cost",
        cmp_a_title: "Custom site",
        cmp_a_ideal: "Your site presents your business and clients reach you via WhatsApp or a form.",
        cmp_a_hosting: "Static: no monthly fee.",
        cmp_a_maint: "Almost none. You pay for changes only when you ask for them.",
        cmp_a_cost: "Just the domain: about $12 – $25",
        cmp_b_title: "WordPress",
        cmp_b_ideal: "You want to edit content yourself, have a blog or sell online.",
        cmp_b_hosting: "Needs PHP and database hosting, with a monthly fee.",
        cmp_b_maint: "Plugin updates, backups and security, all year long.",
        cmp_b_cost: "Hosting and domain: about $50 – $160, plus maintenance",
        compare_cta_lead: "Not sure which one is for you? Answer 3 questions and I'll tell you.",
        compare_cta_btn: "Find my option",
        pkg_eyebrow: "Packages",
        pkg_title: "Clear prices from the start",
        pkg_lead: "A one-time payment for your site. The final price depends on your project, and we confirm it together before we start.",
        pkg_from: "From",
        pkg_badge: "Recommended",
        pkg_btn: "I want it",
        pkg_1_name: "Presence",
        pkg_1_for: "So people find you and message you.",
        pkg_1_list: "<li>Custom landing page</li><li>WhatsApp button and contact form</li><li>Published and protected with Cloudflare</li><li>No monthly server fee</li><li>2 revision rounds</li>",
        pkg_2_name: "Business",
        pkg_2_for: "To showcase your company and services.",
        pkg_2_list: "<li>4 to 6 page website</li><li>Custom or WordPress, whichever fits you</li><li>Domain and professional email set up</li><li>WhatsApp button and contact form</li><li>2 revision rounds</li>",
        pkg_3_name: "Store",
        pkg_3_for: "To sell online without the hassle.",
        pkg_3_list: "<li>WooCommerce store ready to sell</li><li>Up to 30 products loaded</li><li>Online or cash-on-delivery payments, and shipping</li><li>Training to manage your orders</li><li>2 revision rounds</li>",
        extras_title: "Extras for any package",
        extra_ai: "AI assistant that answers your customers 24/7",
        extra_products: "Loading 10 additional products",
        extra_round: "Additional revision round",
        extra_migrate: "Move your WordPress to a site with no monthly fee",
        extra_content: "Monthly social media content",
        per_month: "/mo",
        maint_title: "WordPress maintenance",
        maint_1_name: "Essential",
        maint_1_desc: "updates, backups and security",
        maint_2_name: "Complete",
        maint_2_desc: "all of the above + 1 hour of changes per month",
        maint_static: "Custom sites: no monthly plan, hourly changes whenever you need them",
        maint_static_price: "$10 – $30/h",
        why_eyebrow: "Why LaColo",
        why_title: "Designed with the person on the other side of the screen in mind",
        why_1_title: "Strategy before technology",
        why_1_desc: "We start by understanding your business and your clients, not selling you a generic tool.",
        why_2_title: "Honesty and excellence",
        why_2_desc: "My work is guided by honesty; I don't just provide technical services, I partner with your business.",
        why_3_title: "Close, with global reach",
        why_3_desc: "Based in El Salvador, with direct and honest communication at every step of the project.",
        process_eyebrow: "How we work",
        process_title: "From idea to a working website",
        step_1_title: "We talk about your business",
        step_1_desc: "We understand what you need, who your clients are, and what's costing you time or sales today.",
        step_2_title: "I recommend the right option",
        step_2_desc: "Custom site or WordPress, with a clear price from the start and no costs you don't need.",
        step_3_title: "We design and build",
        step_3_desc: "We show you progress before finalizing any visual or technical element.",
        step_4_title: "We launch and stay close",
        step_4_desc: "We publish your site and stay close during the first weeks of use.",
        faq_eyebrow: "Frequently asked questions",
        faq_title: "Before you ask",
        faq_5_q: "Why not build everything in WordPress?",
        faq_5_a: "WordPress is excellent when you need to edit content or sell online, but it requires a server with a monthly fee and constant maintenance. If your site just presents your business and clients reach you on WhatsApp, a custom site does the same, loads faster, and you only pay for the domain each year.",
        faq_1_q: "How long until my website is ready?",
        faq_1_a: "It depends on scope, but a landing page is usually ready in 1-2 weeks once we define content and design together.",
        faq_2_q: "What if I want changes after launch?",
        faq_2_a: "Every package includes 2 revision rounds before launch. After that, on a custom site you only pay for the changes you request, by the hour ($10 – $30 depending on complexity). For WordPress I recommend a monthly maintenance plan, because it needs updates and backups even if you don't change anything.",
        faq_3_q: "Do I need to know about technology to work with you?",
        faq_3_a: "No. I handle the entire technical side; you just tell me how your business works and what you want to achieve.",
        faq_4_q: "What happens after I message you?",
        faq_4_a: "Your message reaches me on WhatsApp. I'll reply to understand your business, answer questions, and confirm the final scope and price before we start.",
        cta_title: "Your business deserves a site that works while you rest.",
        cta_lead: "Answer 3 questions and I'll tell you which option fits you and what it would cost.",
        cta_btn: "Quote my project",
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
        form_name_label: "Name",
        form_msg_label: "Tell us about your business",
        form_name_placeholder: "Your name",
        form_msg_placeholder: "What does your business sell, and how do clients reach you today?",
        btn_send_whatsapp: "Send via WhatsApp",
        contact_hablemos: "Direct contact",
        contact_sub: "Direct attention for development and creative projects.",
        chat_header_title: "LaColo Assistant",
        chat_header_sub: "Message us and we'll reply fast",
        chat_greeting: "Hi! Thanks for stopping by. Message us on WhatsApp and we'll gladly help with your project.",
        chat_wa_btn: "Chat on WhatsApp",
        footer_copy: "&copy; 2026 LaColo Dev & Creative. Based in El Salvador 🇸🇻",

        wa_msg_general: "Hi! I would like more information about your services.",
        wa_msg_custom: "Hi! I have a custom project (system, dashboard or app) and would like a quote.",
        wa_msg_pkg_presencia: "Hi! I'm interested in the Presence package (from {presencia}).",
        wa_msg_pkg_negocio: "Hi! I'm interested in the Business package (from {negocio}).",
        wa_msg_pkg_tienda: "Hi! I'm interested in the Store package (from {tienda}).",

        wz_eyebrow: "Get a quote",
        wz_title: "3 questions and I'll tell you what fits",
        wz_lead: "No jargon. At the end you'll see the recommended option, the estimated price and what you'd pay each year. If you like it, send it to me on WhatsApp.",
        wz_help: "Prefer to talk it through?",
        wz_help_link: "Message me on WhatsApp →",
        wz_step: "Question {n} of {t}",
        wz_back: "← Back",
        wz_q1: "What do you want your site to do?",
        wz_q1_contact: "Help people find me and message me",
        wz_q1_contact_d: "One page with your info and a button to contact you.",
        wz_q1_show: "Showcase my company and services",
        wz_q1_show_d: "Several pages: who you are, what you offer, contact.",
        wz_q1_sell: "Sell online",
        wz_q1_sell_d: "A catalog where your customers buy and pay.",
        wz_q2: "Do you want to change the content yourself?",
        wz_q2_yes: "Yes, I want to edit it myself",
        wz_q2_yes_d: "Text, photos or a blog, without depending on anyone.",
        wz_q2_no: "No, I'd rather you handle it",
        wz_q2_no_d: "When I need a change, I'll ask.",
        wz_q2_unsure: "I don't know yet",
        wz_q2_unsure_d: "Let's start simple; it can change later.",
        wz_q3: "Interested in anything else?",
        wz_q3_hint: "Pick several or none.",
        wz_x_ia: "AI assistant that answers my customers 24/7",
        wz_x_redes: "Monthly content for my social media",
        wz_x_maint: "Someone to handle my WordPress maintenance",
        wz_see: "See my recommendation",
        wz_rec_eyebrow: "My recommendation",
        wz_pkg_presencia: "Presence package",
        wz_pkg_negocio: "Business package",
        wz_pkg_tienda: "Store package",
        wz_tech_static: "Custom site",
        wz_tech_wp: "WordPress",
        wz_tech_woo: "WordPress + WooCommerce",
        wz_why_static: "Your site doesn't need a server with a monthly fee: a custom site does the same, loads faster, and you only pay for the domain each year.",
        wz_why_static_unsure: "We start with a custom site, with no monthly server fee. If later you want to edit it yourself, it can move to WordPress.",
        wz_why_wp: "Since you want to edit the content yourself, WordPress is the best option. I'll set it up and teach you how to use it.",
        wz_why_woo: "To sell online, WooCommerce gives you a catalog, cart, online or cash-on-delivery payments and order management. I set it all up.",
        wz_row_once: "One-time payment",
        wz_row_once_note: "Package{plus}",
        wz_row_once_ia: " + AI assistant",
        wz_row_monthly: "Monthly payments",
        wz_row_monthly_none: "None",
        wz_row_yearly: "What you'd pay each year",
        wz_yearly_static: "Just the domain: about $12 – $25",
        wz_yearly_wp: "Hosting and domain: about $50 – $160",
        wz_yearly_woo: "Hosting and domain: about $50 – $200, plus a per-sale fee if you take card payments",
        wz_m_ia: "AI assistant",
        wz_m_maint: "Essential maintenance",
        wz_m_redes: "Social media content",
        wz_tip_maint: "I recommend adding maintenance: WordPress needs updates and backups even if you don't change anything.",
        wz_disclaimer: "This is an estimate. We confirm the final price together before we start.",
        wz_send: "Send via WhatsApp",
        wz_restart: "Start over",
        quote_modal_title: "Almost done — tell us how to reach you",
        form_company_label: "Company or personal brand",
        form_optional: "(optional)",
        quote_modal_submit: "Send via WhatsApp",
        wz_wa_intro: "Hi! I made a quote on the LaColo website",
        wz_wa_name: "Name",
        wz_wa_company: "Company",
        wz_wa_rec: "Recommendation",
        wz_wa_answers: "My answers"
    }
};

var currentLang = 'es';

function t(key) {
    var dict = translations[currentLang] || translations.es;
    var s = dict[key] !== undefined ? dict[key] : (translations.es[key] || key);
    /* Reemplaza {presencia}, {negocio}… por el precio formateado */
    return s.replace(/\{(\w+)\}/g, function (m, k) { return PRICES[k] !== undefined ? money(PRICES[k]) : m; });
}

function waUrl(text) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
}

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        var key = element.getAttribute('data-i18n');
        var dict = translations[lang] || translations.es;
        if (dict[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = dict[key];
            } else if (element.tagName === 'TITLE') {
                element.textContent = dict[key];
            } else {
                element.innerHTML = dict[key];
            }
        }
    });
    document.documentElement.lang = lang;
}

/* Precios en la página (elementos con data-price) */
function renderPrices() {
    document.querySelectorAll('[data-price]').forEach(function (el) {
        var k = el.getAttribute('data-price');
        if (PRICES[k] !== undefined) el.textContent = money(PRICES[k]);
    });
}

/* Enlaces de WhatsApp con mensaje (elementos con data-wa) */
function renderWaLinks() {
    document.querySelectorAll('[data-wa]').forEach(function (el) {
        el.href = waUrl(t(el.getAttribute('data-wa')));
    });
}

function renderPage() {
    updateContent(currentLang);
    renderPrices();
    renderWaLinks();
    if (window.renderWizard) window.renderWizard();
    if (window.refreshChatWaLink) window.refreshChatWaLink();
}

document.addEventListener('DOMContentLoaded', function () {
    var selector = document.getElementById('languageSelector');
    var savedLang = null;
    try { savedLang = localStorage.getItem('preferredLanguage'); } catch (e) { }
    var systemLang = (navigator.language || 'es').split('-')[0];
    currentLang = savedLang || (translations[systemLang] ? systemLang : 'es');

    if (selector) {
        selector.value = currentLang;
        selector.addEventListener('change', function (e) {
            currentLang = e.target.value;
            try { localStorage.setItem('preferredLanguage', currentLang); } catch (err) { }
            renderPage();
        });
    }
    renderPage();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
});

/* =========================================
   ANIMACIONES (GSAP)
   ========================================= */
gsap.registerPlugin(ScrollTrigger);

/* ---- Scroll suave para anclas de la misma página ---- */
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

/* ---- Hero (solo en la página de inicio) ---- */
if (document.querySelector('.hero')) {
    gsap.to('.hero-eyebrow, .hero h1, .hero .sub, .hero-ctas', {
        opacity: 0.15, y: -40, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to('.parallax-blob-1', { y: 120, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.parallax-blob-2', { y: -90, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

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
   COTIZADOR DE 3 PREGUNTAS (cotizar.html)
   ========================================= */
(function () {
    var stepsEl = document.getElementById('wz-steps');
    var resultEl = document.getElementById('wz-result');
    var wizardEl = document.getElementById('wizard');
    if (!stepsEl || !resultEl) return;

    var state = { step: 0, goal: null, edit: null, extras: [] };

    function isSell() { return state.goal === 'sell'; }
    /* Si vende en línea, la pregunta 2 no aplica (siempre WooCommerce) */
    function stepList() { return isSell() ? ['goal', 'extras'] : ['goal', 'edit', 'extras']; }

    function tech() {
        if (isSell()) return 'woo';
        if (state.edit === 'yes') return 'wp';
        return 'static';
    }
    function pkg() {
        return { contact: 'presencia', show: 'negocio', sell: 'tienda' }[state.goal];
    }
    function extrasAvailable() {
        var list = ['ia', 'redes'];
        if (tech() !== 'static') list.push('maint');
        return list;
    }

    function optionHTML(name, value, titleKey, descKey, checked, type) {
        return '<label class="wz-option' + (checked ? ' selected' : '') + '">' +
            '<input type="' + type + '" name="' + name + '" value="' + value + '"' + (checked ? ' checked' : '') + '>' +
            '<span class="wz-option-text"><strong>' + t(titleKey) + '</strong>' +
            (descKey ? '<span>' + t(descKey) + '</span>' : '') + '</span>' +
            '</label>';
    }

    function renderStep() {
        var steps = stepList();
        var current = steps[state.step];
        var total = steps.length;
        var head = '<div class="wz-step-head"><span class="wz-count">' +
            t('wz_step').replace('{n}', state.step + 1).replace('{t}', total) + '</span>' +
            (state.step > 0 ? '<button type="button" class="wz-back" id="wz-back">' + t('wz_back') + '</button>' : '') +
            '</div>';
        var body = '';
        if (current === 'goal') {
            body = '<h3 class="wz-q">' + t('wz_q1') + '</h3><div class="wz-options">' +
                optionHTML('goal', 'contact', 'wz_q1_contact', 'wz_q1_contact_d', state.goal === 'contact', 'radio') +
                optionHTML('goal', 'show', 'wz_q1_show', 'wz_q1_show_d', state.goal === 'show', 'radio') +
                optionHTML('goal', 'sell', 'wz_q1_sell', 'wz_q1_sell_d', state.goal === 'sell', 'radio') +
                '</div>';
        } else if (current === 'edit') {
            body = '<h3 class="wz-q">' + t('wz_q2') + '</h3><div class="wz-options">' +
                optionHTML('edit', 'yes', 'wz_q2_yes', 'wz_q2_yes_d', state.edit === 'yes', 'radio') +
                optionHTML('edit', 'no', 'wz_q2_no', 'wz_q2_no_d', state.edit === 'no', 'radio') +
                optionHTML('edit', 'unsure', 'wz_q2_unsure', 'wz_q2_unsure_d', state.edit === 'unsure', 'radio') +
                '</div>';
        } else {
            var avail = extrasAvailable();
            state.extras = state.extras.filter(function (x) { return avail.indexOf(x) !== -1; });
            body = '<h3 class="wz-q">' + t('wz_q3') + '</h3><p class="wz-hint">' + t('wz_q3_hint') + '</p><div class="wz-options">' +
                avail.map(function (x) {
                    return optionHTML('extras', x, 'wz_x_' + x, null, state.extras.indexOf(x) !== -1, 'checkbox');
                }).join('') +
                '</div><button type="button" class="btn-primary wz-next" id="wz-see">' + t('wz_see') + '</button>';
        }
        stepsEl.innerHTML = head + body;
        var bar = document.getElementById('wz-progress-bar');
        if (bar) bar.style.width = ((state.step + 1) / (total + 1) * 100) + '%';
    }

    function computeResult() {
        var p = pkg(), tc = tech();
        var once = PRICES[p] + (state.extras.indexOf('ia') !== -1 ? PRICES.ia : 0);
        var monthly = [];
        if (state.extras.indexOf('ia') !== -1) monthly.push({ name: t('wz_m_ia'), price: money(PRICES.iaMensual) });
        if (state.extras.indexOf('maint') !== -1) monthly.push({ name: t('wz_m_maint'), price: money(PRICES.mantEsencial) });
        if (state.extras.indexOf('redes') !== -1) monthly.push({ name: t('wz_m_redes'), price: money(PRICES.redesMin) + ' – ' + money(PRICES.redesMax) });
        var why = tc === 'woo' ? t('wz_why_woo') : tc === 'wp' ? t('wz_why_wp') :
            (state.edit === 'unsure' ? t('wz_why_static_unsure') : t('wz_why_static'));
        var yearly = tc === 'woo' ? t('wz_yearly_woo') : tc === 'wp' ? t('wz_yearly_wp') : t('wz_yearly_static');
        return {
            title: t('wz_pkg_' + p), techLabel: t('wz_tech_' + tc), why: why, once: once,
            onceNote: t('wz_row_once_note').replace('{plus}', state.extras.indexOf('ia') !== -1 ? t('wz_row_once_ia') : ''),
            monthly: monthly, yearly: yearly,
            tipMaint: tc !== 'static' && state.extras.indexOf('maint') === -1
        };
    }

    function renderResult() {
        var r = computeResult();
        var monthlyHTML = r.monthly.length
            ? '<ul class="wz-monthly">' + r.monthly.map(function (m) {
                return '<li><span>' + m.name + '</span><span>' + m.price + t('per_month') + '</span></li>';
            }).join('') + '</ul>'
            : '<span class="wz-val-muted">' + t('wz_row_monthly_none') + '</span>';
        resultEl.innerHTML =
            '<div class="wz-result-card">' +
            '<div class="section-eyebrow">' + t('wz_rec_eyebrow') + '</div>' +
            '<h3 class="wz-result-title">' + r.title + '</h3>' +
            '<span class="wz-tech">' + r.techLabel + '</span>' +
            '<p class="wz-why">' + r.why + '</p>' +
            '<div class="wz-rows">' +
            '<div class="wz-row"><div class="wz-label">' + t('wz_row_once') + '<small>' + r.onceNote + '</small></div>' +
            '<div class="wz-val wz-big">' + t('pkg_from') + ' ' + money(r.once) + '</div></div>' +
            '<div class="wz-row"><div class="wz-label">' + t('wz_row_monthly') + '</div><div class="wz-val">' + monthlyHTML + '</div></div>' +
            '<div class="wz-row"><div class="wz-label">' + t('wz_row_yearly') + '</div><div class="wz-val">' + r.yearly + '</div></div>' +
            '</div>' +
            (r.tipMaint ? '<p class="wz-tip"><i class="bi bi-lightbulb"></i> ' + t('wz_tip_maint') + '</p>' : '') +
            '<p class="wz-disclaimer">' + t('wz_disclaimer') + '</p>' +
            '<div class="wz-actions">' +
            '<button type="button" class="btn-primary" id="wz-send"><i class="bi bi-whatsapp"></i> ' + t('wz_send') + '</button>' +
            '<button type="button" class="btn-ghost" id="wz-restart">' + t('wz_restart') + '</button>' +
            '</div></div>';
    }

    var showingResult = false;
    window.renderWizard = function () {
        if (showingResult) { renderResult(); } else { renderStep(); }
    };

    function showResult() {
        showingResult = true;
        wizardEl.hidden = true;
        resultEl.hidden = false;
        renderResult();
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function restart() {
        state = { step: 0, goal: null, edit: null, extras: [] };
        showingResult = false;
        resultEl.hidden = true;
        wizardEl.hidden = false;
        renderStep();
        wizardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    stepsEl.addEventListener('change', function (e) {
        var el = e.target;
        if (el.name === 'goal' || el.name === 'edit') {
            state[el.name] = el.value;
            if (el.name === 'goal' && el.value === 'sell') state.edit = null;
            state.step += 1;
            renderStep();
        } else if (el.name === 'extras') {
            var i = state.extras.indexOf(el.value);
            if (el.checked && i === -1) state.extras.push(el.value);
            if (!el.checked && i !== -1) state.extras.splice(i, 1);
            el.closest('.wz-option').classList.toggle('selected', el.checked);
        }
    });

    stepsEl.addEventListener('click', function (e) {
        if (e.target.id === 'wz-back') { state.step = Math.max(0, state.step - 1); renderStep(); }
        if (e.target.id === 'wz-see') showResult();
    });

    /* ---- Envío por WhatsApp ---- */
    var modal = document.getElementById('quote-modal');
    var form = document.getElementById('quote-form');

    resultEl.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        if (!btn) return;
        if (btn.id === 'wz-restart') restart();
        if (btn.id === 'wz-send') modal.classList.add('open');
    });
    document.getElementById('quote-modal-close').addEventListener('click', function () { modal.classList.remove('open'); });
    modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.remove('open'); });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var nombre = document.getElementById('quote-nombre').value.trim();
        var empresa = document.getElementById('quote-empresa').value.trim();
        var r = computeResult();

        var answers = [t('wz_q1_' + state.goal)];
        if (state.edit) answers.push(t('wz_q2_' + state.edit));
        state.extras.forEach(function (x) { answers.push(t('wz_x_' + x)); });

        var lines = [
            '*' + t('wz_wa_intro') + '*',
            '',
            '*' + t('wz_wa_name') + ':* ' + nombre
        ];
        if (empresa) lines.push('*' + t('wz_wa_company') + ':* ' + empresa);
        lines.push('', '*' + t('wz_wa_rec') + ':* ' + r.title + ' (' + r.techLabel + ')');
        lines.push('*' + t('wz_row_once') + ':* ' + t('pkg_from') + ' ' + money(r.once));
        if (r.monthly.length) {
            lines.push('*' + t('wz_row_monthly') + ':*');
            r.monthly.forEach(function (m) { lines.push('• ' + m.name + ': ' + m.price + t('per_month')); });
        }
        lines.push('', '*' + t('wz_wa_answers') + ':*');
        answers.forEach(function (a) { lines.push('✅ ' + a); });

        window.open(waUrl(lines.join('\n')), '_blank');
        modal.classList.remove('open');
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
        var texto = (currentLang === 'en' ? '*New inquiry from the website - LaColo*' : '*Nueva consulta desde la web - LaColo*') +
            '\n\n*' + (currentLang === 'en' ? 'Name' : 'Nombre') + ':* ' + nombre +
            '\n*' + (currentLang === 'en' ? 'Message' : 'Mensaje') + ':* ' + mensaje;
        window.open(waUrl(texto), '_blank');
    });
}

/* =========================================
   WIDGET FLOTANTE DE WHATSAPP
   ========================================= */
(function () {
    var toggleBtn = document.getElementById('chat-toggle-btn');
    var panel = document.getElementById('chat-panel');
    var waLink = document.getElementById('chat-wa-link');
    if (!toggleBtn || !panel) return;

    function refreshWaLink() {
        if (waLink) waLink.href = waUrl(t('wa_msg_general'));
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
