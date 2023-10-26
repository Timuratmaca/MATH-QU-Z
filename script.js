let addition=document.getElementById("addition")
let subtration=document.getElementById("subtration")
let division=document.getElementById("division")
let multiplication=document.getElementById("multiplication")
let input=document.getElementsByTagName("input")[0];
let h2=document.getElementsByTagName("h2")[0];
let time=document.getElementById("time")
let t=10
let interval
let s=0
let score=document.getElementById("score")






division.onclick=function(event){
    event.preventDefault();
    console.log("/")
}
addition.onclick=function (event){
    event.preventDefault();
    console.log(input.value);
    h2.innerHTML=+Math.floor(Math.random()*11)+"+"+Math.floor(Math.random()*11);
    interval= setInterval(()=>0)
  interval=  setInterval(() => {
        // time.innerHTML="time="
        console.log("+")
        t=t-1
        time.innerHTML="Time:"+t
        if(t===0){
            clearInterval(interval);
        }
    }, 1000);
    score.innerHTML=score+1

}
subtration.onclick=function (event){
    event.preventDefault();
    console.log("-")
}
multiplication.onclick=function (event){
    event.preventDefault();
    console.log("*")
}