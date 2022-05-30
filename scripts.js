
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