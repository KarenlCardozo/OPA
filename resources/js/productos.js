// Mediante una llamada ajax, consume el API rest
// Obtiene el listado de productos
// Despliega los datos
function mostrarProductos () {
    // Llamada ajax con JQuery
    $.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Invocando metodo para mostrar los datos      
        renderHTML(data);
    });
}

function renderHTML (data) {
        $.each(data, function(i, item) {
        // Obtenemos el contenedor donde se van a desplegar los productos
        var products = $("#products");
        // Generamos el nodo html con los datos que vienen en el JSON
        var html = 
        // Agregamos en el contenedor de productos el html para cada dato del listado
            '<div class="product-item col-md-3 col-sm-12 col-xs-12 col-custom" category='+ data[i].categoria +'>'+ 
                "<img src=" + data[i].imagen +">" + 
                '<div class="div_btn_ofertas">'+
                    '<a class="product-name ">' + 
                        '<button class="boton-ver btn btn-outline-primary" href="#">'+ "Ver oferta"+'</button>'+ 
                    '</a>'+ 
                '</div>'+ 
            '</div>';
        products.append(html);
    });
}


// Ejecucion del metodo mostrarProductos
mostrarProductos();




















