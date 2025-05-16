document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formDeposito");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        generarComprobanteDeposito();
    });
});

function generarComprobanteDeposito() {
    const monto = document.getElementById("monto").value;
    const cuenta = document.getElementById("cuenta").value;
    const fecha = new Date().toLocaleString();

    const comprobante = {
        tipo: "Depósito",
        cuenta: cuenta,
        monto: monto,
        fecha: fecha
    };

    // Guardar en localStorage
    localStorage.setItem("comprobante", JSON.stringify(comprobante));

    // Generar PDF y luego mostrar la alerta
    generarPDF(comprobante).then(pdfURL => {
        Swal.fire({
            title: '¡Depósito exitoso!',
            text: 'Se ha generado un comprobante. Puedes abrirlo en una nueva pestaña.',
            icon: 'success',
            confirmButtonText: 'Ver comprobante'
        }).then(() => {
            window.open(pdfURL, '_blank');
        });
    });
}






