/* let nombre;
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

alert("Se acabo el nro de respuestas para la encuesta de hoy! trate mañana, garcias"); */


/* let pregunta = prompt ("ha tenido sintomas de coronavirus en los ultimos dias?");


if (pregunta === "no" ) {
    alert("para que mierda entraste");
}

if(pregunta === "si"){
    alert("cagamo")

    let pregunta2 = prompt("tuvo contacto reciente con algun infectado?");

    if (pregunta2 === "si"){
        alert("cagamo, confirmamo tene el bicho");
    }else{
        alert("hacete ver por un medico");
    }

    alert("vamos a sacar turno con el medico gonzales ortiva")

    for(i=0; i < 100; i++){
    let nombre
    nombre = prompt("escribe tu nombre y apellido para registrar un turno")

    alert(`${nombre} tienes el turno nro #${i} para ver al doctor gonzales ortiva`);
    }
}
alert('terminamos'); */

alert('Buenas! vamos a mostrarle nuestra gigantesca variedad de cervezas con un juego dianamico');


let cervezas = 16782;

let pregunta1 = parseInt(prompt("cuantas cervezas es capaz usted de tomar tranquilamente por dia?"));

function cervezaDiaria(){
    let calculo = cervezas / pregunta1;
    alert(`${calculo} es la cantidad de dias que usted tardaria en tomar cada una de nuestras cervezas`);

    let años = calculo / 365

    if (calculo <365){
       alert('tardaria menos de un año')
    }else{
       alert(`tardaria ${años} años en tomar todo`)
}

}

cervezaDiaria();


alert ('ahora, dependiendo su tarjeta puede acceder a distintos descuentos. vamos a ver cuanto tendria que pagar para tomar cada una de nuestras cervezas');

for(i=0; i < 25; i++){ 

    tarjetas = parseInt(prompt("seleccione una de las tarjetas con la cual pagaria 1-VISA 2-MASTERCARD 3-TARJETA CERVEZA GALLIANO"));

    let precioTotal = cervezas * 550;
    let precioConDescuentovisa = precioTotal * 0.80;
    let precioConDescuentoMaster = precioTotal * 0.90;
    let precioConDescuentogalliano = precioTotal * 0.55;

    // TARJETAVISA
if (tarjetas == 1){
    alert("usted eligio la tarjeta visa");
    cuotas = parseInt(prompt("ingrese la cantidad de cuotas con la que le gustaria pagar (maximo 24)"));
    if (cuotas > 24){
        alert("se paso de cantidad de cuotas");
        continue;
    }else{
        alert(`el precio total con descuento visa del 20% es de ${precioConDescuentovisa}`);
        let precioCuotas = precioConDescuentovisa / cuotas;
        alert(`usted pagaria por cuota un total de ${precioCuotas}`);
        break;
    }
    }

    // TARJETAMASTERCARD
    if(tarjetas == 2){
        alert('usted eligio la tarjeta mastercard');
        cuotas = parseInt(prompt("ingrese la cantidad de cuotas con la que le gustaria pagar (maximo 24)"));
        if (cuotas > 24){
            alert('se paso de la cantidad de cuotas');
            continue;
        }else{
            alert(`el precio con descuento master del 10% es de ${precioConDescuentoMaster}`);
            let precioCuotasM = precioConDescuentoMaster / cuotas;   
            alert(`usted pagaria por cuota un total de ${precioCuotasM}`); 
            break; 
        }
        }

        // TARJETA GALLIANO
        if(tarjetas == 3){ 
            alert('usted eligio la tarjeta cerveza galliano');
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas con la que le gustaria pagar (maximo 24)"));
            if (cuotas > 24){
                alert('se paso de la cantidad de cuotas');
                continue;
            }else{
                alert(`el precio con descuento master del 45% es de ${precioConDescuentogalliano}`);
                let precioCuotasG = precioConDescuentogalliano / cuotas;   
                alert(`usted pagaria por cuota un total de ${precioCuotasG}`);  
                break;
            }
    }
}
