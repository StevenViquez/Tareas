function agregar(){
    var usuario = JSON.parse(localStorage.getItem("user"));
    var mensaje = {usuario: usuario.usuario, mensaje: document.getElementById("caja").value};
    
    var mensajes = JSON.parse(localStorage.getItem("mensajes"));
    
    if(!mensajes){
            mensajes = [];//crea arreglo
            mensajes.push(mensaje);//le inserta el nuevo usuario 
            localStorage.setItem("mensajes", JSON.stringify(mensajes));//lo almacena en localstorage
    
    }else{
        mensajes.push(mensaje);
        localStorage.setItem("mensajes", JSON.stringify(mensajes));
    }
}

function publicaciones(){
    var mensajes = JSON.parse(localStorage.getItem("mensajes"));
    for(var i in mensajes)
   { 
       
    var usuario = mensajes[i].usuario+":" + mensajes[i].mensaje;
       
    var boceto = boceto + "<div id="+i+" class= \"postUsuers\">"+
       "<div class=\"mensaje\">"+
        "<h4 id=\"mensaje\">  "+usuario+" </h4>"+
        "</div>"+
        "<input id=\"postButtoneditar\" type=\"submit\" "+ "name=\"post\"  class=\"btn-post\" value=\"Editar\">"+
        "<input id=\"postButtonborrar\" type=\"submit\" "+ "name=\"post\"  class=\"btn-post\" value=\"Borrar\">"+
    "</div>" + "\n"; 
    
    }
    document.getElementById("publicaciones").innerHTML=boceto;  
    
}

function Click_post(){
    var obj=document.getElementById("postButton");
    obj.addEventListener('click', function(){//evento del 
        debugger;
        agregar();   
        publicaciones();
    });
};

function Click_edit(){
    var obj=document.getElementById("postButtoneditar");
    obj.addEventListener('click', function(){//evento del 
        
    });
};

Click();



    
    
