function foco(){
		 	document.getElementById("emailid").focus();
		}

$(document).ready(function(){
	/*ocultemos el ESTADO*/ 
		$("div.cerrar").hide();
});

function preSubmit(){
			
			var nombre = document.getElementById("nombreid").value;
			var apellido = document.getElementById("apellidoid").value;
			var sexo= document.getElementById("sexoid").value;
			var telefono= document.getElementById("telid").value;
			var email= document.getElementById("emailid").value;
			var constraseña= document.getElementById("contraseñaid").value;

			var nombreVacio = siVacio(nombre);
			var apellidoVacio = siVacio(apellido);
			var sexoVacio = siVacio(sexo); 
			var telVacio = siVacio(telefono);
			var emailVacio = siVacio(email);
			var contraseñaVacio = siVacio(constraseña);

			var objetoVacio = [nombreVacio, apellidoVacio, sexoVacio,telVacio, emailVacio, contraseñaVacio]
			var mensajeObjeto = ["msgNomb", "mesgApell","mesgSex","mesgTel","mesgEmail","mesgcont"]
			var numInput = ["inp1" , "inp2", "inp3", "inp4", "inp5","inp6"]

			if ( nombreVacio || apellidoVacio || sexoVacio || emailVacio || contraseñaVacio || telVacio){
				document.getElementById("mensajes").innerHTML = "Por favor complete los datos obligatorios";
				
				for (i=0; i<objetoVacio.length ; i++){
					if (objetoVacio[i]){             
						document.getElementById(mensajeObjeto[i]).innerHTML = "* Este campo es obligatorio";
						document.getElementById(numInput[i]).style.borderColor = "red";	
					}
					else {
						document.getElementById(mensajeObjeto[i]).innerHTML = "";
						document.getElementById(numInput[i]).style.borderColor = "white";	
					} 

				}

/*alert(sexoVacio);*/
				return false;
				}
			
			/*postSubmit();*/
			/*mostrar ESTADO*/
			$("div.registro").hide();
       		$("div.cerrar").show();
			return false;
			}   

		
		
		function siVacio(valor){
			if (valor == "")
				return true;
			else
				return false;
		}
		
		function siVacioV2(valor){
			return valor == "";
		}

	//A partir de aqui guardamos usuario en local storage

	function guardarDatos() {
        localStorage.name = document.getElementById("nombreid").value;
        localStorage.surname = document.getElementById("apellidoid").value;
	}

	function recuperarDatos() {
    	if ((localStorage.name != ("")) && (localStorage.surname != (""))) {
        	document.getElementById("datos").innerHTML = "Te has registrado correctamente." 
        												+ " Bienvenid@ " +localStorage.name + " " + localStorage.surname;
    	} else {
        	document.getElementById("datos").innerHTML = "No se registro correctamente";
    	}
	}