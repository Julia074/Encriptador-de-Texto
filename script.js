
const textArea = document.querySelector(".ingreso-texto");
const mensaje = document.querySelector(".salida-texto");
const textoNoEncontrado = document.querySelector(".texto-no-encontrado");
const divCopiar = document.querySelector(".copiar");

divCopiar.style.display = "none"




function botonEncriptar() {
    const regex = /[A-ZÁÉÍÓÚÜÑ]|[^\w\s]/;
  
    if (textArea.value === null || textArea.value === '') {
      alert("Ingrese un texto");
    }
    if (regex.test(textArea.value)) {
      alert("El texto contiene letras mayúsculas o acentos/símbolos especiales.");
    } else {
      const textoEncriptado = encriptar(textArea.value);
      mensaje.value = textoEncriptado;
      textArea.value = " ";
      mensaje.style.backgroundImage = "none";
      textoNoEncontrado.style.display = "none";
      divCopiar.style.display = "";
    }
  }
  



function encriptar(textoEncriptado){
let  matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
textoEncriptado = textoEncriptado.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(textoEncriptado.includes(matrizCodigo[i][0])){
        textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

    }

}
return textoEncriptado
}

function botonDesncriptar(){
    const regex = /[A-ZÁÉÍÓÚÜÑ]|[^\w\s]/;
  
    if (textArea.value === null || textArea.value === '') {
      alert("Ingrese un texto");
    }
    if (regex.test(textArea.value)) {
      alert("El texto contiene letras mayúsculas o acentos/símbolos especiales.");
    }
    else{
    const textoDesncriptado =  desencriptar(textArea.value);
    mensaje.value = textoDesncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    textoNoEncontrado.style.display = "none"
    divCopiar.style.display = "" 
    }
}
function desencriptar(textoDesncriptado){
    let  matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    textoDesncriptado= textoDesncriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesncriptado.includes(matrizCodigo[i][1])){
            textoDesncriptado = textoDesncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0],)
    
        }
    
    }
    return textoDesncriptado

}

function copiar(){
    navigator.clipboard.writeText(mensaje.value)
    alert("se ha copiado")
}