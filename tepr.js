function convertToF(){
    var celsius = parseFloat(document.getElementById("temp"))
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementsByClassName("result").innerHTML = fahrenheit;
}

function convertToC(){
    var fahrenheit = parseFloat(document.getElementById("temp"));
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementsByClassName("result").innerHTML = celsius;
}