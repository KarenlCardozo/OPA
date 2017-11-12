function foco(){
		 	document.getElementById("nombreid").focus();
		}

		function preSubmit(){
			var nombre = document.getElementById("nombreid").value;
			var apellido = document.getElementById("apellidoid").value;
			var sexo= document.getElementById("sexoid").value;
			var email= document.getElementById("emailid").value;
			var constraseña= document.getElementById("contraseñaid").value;
			var telefono = document.getElementById("telid").value;

			var nombreVacio = siVacio(nombre);
			var apellidoVacio = siVacio(apellido);
			var sexoVacio = siVacio(sexo); 					
			var telefonoVacio = siVacio(telefono);
			var emailVacio = siVacio(email);
			var contraseñaVacio = siVacio(constraseña);	

			var objetoVacio = [nombreVacio, apellidoVacio, sexoVacio, telefonoVacio, emailVacio, contraseñaVacio]
			var mensajeObjeto = ["msgNomb", "mesgApell","mesgSex", "mesgTel","mesgEmail","mesgcont"]
			var numInput = ["inp1" , "inp2", "inp3", "inp4", "inp5", "inp6"]

			if ( nombreVacio || apellidoVacio || sexoVacio || emailVacio || contraseñaVacio || telefonoVacio ){
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
		}
		
/*AÑADIR ESTAS FUNCIONES AL PRESUBMIT()*/

/*Aqui validamos si ingresamos solo letras en el nombre y apellido*/

		function soloLetras(){
			var nam = document.registration.nombreid;
			var apell= document.registration.apellidoid;
			var valNam = nam.value;
			var valApell= apell.value;
			if ((valNam.match(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/) == null) && (valApell.match(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/) == null)){
				alert("El nombre y apellido solo debe incluir caracteres de tipo alfabetico");
				return false;
			}
			else {
				alert("El nombre y apellido esta correcto");
				return true;
			}
		}

/*Aqui validamos si ingresamos solo numeros en el telefono*/
		function soloNumeros(){
			var tel = document.registration.telid;
			var valTel = tel.value;
			if (valTel.match(/^[0-9]+$/) == null){
				alert("El telefono solo puede incluir caracteres del tipo numerico");
				return false;
			}
			else {
				alert("El telefono ha sido ingresado correctamente");
				return true;
			}
		}