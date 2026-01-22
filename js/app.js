function enviarAWhatsApp(event) {
    event.preventDefault(); // Evita que la página se recargue

    const telefono = "50377471010"; // REEMPLAZA CON TU NÚMERO (Sin espacios ni guiones)
    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    // Estructuramos el mensaje para que se vea profesional al recibirlo
    const textoMensaje = `*Nueva Consulta - LaColo Dev*%0A%0A` +
                         `*Nombre:* ${nombre}%0A` +
                         `*Correo:* ${correo}%0A` +
                         `*Mensaje:* ${mensaje}`;

    const url = `https://wa.me/${telefono}?text=${textoMensaje}`;

    // Abrir en una pestaña nueva
    window.open(url, '_blank');
}

const translations = {
    en: {
        site_title: "LaColo Dev & Creative | Engineering & Design Excellence",
        nav_projects: "Projects",
        nav_subs: "Subscriptions",
        nav_impact: "Impact",
        btn_get_started: "Get Started",
        hero_title: "High-Performance Web Development with a <span class='text-rose'>Creative Soul.</span>",
        hero_lead: "We build secure, fast, and impactful digital experiences. Powered by engineering, protected by Cloudflare, and driven by social impact.",
        btn_build: "Build My Digital Home",
        btn_consultation: "Free Consultation",
        foundation_title: "The Foundation",
        foundation_subtitle: "One-Time Projects",
        card_custom_title: "Custom Web Launch",
        feat_custom_1: "Up to 8 custom sections",
        feat_custom_2: "Mobile Architecture (Bootstrap)",
        feat_custom_3: "Speed Optimization",
        feat_custom_4: "Cloudflare Configuration",
        feat_custom_5: "Lifetime SSL Certificate",
        btn_request_project: "Request Project",
        // ... añadir el resto de llaves aquí
    },
    es: {
        site_title: "LaColo Dev & Creative | Excelencia en Ingeniería y Diseño",
        nav_projects: "Proyectos",
        nav_subs: "Suscripciones",
        nav_impact: "Impacto",
        btn_get_started: "Comenzar",
        //hero_title: "Desarrollo Web de Alto Rendimiento con un <span class='text-rose'>Alma Creativa.</span>",
        hero_lead: "Construimos experiencias digitales seguras, rápidas e impactantes. Potenciado por la ingeniería, protegido por Cloudflare e impulsado por el impacto social.",
        //btn_build: "Crear mi Hogar Digital",
        btn_consultation: "Consultoría Gratis",
        foundation_title: "The Foundation",
        foundation_subtitle: "Proyectos de Pago Único",
        card_custom_title: "Custom Web Launch",
        feat_custom_1: "Hasta 8 secciones personalizadas",
        feat_custom_2: "Arquitectura móvil (Bootstrap)",
        feat_custom_3: "Optimización de velocidad",
        feat_custom_4: "Configuración en Cloudflare",
        feat_custom_5: "Certificado SSL de por vida",
        btn_request_project: "Solicitar Proyecto",
        // ... añadir el resto de llaves aquí
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    // Cambiar el atributo lang del HTML para accesibilidad y SEO
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('languageSelector');
    
    // PRIORIDAD DE IDIOMA
    const savedLang = localStorage.getItem('preferredLanguage');
    const systemLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (translations[systemLang] ? systemLang : 'en');

    // Aplicar idioma inicial
    selector.value = defaultLang;
    updateContent(defaultLang);

    // EVENTO: Cambio manual por el usuario
    selector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('preferredLanguage', selectedLang); // Guarda la elección
        updateContent(selectedLang);
    });
});