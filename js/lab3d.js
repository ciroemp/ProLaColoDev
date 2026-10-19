/* =========================================================
   LACOLO — Prototipo 3D (lab.html)
   Carruseles 3D, tarjetas que giran, inclinación de paquetes,
   muro de arte urbano y carga del logo 3D.
   Se apoya en app.js (translations, t, currentLang, gsap).
   ========================================================= */
(function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var scriptUrl = document.currentScript && document.currentScript.src;

    /* ---- Textos nuevos del prototipo (se suman a los de app.js) ---- */
    var ADD = {
        es: {
            flip_more: 'Ver detalles', flip_back: 'Volver',
            cf_services_label: 'Servicios', cf_pkg_label: 'Paquetes',
            cf_prev: 'Anterior', cf_next: 'Siguiente', cf_slide: '{n} de {t}', cf_goto: 'Ir a la tarjeta {n}'
        },
        en: {
            flip_more: 'See details', flip_back: 'Back',
            cf_services_label: 'Services', cf_pkg_label: 'Packages',
            cf_prev: 'Previous', cf_next: 'Next', cf_slide: '{n} of {t}', cf_goto: 'Go to card {n}'
        }
    };
    Object.keys(ADD).forEach(function (l) {
        Object.keys(ADD[l]).forEach(function (k) { translations[l][k] = ADD[l][k]; });
    });

    function fmt(key, n, total) { return t(key).replace('{n}', n).replace('{t}', total); }

    /* =====================================================
       CARRUSEL 3D (coverflow): arrastrar, flechas, puntos y teclado
       ===================================================== */
    function Coverflow(track, opts) {
        opts = opts || {};
        var items = Array.prototype.slice.call(track.children);
        var n = items.length;
        var loop = !!opts.loop;
        var active = Math.min(opts.start || 0, n - 1);
        var spacingK = opts.spacing || 0.62, depth = opts.depth || 180, angle = opts.angle || 32;
        var drag = null, suppressClick = false, raf = 0;
        var controls, prevBtn, nextBtn, dots = [];

        track.classList.add('cf-on');
        track.style.setProperty('--cf-pad', (opts.padTop || 0) + 'px');
        track.setAttribute('tabindex', '0');
        track.setAttribute('role', 'region');
        track.setAttribute('aria-roledescription', 'carousel');
        items.forEach(function (it) {
            it.setAttribute('role', 'group');
            it.setAttribute('aria-roledescription', 'slide');
        });

        /* Controles */
        controls = document.createElement('div');
        controls.className = 'cf-controls';
        prevBtn = document.createElement('button');
        prevBtn.type = 'button'; prevBtn.className = 'cf-arrow'; prevBtn.innerHTML = '&larr;';
        nextBtn = document.createElement('button');
        nextBtn.type = 'button'; nextBtn.className = 'cf-arrow'; nextBtn.innerHTML = '&rarr;';
        var dotsWrap = document.createElement('div');
        dotsWrap.className = 'cf-dots';
        items.forEach(function (_, i) {
            var d = document.createElement('button');
            d.type = 'button'; d.className = 'cf-dot';
            d.addEventListener('click', function () { go(i); });
            dotsWrap.appendChild(d); dots.push(d);
        });
        controls.appendChild(prevBtn); controls.appendChild(dotsWrap); controls.appendChild(nextBtn);
        track.parentNode.insertBefore(controls, track.nextSibling);
        prevBtn.addEventListener('click', function () { go(active - 1); });
        nextBtn.addEventListener('click', function () { go(active + 1); });

        function itemW() { return items[0].offsetWidth || 300; }

        function rel(i, base) {
            var off = i - base;
            if (loop) {
                off = ((off % n) + n) % n;
                if (off > n / 2) off -= n;
            }
            return off;
        }

        function layout(frac) {
            var spacing = itemW() * spacingK;
            items.forEach(function (it, i) {
                var off = rel(i, active + (frac || 0));
                var abs = Math.abs(off), s = off < 0 ? -1 : 1;
                var x = s * (Math.min(abs, 1) * spacing + Math.max(abs - 1, 0) * spacing * 0.45);
                var z = -Math.min(abs, 2) * depth;
                var ry = -s * Math.min(abs, 1) * angle;
                var op = abs > 1.6 ? 0 : Math.max(0, 1 - abs * 0.38);
                /* Al dar la vuelta en modo anillo, evitar que la tarjeta cruce por el centro */
                if (it._off !== undefined && Math.abs(off - it._off) > 1.5) {
                    it.style.transition = 'none';
                    (function (el) { requestAnimationFrame(function () { requestAnimationFrame(function () { el.style.transition = ''; }); }); })(it);
                }
                it._off = off;
                it.style.transform = 'translateX(-50%) translateX(' + x.toFixed(1) + 'px) translateZ(' + z.toFixed(1) + 'px) rotateY(' + ry.toFixed(2) + 'deg)';
                it.style.opacity = op.toFixed(3);
                it.style.zIndex = String(100 - Math.round(abs * 10));
            });
        }

        function labels() {
            track.setAttribute('aria-label', t(opts.labelKey || 'cf_services_label'));
            prevBtn.setAttribute('aria-label', t('cf_prev'));
            nextBtn.setAttribute('aria-label', t('cf_next'));
            items.forEach(function (it, i) { it.setAttribute('aria-label', fmt('cf_slide', i + 1, n)); });
            dots.forEach(function (d, i) { d.setAttribute('aria-label', fmt('cf_goto', i + 1, n)); });
        }

        function commit() {
            layout(0);
            items.forEach(function (it, i) {
                var on = i === active;
                it.classList.toggle('is-active', on);
                if (on) it.removeAttribute('inert'); else it.setAttribute('inert', '');
            });
            dots.forEach(function (d, i) { d.setAttribute('aria-current', i === active ? 'true' : 'false'); });
            prevBtn.disabled = !loop && active === 0;
            nextBtn.disabled = !loop && active === n - 1;
        }

        function go(i) {
            active = loop ? ((i % n) + n) % n : Math.max(0, Math.min(n - 1, i));
            commit();
        }

        function measure() {
            var h = 0;
            items.forEach(function (it) { h = Math.max(h, it.offsetHeight); });
            track.style.height = (h + (opts.padTop || 0)) + 'px';
            layout(0);
        }
        var ro = new ResizeObserver(function () {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(measure);
        });
        items.forEach(function (it) { ro.observe(it); });
        ro.observe(track);

        /* ---- Arrastre con mouse o dedo ---- */
        function stepFromDx(dx) { return -dx / (itemW() * spacingK); }
        function onDown(e) {
            if (e.button !== undefined && e.button !== 0) return;
            drag = { x0: e.clientX, y0: e.clientY, dx: 0, id: e.pointerId, axis: null };
        }
        function onMove(e) {
            if (!drag) return;
            var dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
            if (drag.axis === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
                drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
                if (drag.axis === 'x') {
                    try { track.setPointerCapture(drag.id); } catch (err) { }
                    track.classList.add('cf-dragging');
                }
            }
            if (drag.axis !== 'x') return;
            drag.dx = dx;
            var f = stepFromDx(dx);
            if (!loop) f = Math.max(-active - 0.3, Math.min(n - 1 - active + 0.3, f));
            layout(f);
        }
        function onUp(e) {
            if (!drag) return;
            var d = drag; drag = null;
            track.classList.remove('cf-dragging');
            if (d.axis === 'x') {
                var f = stepFromDx(d.dx);
                var step = Math.abs(f) < 0.18 ? 0 : (f > 0 ? Math.max(1, Math.round(f)) : Math.min(-1, Math.round(f)));
                go(active + step);
                suppressClick = true;
                setTimeout(function () { suppressClick = false; }, 60);
            } else if (d.axis === null && e.type === 'pointerup') {
                /* Toque en una tarjeta lateral: ir a ella */
                var r = track.getBoundingClientRect(), cx = r.left + r.width / 2, half = itemW() / 2;
                if (e.clientX < cx - half) go(active - 1);
                else if (e.clientX > cx + half) go(active + 1);
            }
        }
        function onCancel() {
            if (!drag) return;
            drag = null;
            track.classList.remove('cf-dragging');
            commit();
        }
        function onClickCapture(e) {
            if (suppressClick) { e.preventDefault(); e.stopPropagation(); }
        }
        function onKey(e) {
            if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
        }
        track.addEventListener('pointerdown', onDown);
        track.addEventListener('pointermove', onMove);
        track.addEventListener('pointerup', onUp);
        track.addEventListener('pointercancel', onCancel);
        track.addEventListener('click', onClickCapture, true);
        track.addEventListener('keydown', onKey);

        labels();
        commit();
        measure();

        this.refresh = function () { labels(); measure(); };
        this.destroy = function () {
            ro.disconnect();
            track.removeEventListener('pointerdown', onDown);
            track.removeEventListener('pointermove', onMove);
            track.removeEventListener('pointerup', onUp);
            track.removeEventListener('pointercancel', onCancel);
            track.removeEventListener('click', onClickCapture, true);
            track.removeEventListener('keydown', onKey);
            controls.remove();
            track.classList.remove('cf-on', 'cf-dragging');
            ['tabindex', 'role', 'aria-roledescription', 'aria-label', 'style'].forEach(function (a) { track.removeAttribute(a); });
            items.forEach(function (it) {
                ['style', 'inert', 'role', 'aria-roledescription', 'aria-label'].forEach(function (a) { it.removeAttribute(a); });
                it.classList.remove('is-active');
                delete it._off;
            });
        };
    }

    var carousels = [];

    /* Servicios: anillo continuo en todas las pantallas */
    var svcTrack = document.getElementById('svc-track');
    if (svcTrack) carousels.push(new Coverflow(svcTrack, { loop: true, start: 0, labelKey: 'cf_services_label' }));

    /* Paquetes: carrusel solo en móvil; en escritorio quedan lado a lado */
    var pkgTrack = document.getElementById('pkg-track');
    var pkgCf = null;
    var mqMobile = window.matchMedia('(max-width: 900px)');
    function syncPackages() {
        if (!pkgTrack) return;
        if (mqMobile.matches && !pkgCf) {
            pkgCf = new Coverflow(pkgTrack, { start: 1, padTop: 16, spacing: 0.72, depth: 150, angle: 28, labelKey: 'cf_pkg_label' });
        } else if (!mqMobile.matches && pkgCf) {
            pkgCf.destroy(); pkgCf = null;
        }
    }
    syncPackages();
    if (mqMobile.addEventListener) mqMobile.addEventListener('change', syncPackages);

    /* =====================================================
       TARJETAS QUE GIRAN (comparación)
       ===================================================== */
    document.querySelectorAll('.flip').forEach(function (card) {
        var front = card.querySelector('.flip-front');
        var back = card.querySelector('.flip-back');
        function set(on) {
            card.classList.toggle('flipped', on);
            if (on) { front.setAttribute('inert', ''); back.removeAttribute('inert'); }
            else { back.setAttribute('inert', ''); front.removeAttribute('inert'); }
        }
        set(false);
        card.addEventListener('click', function (e) {
            if (!e.target.closest('.flip-btn')) return;
            var on = !card.classList.contains('flipped');
            set(on);
            var btn = (on ? back : front).querySelector('.flip-btn');
            if (btn) btn.focus({ preventScroll: true });
        });
    });

    /* =====================================================
       INCLINACIÓN 3D DE PAQUETES (escritorio con mouse)
       ===================================================== */
    if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.pkg-card').forEach(function (card) {
            card.addEventListener('pointermove', function (e) {
                if (card.closest('.cf-on')) return;
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
                card.style.transform = 'perspective(900px) rotateX(' + ((0.5 - py) * 9).toFixed(2) + 'deg) rotateY(' + ((px - 0.5) * 11).toFixed(2) + 'deg)';
                card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
                card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
                card.classList.add('is-tilting');
            });
            card.addEventListener('pointerleave', function () {
                card.style.transform = '';
                card.classList.remove('is-tilting');
            });
        });
    }

    /* =====================================================
       MURO DE ARTE URBANO (misión social)
       ===================================================== */
    var wall = document.getElementById('mission-wall');
    if (wall) {
        var words = ['ARTE', 'BARRIO', 'COLOR', 'MURAL', 'CREA', 'SV', 'CALLE', 'JUVENTUD'];
        var tiles = '';
        for (var i = 0; i < 24; i++) {
            var word = (i % 3 === 1) ? words[Math.floor(i / 3) % words.length] : '';
            var pattern = (i * 5 + Math.floor(i / 8) * 3) % 8;   // varía por fila y por columna
            tiles += '<div class="tile p' + pattern + '">' + (word ? '<span>' + word + '</span>' : '') + '</div>';
        }
        wall.innerHTML = tiles;
        if (!reduceMotion && window.gsap) {
            gsap.fromTo(wall, { xPercent: 2 }, {
                xPercent: -24, ease: 'none',
                scrollTrigger: { trigger: '#impacto', start: 'top bottom', end: 'bottom top', scrub: true }
            });
        }
    }

    /* Al cambiar de idioma, actualizar etiquetas y alturas */
    document.addEventListener('DOMContentLoaded', function () {
        var sel = document.getElementById('languageSelector');
        if (sel) sel.addEventListener('change', function () {
            carousels.concat(pkgCf ? [pkgCf] : []).forEach(function (c) { c.refresh(); });
        });
        carousels.concat(pkgCf ? [pkgCf] : []).forEach(function (c) { c.refresh(); });
    });

    /* =====================================================
       LOGO 3D: se carga después de que la página ya se ve.
       Plan B (se queda el SVG): sin WebGL, poca memoria
       o "reducir movimiento" activado.
       ===================================================== */
    function canWebGL() {
        try {
            var c = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
        } catch (e) { return false; }
    }
    function whenIdle(fn) {
        if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 1500 });
        else setTimeout(fn, 300);
    }
    var visual = document.getElementById('hero-visual');
    var lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 2;
    if (visual && scriptUrl && !reduceMotion && !lowMemory && canWebGL()) {
        var start = function () {
            whenIdle(function () {
                import(new URL('hero3d.js', scriptUrl).href)
                    .then(function (m) { m.init(visual, document.getElementById('hero-canvas')); })
                    .catch(function (err) { console.warn('Logo 3D no disponible; se usa la imagen.', err); });
            });
        };
        if (document.readyState === 'complete') start();
        else window.addEventListener('load', start);
    }
})();
