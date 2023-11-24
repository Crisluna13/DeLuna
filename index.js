var bandera = false;
function validar(){
    if(bandera){
        console.log("validacion completa");
        //redireccionar a pagina correspondiente
    }

}
function correctCaptcha(){
    console.log("Captcha resuelto correctamente");
    bandera = true;
}