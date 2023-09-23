var total = 0; // Inicializar el total
function agregarElemento() {
  var articulo = document.getElementById("producto").value;
  var precio = parseFloat(document.getElementById("precioUnico").value);

  var cadenaConcatenada = articulo + " $" + precio.toFixed(2);

  var lista = document.getElementById("listaElemento");
  var nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = cadenaConcatenada;
  lista.appendChild(nuevoElemento);

  total += precio; // Agregar el precio al total

  var totalElemento = document.getElementById("totalCalculado");
  totalElemento.textContent = "Total: $" + total.toFixed(2);

  document.getElementById("producto").value = "";
  document.getElementById("precioUnico").value = "";
}
