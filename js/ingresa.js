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
/*		function preSubmit(){
			
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
		}*/