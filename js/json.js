 var myJSON =
'{ "ofertas":[ {"id":1,"name":"Oferta1","descripcion":"Masajes piedras calientes en Spa Bamboo. Duracion 30 min.", "precio":"Precio $250.","image": "img/ofertas/oferta1.jpg"},{"id":2,"name":"Oferta2", "descripcion":"20% descuento en tu compra de Sumi Sushi.","precio": null, "image": "img/ofertas/oferta2.jpg"}, {"id":3,"name":"Oferta3", "descripcion":"Promocion 2x1 en entradas de cine Movie en Portones Shopping. ","precio": null ,"image":  "img/ofertas/oferta3.jpg"}, {"id":4,"name":"Oferta4", "descripcion":"Descuentos en gimnasio Gym Star. ","precio":"10% y 30% en seccion eliptica y musculación.","image": "img/ofertas/oferta4.jpg"},{"id":5,"name":"Oferta5", "descripcion":"3 dias y 2 noches en Hotel Gran David. Ubicado en Artigas. Almuerzo y cena incluida. ","precio":"Costo: $4.000 ","image":  "img/ofertas/oferta5.jpg"},{"id":6,"name":"Oferta6", "descripcion":"Entradas para Maria Gadú con tarjeta OCA","precio":"Descuento del 20% ","image":  "img/ofertas/oferta6.jpg"},{"id":7,"name":"Oferta7", "descripcion":"Stan up Amigos como estos","precio":"15% descuento en voleteria con tarjetas VISA y MasterCard","image":  "img/ofertas/oferta7.jpg"},{"id":8,"name":"Oferta8", "descripcion":"Estadia en Hotel Gran Victoria. Dos dias y una noche + cena y desayuno","precio":"Costo: $2.500 por persona","image":  "img/ofertas/oferta8.jpg"},{"id":9,"name":"Oferta9", "descripcion":"Alojamiento en Colonia del Sacramento","precio":"15% descuento.", "image":  "img/ofertas/oferta9.jpg"},{"id":10,"name":"Oferta10", "descripcion":"Desayuno para dos en Bar Dolley","precio":"Costo $400.", "image":  "img/ofertas/oferta10.jpg"},{"id":11,"name":"Oferta11", "descripcion":"Recorrido por viñedos Tanat, duracion 1h 30 min.","precio":"$100 por persona.", "image":  "img/ofertas/oferta11.jpg"},{"id":12,"name":"Oferta12", "descripcion":"Peluqueria Unisex Pocitos, promoción Lavado + Tinta.","precio":"Precio: $350.", "image":  "img/ofertas/oferta12.jpg"}]}';


var myObjeto = JSON.parse(myJSON);
var Ides = ["Aviso01","Aviso02","Aviso03","Aviso04", "Aviso05","Aviso06","Aviso07","Aviso08", "Aviso09","Aviso10","Aviso11","Aviso12"]

$('ul li').eq( 2 ).css( "background-color", "red" );

function probarJSON(){

	for (var i=0; i<12; i++){

		document.getElementById(Ides[i]).innerHTML = "<ul>" + "<li>"+ myObjeto.ofertas[i].id + "</li>" + "<li>"+myObjeto.ofertas[i].name + "</li>"+ "<li>"+	myObjeto.ofertas[i].descripcion + "</li>" + "<li>"+ myObjeto.ofertas[i].precio + "</li>"+ "</ul>";

		document.getElementById(Ides[i]).src =  myObjeto.ofertas[i].image ;
	}
}


function cargar(){
	faltan();
	probarJSON();

}