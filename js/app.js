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