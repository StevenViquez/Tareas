function extraerDatos(){
    //se extraen los datos de las cajas de texto
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    
    var datos = {clave: clave, usuario: usuario};
    //la variable "datos" almacena toda la información del usuario en formato Json
    return datos;
}



function validarDatos(){
    debugger;
    
    var user = extraerDatos(); 
            localStorage.setItem("user", JSON.stringify(user));        
}   
        



function Agregar(){
    var obj=document.getElementById("entrar");
    obj.addEventListener('click', function(){//evento del boton "click"
        validarDatos();//llama a la funcion "ValidarDatos" 
        window.location.href='file:///C:/Users/Steven/Desktop/examen/html/servicio.html'; 
    });
}



Agregar();

