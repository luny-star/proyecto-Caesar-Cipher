let ready = document.getElementById("ready");


document.getElementById("rightD").addEventListener("click",function(){
    document.getElementById("salTextoHtml").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    
    ingTexto.value="";
    llave.value="";
    document.getElementById("salTextoHtml").value="";

    ready.innerHTML = "Copiado al portapapeles";

    setTimeout(()=>ready.innerHTML="",2000);
})