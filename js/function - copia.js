
/**
document.getElementById("presionar").onclick = function () {
    console.log("Capturamos el evento onclick");
    document.getElementById("demo").innerHTML = "Cambio te texto";
}
 */

/**
document.addEventListener("click", function () {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Cambio te texto desde EventListener";
})
 */

document.getElementById("presionar").addEventListener("click", function () {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Cambio te texto desde EventListener";
})