// Mostrar código QR

document.getElementById("expandir").addEventListener("click", function() {
    document.getElementById("oculto").style.display = "block";
});



// Efecto de desplazamiento

const links = document.getElementsByClassName("boton");

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
