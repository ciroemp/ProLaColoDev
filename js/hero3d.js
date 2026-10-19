/* =========================================================
   LACOLO — Logo 3D del hero (Three.js)
   El modelo se construye con código: no necesita archivo GLB.
   Lo carga efectos3d.js solo si el equipo soporta WebGL.
   ========================================================= */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/* Triángulo equilátero (vértices arriba, abajo-izq., abajo-der.) */
function triangle(R) {
    return [90, 210, 330].map(function (a) {
        var r = a * Math.PI / 180;
        return new THREE.Vector2(Math.cos(r) * R, Math.sin(r) * R);
    });
}

/* Marco del logo: triángulo exterior con un hueco trapezoidal
   (la barra superior deja el pequeño triángulo del vértice). */
function frameShape() {
    var R = 1.7, r = 1.05, barY = 0.45;
    var o = triangle(R);
    var shape = new THREE.Shape(o);

    var i = triangle(r);                       // triángulo interior
    var k = (i[0].y - barY) / (i[0].y - i[1].y); // dónde corta la barra
    var hx = i[0].x + (i[1].x - i[0].x) * k;
    var holePts = [
        new THREE.Vector2(hx, barY),
        new THREE.Vector2(i[1].x, i[1].y),
        new THREE.Vector2(i[2].x, i[2].y),
        new THREE.Vector2(-hx, barY)
    ];
    shape.holes.push(new THREE.Path(holePts));
    return { shape: shape, outer: o, hole: holePts, apexCenterY: (i[0].y + 2 * barY) / 3 };
}

/* Recorrido cerrado (para los tubos de neón) a partir de un contorno 2D */
function contour3D(points, z) {
    var path = new THREE.CurvePath();
    for (var n = 0; n < points.length; n++) {
        var a = points[n], b = points[(n + 1) % points.length];
        path.add(new THREE.LineCurve3(new THREE.Vector3(a.x, a.y, z), new THREE.Vector3(b.x, b.y, z)));
    }
    return path;
}

/* Pirámide de 3 caras con la punta hacia la cámara */
function pyramid(radius, height, material) {
    var geo = new THREE.ConeGeometry(radius, height, 3, 1);
    geo.rotateX(Math.PI / 2);     // punta hacia +Z
    geo.rotateZ(Math.PI);         // un vértice de la base hacia arriba
    geo.translate(0, 0, height / 2);
    return new THREE.Mesh(geo, material);
}

