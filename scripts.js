
function donar(){

    // SACO EL NOMBRE DEL FORMULARIO
    var name = document.getElementById("nombre_padrino").value;


    // OBTENGO QUE DONACIÓN SE SELECCIONO
    for (let i=1; i<=3 ; i++) {
        var check = document.getElementById("valorDonacion"+ i.toString()).checked;
        if (check) {
            var valor = document.getElementById("valorDonacion"+ i.toString()).value;
            break;
        }
    }

    // LIMPIO CAMPO DE NOMBRE DEL FORNULARIO
    document.getElementById("nombre_padrino").value="";
    document.getElementById("nombre_padrino").focus();

    // PONGO TEXTO DE AGRADECIMIENTO
    var respeusta = "Estimado " + name + " le agradecemos por su donación de " + valor;
    document.getElementById("respuesta").value = respeusta;
  
  
    console.log(respeusta);

}

// MERCADO PAGO

// ******************************************************************************************************************
//  1) Suma la SDK de Mercado Pago y las credenciales necesarias en tu proyecto para habilitar el uso de preferencias:
// ******************************************************************************************************************

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});


// ******************************************************************************************************************
 // 2) En seguida, configura la preferencia según tu producto o servicio:
// ******************************************************************************************************************

// Crea un objeto de preferencia
let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };
  
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });
  