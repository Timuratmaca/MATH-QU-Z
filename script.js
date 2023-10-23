let addition=document.getElementById("addition")
let subtration=document.getElementById("subtration")
let division=document.getElementById("division")
let multiplication=document.getElementById("multiplication")
let input=document.getElementsByTagName("input")[0];
let h2=document.getElementsByTagName("h2")[0]
let hi=Math.random("1+1","2+2","3+3")




division.onclick=function(event){
    event.preventDefault();
    console.log("/")
}
addition.onclick=function (event){
    console.log("+")
    event.preventDefault();
    console.log(input.value);
    h2.innerHTML=hi;
}
subtration.onclick=function (event){
    event.preventDefault();
    console.log("-")
}
multiplication.onclick=function (event){
    event.preventDefault();
    console.log("*")
}