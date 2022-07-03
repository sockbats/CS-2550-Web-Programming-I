window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let butt = document.getElementById("convertButton");
   let c = document.getElementById("cInput");
   let f = document.getElementById("fInput");
   c.addEventListener("input", clearF);
   f.addEventListener("input", clearC);
   butt.addEventListener("click", convert);
}

function clearF() {
   let f = document.getElementById("fInput");
   f.value = "";
}

function clearC() {
   let c = document.getElementById("cInput");
   c.value = "";
}

function convert() {
   let c = document.getElementById("cInput");
   let f = document.getElementById("fInput");
   let celsius = parseInt(c.value)
   let fahrenheit = parseInt(f.value)
   if ((isNaN(celsius) && f.value == "") || (isNaN(fahrenheit) && c.value == "")) {
      document.getElementById("errorMessage").innerHTML = `${c.value}${f.value} is not a number`
      return
   }
   document.getElementById("errorMessage").innerHTML = ""
   if (f.value != "") {
      c.value = convertFtoC(fahrenheit)
      f.value = ""
   }
   else if (c.value != "") {
      f.value = convertCtoF(celsius)
      c.value = ""
   }
   if (fahrenheit < 32 || celsius < 0) {
      document.getElementById("weatherImage").src = "cold.png"
   } 
   else if ((32 <= fahrenheit && fahrenheit <= 50) || (0 <= celsius && celsius <= 10)) {
      document.getElementById("weatherImage").src = "cool.png"
   }
   else if (fahrenheit > 50 || celsius > 10) {
      document.getElementById("weatherImage").src = "warm.png"
   }
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5/9;
}
