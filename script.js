const btnColor = document.getElementById("btnColor");
const btnTexto = document.getElementById("btnTexto");
const inputDemo = document.getElementById("inputDemo");
const mensaje = document.getElementById("mensaje");


function cambiarColor() {
  mensaje.style.color =
    mensaje.style.color === "tomato" ? "black" : "tomato";
}


function cambiarTexto() {
  mensaje.textContent =
    mensaje.textContent === "Este texto cambiará con los eventos 👀"
      ? "¡Texto cambiado con una función!"
      : "Este texto cambiará con los eventos 👀";
}


function mostrarEntrada() {
  mensaje.textContent = "Estás escribiendo: " + inputDemo.value;
}

btnColor.addEventListener("click", cambiarColor);
btnTexto.addEventListener("click", cambiarTexto);
inputDemo.addEventListener("input", mostrarEntrada);