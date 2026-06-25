document.addEventListener("DOMContentLoaded", () => {
    
    // --- ELEMENTOS DEL DOM (MODALES) ---
    const modalRegister = document.getElementById("modal-register");
    const modalSuccess = document.getElementById("modal-success");
    const modalLogin = document.getElementById("modal-login");
    const modalDashboard = document.getElementById("modal-dashboard");

    // --- BOTONES DISPARADORES ---
    const btnOpenRegister = document.getElementById("btn-open-register");
    const btnOpenLogin = document.getElementById("btn-open-login");
    const btnGoToLogin = document.getElementById("btn-go-to-login");
    const btnSwitchToReg = document.getElementById("switch-to-reg");

    // --- FORMULARIOS ---
    const formRegister = document.getElementById("form-register");
    const formLogin = document.getElementById("form-login");

    // --- FUNCIONES CONTROLADORAS DE MODAL ---
    function openModal(modal) {
        modal.style.display = "flex";
    }

    function closeModal(modal) {
        modal.style.display = "none";
    }

    function closeAllModals() {
        [modalRegister, modalSuccess, modalLogin, modalDashboard].forEach(modal => {
            modal.style.display = "none";
        });
    }

    // --- EVENTOS DE APERTURA ---
    btnOpenRegister.addEventListener("click", () => {
        closeAllModals();
        openModal(modalRegister);
    });

    btnOpenLogin.addEventListener("click", () => {
        closeAllModals();
        openModal(modalLogin);
    });

    btnSwitchToReg.addEventListener("click", (e) => {
        e.preventDefault();
        closeAllModals();
        openModal(modalRegister);
    });

    // --- INTERACCIONES DEL FLUJO COMPLETO (PASOS 1 AL 4 DE LA IMAGEN) ---

    // Paso 1 -> Paso 2: Registrarse -> Mensaje de Éxito
    formRegister.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita la recarga simulando procesamiento de datos
        closeModal(modalRegister);
        openModal(modalSuccess);
        formRegister.reset();
    });

    // Paso 2 -> Paso 3: Éxito -> Login
    btnGoToLogin.addEventListener("click", () => {
        closeModal(modalSuccess);
        openModal(modalLogin);
    });

    // Paso 3 -> Paso 4: Login -> Entrada a Panel de Mary Cruz
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        closeModal(modalLogin);
        openModal(modalDashboard);
        formLogin.reset();
    });

    // --- ASIGNACIÓN DE CIERRE (X) Y CLICK AFUERA ---
    document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", () => {
            closeAllModals();
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeAllModals();
        }
    });
});

document.addEventListener("mousemove", (e) => {

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

document.querySelector(".hero").style.background =

`radial-gradient(
circle at ${x*100}% ${y*100}%,

#00ffff 0%,

#00c4ff 15%,

#0056ff 35%,

#7000ff 60%,

#ff0080 85%,

#050716 100%

)`;

});