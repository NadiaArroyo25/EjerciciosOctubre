function convertCelsiustoFarenheit(celsius){
    return farenheit =(celsius * 9/5) + 32;
   }
   function convertFarenheittoCelsius(farenheit){
    return celsius = (farenheit - 32 )* 5/9;  
    }
function readInput (id){
   return parseFloat(document.getElementById(id).value);
    }
function printCelsiusaF(){
    celsius = readInput("Inputcelsius")
    farenheit = convertCelsiustoFarenheit(celsius);
    print(celsius,farenheit);
}
function printFarenheitaC() {
 farenheit = readInput("Inputfarenheit");
 celsius = convertFarenheittoCelsius(farenheit);
 print(celsius,farenheit);
}
function print(celsius, farenheit) {
    document.getElementById("result").textContent = `${farenheit.toFixed(2)}°F equivale a ${celsius.toFixed(2)}°C`;
}
    document.addEventListener("DOMContentLoaded", function(){
    let buttonConvC = document.querySelector("#buttonConvC")
    buttonConvC.addEventListener("click", printFarenheitaC)
  })
    document.addEventListener("DOMContentLoaded", function(){
    let buttonConvF = document.querySelector("#buttonConvF")
    buttonConvF.addEventListener("click", printCelsiusaF)
  });
