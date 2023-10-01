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

// function read (){  
// //     const celsius = parseFloat(document.getElementById("Inputcelsius").value);
// //     const farenheit = parseFloat(document.getElementById("Inputfarenheit").value)
// //     if (celsius !=0) {
// //         convertirCelsiusaFarenheit(celsius)}