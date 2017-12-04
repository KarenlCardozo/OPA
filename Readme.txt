Opa website
---------------------------------------------------------------------
	Se trata de un sitio de ofertas diarias dentro de Montevideo que cuenta con diferentes categorías como  hoteles, tiempo libre, restaurantes, viajes, estética. 
Las cuales pueden filtrarce para mayor precticidad .Con intencion de que el usuario pueda registrarce e iniciar sesión.

Guia de folder
-----------------------------------------------------------------------
Descripcion de los principales archivos y carpetas
____________________________________________________________
- resources
	- images // Contiene las imagenes utilizadas para las ofertas y las utilizadas para el Slider
	- nav// Contiene las imagenes utilizadas para las ofertas que se muetrasn en los submenus del nav
	
__________________________________________________
	- fonts  // esta carpeta contiene archivos .ttf y .eot referentes a las fuentes iconos de iconmoon y las utilizadas en el slider.
-js

	- contador.js // Este archivo se encarga  de las funcionalidades del contador que se encuentra en el archivo "index.html".

	- ingresa.js // este archivo contiene el comportamiento del formulario de ingreso de usuario: se encarga de verificar que los campos sean obligartorios y de advertirle al usuario que intente ingresar si rellenar un campo que complete todos. 

	- main.js // Este archivo se encarga de que el nav funcione correctamente en las vistas mobile (que al apretar el span que contiene el font icon bar se desplieguen los elementos y sub elementos)

	- registro.js // Este archivo contiene el comportamiento del formulario de registro de usuario: se encarga de verificar que los campos sean obligartorios y de advertirle al usuario que intente registrarse si rellenar un campo que complete todos. 

	-scrollup.js - up.js // Estos archivos .js contienen el comportamiento del boton scroll que permite ir para arriba

	- slider.js - jquery.flexslider.js // Estos archivos se encargan del correcto funcionamiento del slider 
	
	En la carpeta "resources/js":
	
	- filtro.js // Se encarga de filtrar el contenido de las ofertas segun la categoria escogida.

	-productos.js // Aqui se realizan las llamadas ajax y es respondable de la visualización de las ofertas.
	
_______________________________________________________________________________________________________
-css
	- bootstrap.css // Esta es una hoja de estilo descargada desde la página de Bootstrap. Utilizamos este archivo para hacer uso del  "Grid System" (Sistema de grillas utilizado para la creación de la página de forma responsive)
	
	-estilo.css // En esta hoja de estilo se encuentran los estilos generales de la página, es decir estilos que se usan en todos los archivos  .html (estilos del header, nav y el botón de "scroll up").

	-estiloCarrito // Se encarga de proporcionarle cierto estilado al "carrito.html".

	-estiloFiltro // Esta hoja de estilo está a cargo de la sección de "filtro de ofertas" 
	
	-estiloFooter // Es quién se encarga de darle el estilado al footer (esta hoja de estilo es utilizada en todos los archivos .html).
	
	-estiloIngresa - estiloRegistro// Se encargan de determinar el estilado de los archivos "ingresa.html" y "registro.html"	
	
	-estiloSection // Es la que se encarga de darle el estilado a todo lo que aparece en el section del "index.html".

	-responsive // Esta hoja de estilo está a cargo de las vistas mobile de la página web: determina cómo se comportan algunos objetos en las distinas vistas (980px, 728px y 425px).
	
	-flexslider.css // Es quien se encarga del estilo del Slider. (Este archivo al contrario de los demás no se encuentr dentro de la carpeta "css" por problemas de funcionamiento).

	En la carpeta "iconmoon":
	
	-style.css// Esta hoja de estilo fue descargada de la página "Iconmoon" y es quién se encarga de proporcionar estilados a las fuentes (iconos) que utilizamos en la página web.

________________________________________________________________________________________________________________

Funcionalidades 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Breve descripcion de las principales funcionalidades implementadas

-Registro de usuario: El usuario puede registrarce en el sitio si lo ingresado cumple las restricciones de las validaciones. (funcion ilustrativa con validación funcional)
-Ingreso:  El usuario puede iniciar sesion en el sitio si lo ingresado cumple las restricciones de las validaciones. (funcion ilustrativa con validación funcional)
-Filtro de contenido: Permite filtrar las diferentes ofertas según su categoria: hoteles, tiempo libre, entre otras.
-Contador: Cuenta el tiempo restante para la finalizacion de las ofertas mostradas en la pagina .
-Nav : Muestra ejemplos de las ofertas correspondiendose con la categoria.


Recursos internos
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	JSON_Fue utilizado para almacenar las ofertas (Ubicado en la carpeta data , archivo info.json)

	Ajax_Se realizo una  llamada ajax con JQuery que  consume el API rest obtiene el listado de ofertas  y luego estas se muestran.

linea utilizada : node .\node_modules\json-server\bin\index.js .\data\info.json

Librerias utilizadas
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-Boostrap
- Jquery


Recursos Externos utilizados 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-iconmoon: https://icomoon.io 
-Pixabay : pixabay.com/es

________________________________________________________________________
Otros
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Algunas referencias utilizadas:
-http://librosweb.es
-https://www.w3schools.com/
-foros de programación

Trabajo realizado por Karen Cardozo y Romina Giaccio.
