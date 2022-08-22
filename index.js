let nombre;
let stella = 1;
let warsteiner = 1;
let cerveza = 0;

for(i=0; i < 4; i++){
    cerveza = prompt("que cerveza le gusta mas? 1-STELLA 2-WARSTEINER, ingrese uno de esos dos numeros");
    cerveza = parseInt(cerveza);

    if (cerveza !== 1 && cerveza !== 2){
        i--;
        alert("el valor ingresado es incorrecto");
        continue;
        
    }
    nombre = prompt("ingrese su nombre");

    if (cerveza === 1){

            if (stella <= 2){
                alert(`${nombre} eres la persona nro #${stella} que le gusta la stella`);
                stella++; 
           
            }else{
                alert(`se acabo el nro de respuestas para la encuesta`);
                i--;
            }
        
    }else{        
            if (warsteiner <= 2){
                alert(`${nombre} eres la persona nro #${warsteiner} que le gusta la warsteiner`);
                warsteiner++;

            }else{
                alert(`se acabo el nro de respuestas para la encuesta`);
                i--;
            }
    }
}

alert("Se acabo el nro de respuestas para la encuesta de hoy! trate mañana, garcias");