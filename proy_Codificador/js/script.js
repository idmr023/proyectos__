let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
  };

function encriptar(){
    let salida = document.getElementById('mostrar_texto');
    let str = (document.getElementById('input__msj')).value.toString();
    let newLetra;
    let NewPalabra = " ";
    
    for(i= 0; i < str.length; i++){
        switch(str[i]){
            case "a": newLetra = "ai"; break; 
            case "e": newLetra = "enter"; break; 
            case "i": newLetra = "imes"; break; 
            case "o": newLetra = "ober"; break; 
            case "u": newLetra = "ufat"; break; 
            default: newLetra = str[i];
            }
            
        NewPalabra = NewPalabra + newLetra;
        } 
        document.getElementById('mostrar_texto').value = NewPalabra;
        document.getElementById('input__msj').value = " ";
    }

    function desencriptar(texto){
        return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        }

    function procesarDesenscriptar(){
        let texto = document.getElementById('mostrar_texto').value;
        let salida = document.getElementById('input__msj');
    
        let resultado = desencriptar(texto);
        salida.value = resultado;

        document.getElementById('mostrar_texto').value = " ";
    }

    function copiarAlPortapapeles(id_elemento) {
        var aux = document.createElement("input");
        
        aux.setAttribute("value", document.getElementById("mostrar_texto").value);
        
        document.body.appendChild(aux);
        
        aux.select();
        
        document.execCommand("copy");
        
        document.body.removeChild(aux);
    }

