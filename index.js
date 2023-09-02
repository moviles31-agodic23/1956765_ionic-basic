var total = 0; // Inicializar el total

    function agregarElemento() {
        var producto = document.getElementById("producto").value;
        var precio = parseFloat(document.getElementById("precio").value);

        var cadenaConcatenada = producto + " $" + precio.toFixed(2);

        var lista = document.getElementById("listaElementos");
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = cadenaConcatenada;
        lista.appendChild(nuevoElemento);

        total += precio; // Agregar el precio al total

        var totalElemento = document.getElementById("totalCalculado");
       
    
        totalElemento.textContent = "Total: $" + total.toFixed(2);

        document.getElementById("producto").value = "";
        document.getElementById("precio").value = "";
    }

