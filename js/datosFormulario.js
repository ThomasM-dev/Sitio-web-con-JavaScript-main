// formulario-contacto
const btnEnviar = document.getElementById("btnEnviar");
if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
        // Obtener los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // verificar si los campos están vacíos
        if (!nombre || !email || !asunto || !mensaje) {
            Swal.fire({
                icon: "error",
                title: "Formulario incompleto",
                text: "Por favor, completa todos los campos antes de enviar.",
                confirmButtonText: "Aceptar",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarnos. Te responderemos lo antes posible.",
            confirmButtonText: "Aceptar",
        });

        // reiniciar el formulario
        const formulario = btnEnviar.closest("form");
        formulario.reset();
    });
}




// formulario-simulacion-pago
    const btnSimularPago = document.getElementById("btnSimularPago");
    if (btnSimularPago) {
    btnSimularPago.addEventListener("click", () => {
        // Obtener los valores del formulario
        const nombreCompleto = document.getElementById("nombre-completo").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const tarjeta = document.getElementById("tarjeta").value.trim();
        const fechaExp = document.getElementById("fecha-exp").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const paypal = document.getElementById("paypal").value.trim();

        // Validar campos obligatorios
        if (!nombreCompleto || !apellido || !tarjeta || !fechaExp || !cvv || !paypal) {
            Swal.fire({
                icon: "error",
                title: "Formulario incompleto",
                text: "Por favor, completa todos los campos antes de continuar.",
                confirmButtonText: "Aceptar",
            });
            return; 
        }
        Swal.fire({
            icon: "success",
            title: "¡Muchas gracias por tu compra!",
            text: "El pago ha sido procesado con éxito.",
            confirmButtonText: "Aceptar",
        });

        // Reiniciar el formulario
        const formulario = btnSimularPago.closest("form");
        formulario.reset();
    });
}
   
