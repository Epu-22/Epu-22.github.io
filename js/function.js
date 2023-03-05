// Mostrar código QR

let presionar = document.getElementById("expandir");
let visible = document.getElementById("oculto");

presionar.addEventListener("click", function () {
    if (visible.style.display == "block") {
        visible.style.display = "none";
        presionar.innerHTML = "Vincular con dispositivo móvil";
    }
    else {
        visible.style.display = "block";
        presionar.innerHTML = "Ocultar código QR";
    }
});



// Efecto de desplazamiento

const links = document.getElementsByClassName("botones");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {

    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
