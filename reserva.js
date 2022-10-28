
menúBásico();


let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
link.media = "all";
document.getElementsByTagName("head")[0].appendChild(link);

baseDeDatosLogin = JSON.parse(localStorage.getItem("sistema-de-login"));

let usuarioLogueado


if (!baseDeDatosLogin) {
  cargarDatosInicialesDeLaBaseDeDatosLogin();
}

function guardarDatosDeLaBaseDeDatosLogin() {
  localStorage.setItem("sistema-de-login", JSON.stringify(baseDeDatosLogin));
}

function cargarDatosInicialesDeLaBaseDeDatosLogin() {
  baseDeDatosLogin = {
    1234567890: {
      contraseña: "abc",
      puntaje: 0,
    },
    "0987654321": {
      contraseña: "def",
      puntaje: 0,
    },
    98765434567: {
      contraseña: "ghi",
      puntaje: 0,
    },
  };
}



async function menúBásico() {
  opción_menúBásico = -1;
  await swal.fire({
    title: "Menú",
    showConfirmButton: false,
    html: `
        <button class="swal2-confirm swal2-styled" onclick='opción_menúBásico=0;Swal.close()'>
            Registrar nuevo usuario
        </button>
        <br>
        <button class="swal2-confirm swal2-styled" onclick='opción_menúBásico=1;Swal.close()'>
            Login
        </button>
        `,
  });
  switch (opción_menúBásico) {
    case 0:
      registrarNuevoUsuario();
      break;
    case 1:
      login();
      break;
    default:
      await menúBásico();
      break;
  }
}


async function mostrarUsuariosPorTabla(...propiedades) {
  if(!usuarioLogueado){
    return
  }
  let html = `
  <table class="table table-light table-striped">
    <theader>
    <th>
      Usuario
    </th>
  `;
  if (propiedades[0] == "*") {
    for (const usuario in baseDeDatosLogin) {
      for (const propiedad in baseDeDatosLogin[usuario]) {
        html += "<th>";
        html += propiedad;
        html += "</th>";
      }
      break;
    }
  } else {
    for (const propiedad of propiedades) {
      html += "<th>";
      html += propiedad;
      html += "</th>";
    }
  }
  html += "</theader><tbody>";
  for (const usuario in baseDeDatosLogin) {
    html += "<tr>";
    html += "<td>";
    html += usuario;
    html += "</td>";
    if (propiedades[0] == "*") {
      for (const propiedad in baseDeDatosLogin[usuario]) {
        html += "<td>";
        html += baseDeDatosLogin[usuario][propiedad];
        html += "</td>";
      }
    } else {
      for (const propiedad of propiedades) {
        html += "<td>";
        html += baseDeDatosLogin[usuario][propiedad];
        html += "</td>";
      }
    }

    html += "</tr>";
  }
  await swal.fire({
    text: "Usuarios",
    confirmButtonText: "Cerrar",
    html,
  });
}

async function registrarNuevoUsuario() {
  opción_registrarNuevoUsuario = -1;
  await swal.fire({
    title: "Registrar",
    showConfirmButton: false,
    html: `
        <input class="swal2-input" placeholder="Usuario" id="usuario">
        <input type="password" class="swal2-input" placeholder="Contraseña" id="contraseña">
        <button class="swal2-confirm swal2-styled" onclick='opción_registrarNuevoUsuario=0;Swal.clickConfirm()'>
            Crear
        </button>
        <button class="swal2-confirm swal2-styled" onclick='opción_registrarNuevoUsuario=1;Swal.close()'>
            Cancelar
        </button>
        `,
    preConfirm: () => {
      let usuario = document.getElementById("usuario").value;
      let contraseña = document.getElementById("contraseña").value;
      if (!usuario) {
        Swal.showValidationMessage("No hay usuario");
        return false;
      }
      if (!contraseña) {
        Swal.showValidationMessage("No hay contraseña");
        return false;
      }
      baseDeDatosLogin[usuario] = {};
      baseDeDatosLogin[usuario].contraseña = contraseña;
      baseDeDatosLogin[usuario].puntaje = 0;
      guardarDatosDeLaBaseDeDatosLogin();
      Toastify({
        text: "Usuario Creado",                               
        duration: 3000,
        }).showToast(); 
      return true;
      

    },
  });
  switch (opción_registrarNuevoUsuario) {
    case 0:
      menúBásico();
      break;
    case 1:
      menúBásico();
      break;
    default:
      menúBásico();
      break;
  }
 
}

