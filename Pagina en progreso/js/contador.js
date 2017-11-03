function faltan(){ 

        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1; //hoy es 0!
        var futuro = new Date (2017,mm,(dd+11) ,0,0); 
        var actualiza = 1000;
        var ahora = new Date(); 
        var faltan = futuro - ahora; 
        if (faltan > 0){ 
            var segundos = Math.round(faltan/1000); 
            var minutos = Math.floor(segundos/60); 
            var segundos_s = segundos%60; 
            var horas = Math.floor(minutos/60); 
            var minutos_s = minutos%60; 
            var horas_s = horas%24; 
            document.getElementById("boxcont").innerHTML =  horas_s + "h " + minutos_s + "m " + segundos_s +"s" ; 
            setTimeout("faltan()",actualiza); 
        } 
        else { 
            document.formulario.reloj.value= "00:00:00" ; 
            return true; 
        } 
    }