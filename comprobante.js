    document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formDeposito");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        mostrarAlertaDeposito();
    });
});

function mostrarAlertaDeposito() {
    Swal.fire({
        title: '¡Depósito exitoso!',
        text: 'Tu depósito ha sido procesado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}






