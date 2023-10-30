let addition=document.getElementById("addition")
let subtraction=document.getElementById("subtraction")
let division=document.getElementById("division")
let multiplication=document.getElementById("multiplication")
let input=document.getElementsByTagName("input")[0];
let h2=document.getElementsByTagName("h2")[0];
let time=document.getElementById("time")
let t=60
let interval
let s=0
let form=document.getElementsByClassName("form")[0]
let score=document.getElementById("score")
let correct
let second
let first
let sign="+"




form.onsubmit=function (event) {
    event.preventDefault()
    console.log(form);
    if (input.value==correct) {
        console.log("yes")
        s=s+1
        score.innerHTML="Score: "+ s
    }
    else{
        console.log("no")
    }
    exercise()
    input.select()
}
function exercise() {
    first=Math.floor(Math.random()*101)
    second = Math.floor(Math.random()*101);
    if (sign=="+") {
        correct= first+second
    }
    if (sign=="-"){
        correct= first-second
    }
    h2.innerHTML=first+sign+second
}



division.onclick=function(event){
    event.preventDefault();
    console.log("/")
}
addition.onclick=function (event){
    event.preventDefault();
    t=60
    s=0
    score.innerHTML="Score: 0"
    clearInterval(interval);
    console.log(input.value);
    sign="+"
    exercise()
    input.disabled=false
    

  interval=  setInterval(() => {
        console.log("+")
        t=t-1
        time.innerHTML="Time:"+t
        if(t===0){
            clearInterval(interval);
            input.disabled=(true)
        }
    }, 1000);

}
subtraction.onclick=function (event){
    event.preventDefault();
    console.log("-")
    t=60
    clearInterval(interval);
    console.log(input.value);
    sign="-"
    exercise()
    input.disabled=false
    

    interval=  setInterval(() => {
        console.log("+")
        t=t-1
        time.innerHTML="Time:"+t
        if(t===0){
            clearInterval(interval);
            input.disabled=(true)
        }
    }, 1000);
}
multiplication.onclick=function (event){
    event.preventDefault();
    console.log("*")
}