export function init(container, canvas) {
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    var scene = new THREE.Scene();
    var pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    var camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 7.4);

    /* Material: metal rosa cobrizo como el logo */
    var rose = new THREE.MeshPhysicalMaterial({
        color: 0xe8b0a5, metalness: 1, roughness: 0.2,
        clearcoat: 1, clearcoatRoughness: 0.1, envMapIntensity: 1.25
    });
    var roseDark = rose.clone();
    roseDark.color = new THREE.Color(0xd99a90);
    roseDark.roughness = 0.26;

    var logo = new THREE.Group();
    var fs = frameShape();
    var frameGeo = new THREE.ExtrudeGeometry(fs.shape, {
        depth: 0.34, bevelEnabled: true, bevelThickness: 0.16, bevelSize: 0.13,
        bevelSegments: 1, curveSegments: 1   // bisel plano, facetado como el logo
    });
    frameGeo.translate(0, 0, -0.17);
    var frameMesh = new THREE.Mesh(frameGeo, rose);
    logo.add(frameMesh);

    /* Pirámide del vértice (sobre la cara del marco) */
    var apex = pyramid(0.3, 0.14, roseDark);
    apex.position.set(0, fs.apexCenterY, 0.33);
    logo.add(apex);

    /* Pirámide central, flotando dentro del hueco */
    var core = pyramid(0.32, 0.36, rose);
    var coreY = -0.12;
    core.position.set(0, coreY, 0.05);
    logo.add(core);

    /* Neón: tubo brillante + resplandor en los bordes de la cara frontal */
    var neonCoreColor = new THREE.Color(0xffd6de);
    var neonCore = new THREE.MeshBasicMaterial({ color: neonCoreColor.clone(), toneMapped: false });
    var neonGlow = new THREE.MeshBasicMaterial({
        color: 0xff7f9c, transparent: true, opacity: 0.38, depthWrite: false, toneMapped: false
    });
    [fs.outer, fs.hole].forEach(function (pts) {
        var path = contour3D(pts, 0.34);
        logo.add(new THREE.Mesh(new THREE.TubeGeometry(path, 240, 0.02, 8, true), neonCore));
        logo.add(new THREE.Mesh(new THREE.TubeGeometry(path, 240, 0.065, 8, true), neonGlow));
    });
    /* La luz del neón tiñe el metal */
    var neonLight = new THREE.PointLight(0xff7f9c, 7, 8);
    neonLight.position.set(0, 0.2, 1.4);
    logo.add(neonLight);

    /* Centrar el conjunto verticalmente (el triángulo no está centrado en su caja) */
    logo.position.y = -0.38;
    var pivot = new THREE.Group();
    pivot.add(logo);
    scene.add(pivot);

    var key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 4, 6);
    scene.add(key);
    var rim = new THREE.PointLight(0xe2a79f, 18, 20);
    rim.position.set(-3.5, -1.5, 3);
    scene.add(rim);

    /* ---- Tamaño ---- */
    function resize() {
        var r = container.getBoundingClientRect();
        var w = Math.max(1, r.width), h = Math.max(1, r.height);
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.fov = camera.aspect < 1 ? 44 : 35;
        camera.updateProjectionMatrix();
    }
    new ResizeObserver(resize).observe(container);
    resize();

    /* ---- Interacción: mouse y scroll ---- */
    var tx = 0, ty = 0, mx = 0, my = 0;
    if (window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('pointermove', function (e) {
            tx = (e.clientX / window.innerWidth - 0.5) * 2;
            ty = (e.clientY / window.innerHeight - 0.5) * 2;
        }, { passive: true });
    }
    var hero = container.closest('.hero') || container;
    function scrollProgress() {
        var h = hero.offsetHeight || 1;
        return Math.min(1, Math.max(0, window.scrollY / h));
    }

    /* ---- Bucle: solo dibuja cuando el hero está a la vista ---- */
    var visible = true, running = false, ready = false;
    var clock = new THREE.Clock();
    var nextFlicker = 3 + Math.random() * 3, flickerEnd = 0, lastOn = 1;
    new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && !running) frame();
    }).observe(container);
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden && visible && !running) frame();
    });

    function frame() {
        if (!visible || document.hidden) { running = false; return; }
        running = true;
        requestAnimationFrame(frame);

        var t = clock.getElapsedTime();
        var p = scrollProgress();
        mx += (tx - mx) * 0.06;
        my += (ty - my) * 0.06;

        pivot.rotation.y = Math.sin(t * 0.45) * 0.55 + mx * 0.45 + p * Math.PI * 1.4;
        pivot.rotation.x = -0.08 + my * 0.25 + Math.sin(t * 0.6) * 0.04;
        pivot.position.y = Math.sin(t * 0.8) * 0.05 - p * 0.7;

        core.rotation.y = Math.sin(t * 0.9) * 0.35;   // se balancea, pero siempre apunta hacia arriba
        core.position.y = coreY + Math.sin(t * 1.3) * 0.05;
        core.position.z = 0.05 + Math.sin(t * 1.3) * 0.08;

        /* Parpadeo de neón: cada 5–11 s, medio segundo de titileo */
        if (t > nextFlicker) { flickerEnd = t + 0.5; nextFlicker = t + 5 + Math.random() * 6; }
        var on = t < flickerEnd ? (Math.random() > 0.45 ? 1 : 0.2) : 1;
        if (on !== lastOn) {
            neonCore.color.copy(neonCoreColor).multiplyScalar(on);
            neonGlow.opacity = 0.38 * on;
            neonLight.intensity = 7 * on;
            container.style.setProperty('--neon-on', on);
            lastOn = on;
        }

        renderer.render(scene, camera);
        if (!ready) { ready = true; container.classList.add('is-ready'); }
    }
    frame();
}
