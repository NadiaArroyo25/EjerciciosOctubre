function convertirCelsiusaFarenheit(celsius){
    return farenheit =(celsius * 9/5) + 32;
   }
   function convertirFarenheitaCelsius(farenheit){
    return celsius = (farenheit - 32 )* 5/9;  
    }
function readInput (id){
   return parseFloat(document.getElementById(id).value);
    }
function imprimirCelsiusaF(){
    celsius = readInput("Inputcelsius")
    farenheit = convertirCelsiusaFarenheit(celsius);
    imprimir (celsius,farenheit);
}
function imprimirFarenheitaC() {
 farenheit = readInput("Inputfarenheit");
 celsius = convertirFarenheitaCelsius(farenheit);
imprimir(celsius,farenheit);
}
function imprimir(celsius, farenheit) {
    document.getElementById("Resultado").textContent = `${farenheit.toFixed(2)}°F equivale a ${celsius.toFixed(2)}°C`;
}
document.addEventListener("DOMContentLoaded", function(){
    let botonConvC = document.querySelector("#botonConvC")
    botonConvC.addEventListener("click", imprimirFarenheitaC)
  })
  document.addEventListener("DOMContentLoaded", function(){
    let botonConvF = document.querySelector("#botonConvF")
    botonConvF.addEventListener("click", imprimirCelsiusaF)
  })
