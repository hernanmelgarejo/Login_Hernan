//Asignacion de variables
const $submit=document.getElementById("submit"), 
    $password=document.getElementById("password"),
    $username=document.getElementById("username"), 
    $visible=document.getElementById("visible"); 

//Avento de visibilidad de contraseña respecto al checkbox
document.addEventListener("change",(e)=>{
    if(e.target===$visible) {
        if($visible.checked===false) 
            $password.type="password";
        else 
        $password.type="text";
    }
});

//Evento de redireccion a la pagina de inicio con condiciones
document.addEventListener("click", (e)=>{
    if (e.target === $submit) {
        if ($password.value !== "" && $username.value !== "") {
            e.preventDefault();
            window.location.href ="inicio.html";
                }
    }
});

