/* 
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



function CervezasEspeciales(nombre, precio, gusto){
    this.nombre = nombre;
    this.precio = precio;
    this.gusto = gusto;
}

const cervezaEspecial1 = new CervezasEspeciales("Galliano Ipa", 700, "sabor miel");

console.log(cervezaEspecial1); */

// CREA TU PROPIA CERVEZA

// alert(`vamos a guardar en nuestros datos 2 cervezas que crearia usted, sea libre de decidir lo que quiera!`)

// const CervezaPropia =[];

// for(let i = 0; i < 2; i++){
//     let nombre = prompt("ingrese el nombre de su cerveza");
//     let precio = prompt("ingrese el precio de su cerveza");
//     let gusto = prompt("elija el tipo de gusto que le pondria. EJ: Miel");
//     let obj = {
//         nombre,
//         precio,
//         gusto
//     }

//     CervezaPropia.push(obj);
// }

// console.log(CervezaPropia);

// RECORRER LAS CERVEZAS CREADAS

// CervezaPropia.forEach(item => {
//     console.log(item);
// });

/* let aNavbar = document.getElementById("navbar_logo_redes");

let color = prompt("ingrese el color que le gustaria para el color del navbar 1- Amarillo 2-Rojo 3-Verde");

if (color === "1"){
    aNavbar.className = "amarillo";
}else if (color === "2"){
    aNavbar.className = "rojo";
}else if (color === "3"){
    aNavbar.className = "verde";
}else{
    alert(`color predeterminado`)
}
 */

// let correo = document.getElementById("text");
// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let inputs = e.target.children;
//     if(!inputs[0].value.includes("@")){
//       inputs[0].value = "";  
//       correo.className = "error";
//       let mensaje = document.createElement("h5");
//       mensaje.innerHTML = "correo invalido"
//       mensaje.className = "rojo";
//       document.body.append(mensaje);
//     }
// })


let sectionLocales = document.getElementById("sectionLocales");

let botonNordelta = document.getElementById("btnNordelta");

let btnSanIsidro = document.getElementById("btnSanIsidro");

let btnVillaMayo = document.getElementById("btnVillaMayo");

let btnLibertador = document.getElementById("btnLibertador");

let btnBenavidez = document.getElementById("btnBenavidez");

sectionLocales.className = "imglocal";

botonNordelta.addEventListener("click", () => {
    sectionLocales.innerHTML = `
                              <img src="../assets/localnordelta.jpg" class="imagenlocal" alt="localnordelta ">
                              <h5 class="letraLocales"> Teniente Cnel Magan 670, Nordelta <br> Contacto: +54 1142 03 7440 <br> de Miercoles a Domingo <br> 18hs hasta 24hs </h5>
                              `
});

btnSanIsidro.addEventListener("click", () => {
    sectionLocales.innerHTML = `
                               <img src="../assets/localsanisidro.jpg" class="imagenlocal"  alt="localsanisidro">
                               <h5 class="letraLocales"> E Echeverria 1365, San Isidro <br> Contacto: +54 2644 22 3777 <br> de Miercoles a Domingo <br> 18hs hasta 24hs </h5>
                                `
})

btnVillaMayo.addEventListener("click", () => {
    sectionLocales.innerHTML = `
                               <img src="../assets/localvillamayo.jpg" class="imagenlocal"  alt="localvillamayo">
                               <h5 class="letraLocales"> 4 De Enero 3135, Villa de Mayo <br> Contacto: +54 3424 53 4099 <br> de Miercoles a Domingo <br> 18hs hasta 24hs </h5>
                                `
})

btnLibertador.addEventListener("click", () => {
    sectionLocales.innerHTML = `
                               <img src="../assets/locallibertador.webp"  class="imagenlocal" alt="locallibertador">
                               <h5 class="letraLocales"> Rawson 72, Av. Libertador <br> Contacto: +54 3454 21 3246 <br> de Martes a Domingo <br> 15pm hasta 02am </h5>
                                `
})

btnBenavidez.addEventListener("click", () => {
    sectionLocales.innerHTML = `
                               <img src="../assets/localbenavidez.jpg"  class="imagenlocal" alt="locallibertador">
                               <h5 class="letraLocales"> Santa Fe 3651, Benavidez <br> Contacto: +54 2234 95 1774 <br> de Jueves a Domingo <br> 15hs hasta 24hs </h5>
                                `
})

