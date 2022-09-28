
let usuario;
let usuarioInfo = localStorage.getItem("usuario");
let h2 = document.getElementById("h2");
let cuentaDeUsuario = document.getElementById("cuentaDeUsuario");

if(usuarioInfo){
    let mensaje = `Bienvenid@ ${usuarioInfo}`;
    h2.innerHTML = `${mensaje}`
}else{
    usuario = prompt("ingrese su nombre para crear un usuario");
    localStorage.setItem("usuario", usuario);
}



let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    let nombreDeUsuario = prompt("ingresar un nombre de usario");
    let domicilio = prompt("ingrese su domicilio");
    let sexo = prompt("ingrese su sexo, Hombre o Mujer");
    let edad = parseInt(prompt("ingrese su edad"));
        cuentaDeUsuario.innerHTML = `
                                 <img src="../assets/imagendehombre.png" alt="hombre" class="imgUsuario"> 
                                 <h4> Nombre de usuario: ${nombreDeUsuario} </h4>
                                 <h4> Domicilio: ${domicilio} 
                                 <h4> Edad: ${edad} </h4>
                                 <h4> sexo: ${sexo} </h4> 
                                 `    
    Toastify({
    text: "Usuario Creado",                               
    duration: 5000,
    }).showToast();                             

    localStorage.setItem("nombreDeUsuario", nombreDeUsuario); 
    localStorage.setItem("domicilio", domicilio);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("edad", edad);                            
})
if(localStorage){
    let nombreDeUsuario = localStorage.getItem("nombreDeUsuario");
    let domicilio = localStorage.getItem("domicilio");
    let sexo = localStorage.getItem("sexo");
    let edad = localStorage.getItem("edad");
    cuentaDeUsuario.innerHTML =`
                                <img src="../assets/imagendehombre.png" alt="hombre" class="imgUsuario"> 
                                <h4> Nombre de usuario: ${nombreDeUsuario} </h4>
                                <h4> Domicilio: ${domicilio} 
                                <h4> Edad: ${edad} </h4>
                                <h4> sexo: ${sexo} </h4> 
                                `   
}


