// Llamo los ID de las "Cajas de textos y botones" creados en el formulario.
let btnEncode = document.getElementById("botonE");
let btnDecode = document.getElementById("botonD");
let btnLimpiar = document.getElementById("botonLimpiar");
let ingTexto = document.getElementById("ingTextoHtml");
let salTexto = document.getElementById("salTextoHtml");
let llave = document.getElementById('keyHtml');

//llamo al botón Encriptar
// ===========================
btnEncode.addEventListener("click", Encode);

function Encode(){

    let llave = document.getElementById("keyHtml").value;
    let nuevoTexto = '';

    for (let i = 0; i < ingTexto.value.length; i++)
    {
        let convAscii = ingTexto.value.charCodeAt(i);
        // console.log(convAscii);
        
        if (convAscii >= 65 && convAscii <= 90) {
          nuevoTexto += String.fromCharCode((convAscii - 65 + parseInt(llave)) % 26 + 65); // Mayus Ascii: 65 - 90
        }else if (convAscii >= 97 && convAscii <= 122){
          nuevoTexto += String.fromCharCode((convAscii - 97 + parseInt(llave)) % 26 + 97); // Minus Ascii: 97 - 122
        }
        else{
          console.log(ingTexto.value);
          nuevoTexto += ingTexto.value[i];
        }

    }

    salTexto.value = nuevoTexto;
    return nuevoTexto;
}

btnDecode.addEventListener("click", Decode);

function Decode(){
  let llave = document.getElementById("keyHtml").value;
  let nuevoTexto = '';

  for (let i = 0; i < ingTexto.value.length; i++)
  {
      let convAscii = ingTexto.value.charCodeAt(i);
      console.log(convAscii);
      
      if (convAscii >= 65 && convAscii <= 90) {
        nuevoTexto += String.fromCharCode((convAscii - 90 - parseInt(llave)) % 26 + 90); // Mayus Ascii: 65 - 90
      }else if (convAscii >= 97 && convAscii <= 122) {
        nuevoTexto += String.fromCharCode((convAscii - 122 - parseInt(llave)) % 26 + 122); // Minus Ascii: 97 - 122
      }
      else{
        console.log(ingTexto.value);
        nuevoTexto += ingTexto.value[i];
      }
  }

  salTexto.value = nuevoTexto;    
  return nuevoTexto;
}


btnLimpiar.addEventListener("click", limpiar);

function limpiar()
{
  salTexto.value="";
  ingTexto.value="";
  llave.value="";

  // console.log(salTexto.value);
}


//llamo al botón Desencriptar
// ===========================



//llamo al botón Limpiar
// ===========================
