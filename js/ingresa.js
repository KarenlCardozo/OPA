function foco(){
		 	document.getElementById("emailid").focus();
		}
		
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
				postSubmit();
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