async function login() {
    let usuarioNav = document.getElementById("usuario__navbar");
    await swal.fire({
    title: "Bienvenido",
    confirmButtonText: "Login",
    html: `
        <div style="margin:5px">
            <input class="swal2-input" placeholder="usuario" id="usuario">
            <input type="password" class="swal2-input" placeholder="contraseña" id="contraseña">
        </div>
        `,
    preConfirm: () => {
      let usuario = document.getElementById("usuario").value;
      let contraseña = document.getElementById("contraseña").value;
      if (!usuario) {
        Swal.showValidationMessage("No hay usuario");
        return false;
      }
      if (!contraseña) {
        Swal.showValidationMessage("No hay contraseña");
        return false;
      }
      let datos = baseDeDatosLogin[usuario];
      if (!datos) {
        Swal.showValidationMessage("El usuario no existe");
        return false;
      }
      if (datos.contraseña != contraseña) {
        Swal.showValidationMessage("Contraseña incorrecta");
        return false;
      }
      usuarioLogueado = datos
      Toastify({
        text: `Bienvenido ${usuario}!`,                               
        duration: 5000,
        }).showToast(); 
        usuarioNav.innerHTML = `
                              <h5 class="pUsuarioNav">${usuario}</h5>
                              <img src="../assets/imagendehombre.png" alt="imagen de usuario" class="imagenUsuario">
                              `
      return true;
    },
  });
}

// RESERVA

function mostrar_inputs(){
  let carta_reserva = document.getElementById("carta_reserva");
  let nombreUsuario = document.getElementById("nombre").value;
  let Fecha_de_reserva = document.getElementById("Fecha_de_reserva").value;
  let observaciones = document.getElementById("observaciones").value;
  let correo = document.getElementById("correo").value;
  carta_reserva.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../assets/locallibertador.webp" class="img-fluid rounded-start" alt="local">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Reserva</h5>
        <p class="card-text">Tarjeta de Reserva Para visita Guiada por las Fabricas de Cervezas Galliano. <br> Nombre:${nombreUsuario} <br> Fecha: ${Fecha_de_reserva} <br> Correo: ${correo} <br> Observaciones: <br> ${observaciones}</p>
      </div>
    </div>
  </div>
</div>
                            `
                            Toastify({
                              text: "Reserva Nueva Creada",                               
                              duration: 3000,
                              }).showToast(); 
localStorage.setItem("nombreUsuario", nombreUsuario); 
localStorage.setItem("Fecha_de_reserva", Fecha_de_reserva);
localStorage.setItem("observaciones", observaciones);
localStorage.setItem("correo", correo); 
}


if (localStorage.nombreUsuario){
  let nombreUsuario = localStorage.getItem("nombreUsuario");
  let Fecha_de_reserva = localStorage.getItem("Fecha_de_reserva");
  let observaciones = localStorage.getItem("observaciones");
  let correo = localStorage.getItem("correo");
  carta_reserva.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../assets/locallibertador.webp" class="img-fluid rounded-start" alt="local">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Reserva</h5>
        <p class="card-text">Tarjeta de Reserva Para visita Guiada por las Fabricas de Cervezas Galliano. <br> Nombre:${nombreUsuario} <br> Fecha: ${Fecha_de_reserva} <br> Correo: ${correo} <br> Observaciones: <br> ${observaciones}</p>
      </div>
    </div>
  </div>
</div>
                            `
}