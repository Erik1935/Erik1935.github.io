const btnencriptar = document.getElementById("encriptar");
const btndesencriptar = document.getElementById("desencriptar");
let inputTexto = document.getElementById("textoPorProcesar");
let textoAMostrar = document.getElementById("mostradorTexto");
let btnCopiar = document.getElementById("copiar");
let textoDeAviso = document.getElementById("aviso");
let texto = "";
let estadoTexto = false;
btnencriptar.addEventListener("click",function(){
    texto = inputTexto.value;
    cambiarContenido(encriptarTexto(texto));
});

btndesencriptar.addEventListener("click",function(){
    texto = inputTexto.value;
    cambiarContenido(desencriptarTexto(texto));
});
btnCopiar.addEventListener("click",function(){
    copiarTexto();
});
function encriptarTexto(textoPlano){
    let cadena = textoPlano.split('');
    let textoEncriptado = "";
    let cadenaTemporal = "";
    for(let i = 0;i<cadena.length;i++){
        switch(cadena[i]){
            case "e":
                textoEncriptado += "enter";
                break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                    case "a":
                        textoEncriptado += "ai";
                        break;
                        case "o":
                            textoEncriptado += "ober";
                            break;
                            case "u":
                                textoEncriptado += "ufat";
                                break;
                                default:
                                    textoEncriptado +=cadena[i];
        }
   
    }
    return textoEncriptado;
}
function desencriptarTexto(textoEncriptado){
    let textoDesencriptado = "";
    if(textoEncriptado.includes('enter')){
        textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    }
    if(textoEncriptado.includes('imes')){
        textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    }
    if(textoEncriptado.includes('ai')){
        textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
    }
    if(textoEncriptado.includes('ober')){
        textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    }
    if(textoEncriptado.includes('ufat')){
        textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    }
    textoDesencriptado = textoEncriptado;
    return textoDesencriptado;
}
function cambiarContenido(texto){
    textoAMostrar.innerHTML = texto;
    estadoTexto = true;
}
function copiarTexto(){
    if(estadoTexto){
        navigator.clipboard.writeText(textoAMostrar.innerHTML);
        textoDeAviso.innerHTML = "¡Texto Copiado!";
    }
    
}
/*
 La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/