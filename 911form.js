var modelname;
var x;
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}
function Model(modelname) {
    modelname=document.getElementById(modelname).innerHTML;
    document.getElementById(modelname).style.color="blue";
}