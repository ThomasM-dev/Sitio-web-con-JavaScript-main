export function mostrarCarrito(buttonCarrito, modal) {
    buttonCarrito.addEventListener("click", () => {
        modal.style.display = "flex";
    })
}

export function cerrarCarrito (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        });
}
