function foco(){
		 	document.getElementById("emailid").focus();
		}
		
$(document).ready(function(){
	/*ocultemos el ESTADO*/ 
		$("div.cerrar").hide();
});


		function preSubmit(){
			var email = document.getElementById("emailid").value;
			var contraseña = document.getElementById("contraseñaid").value;

			var emailVacio = siVacio(email);
			var contraseñaVacio = siVacio(contraseña);				
			
			var objetoVacio = [emailVacio , contraseñaVacio]
			var idObjeto = ["mesgEmail", "mesgcont"]
			var numInput = ["inp1" , "inp2"]

			if (emailVacio || contraseñaVacio){

				document.getElementById("mensajes").innerHTML = "Por favor complete los datos obligatorios";

				for (i=0; i<objetoVacio.length ; i++){
					if (objetoVacio[i]){             
						document.getElementById(idObjeto[i]).innerHTML = "* Este campo es obligatorio";
						document.getElementById(numInput[i]).style.borderColor = "red";	
					}
					else {
						document.getElementById(idObjeto[i]).innerHTML = "";
						document.getElementById(numInput[i]).style.borderColor = "white";	
					} 
				}
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
    	localStorage.password = document.getElementById("contraseñaid").value;
	}

	function recuperarDatos() {
    	if (localStorage.password != ("")){
        	document.getElementById("datos").innerHTML = "Bienvenid@ , has ingresado correctamente.";
    	} else {
        	document.getElementById("datos").innerHTML = "No has ingresado correctamente.";
    	}
	}




