let positive=document.getElementById("positive")
let negative=document.getElementById("negative")
let bölüm=document.getElementById("bölüm")
let çarpim=document.getElementById("çarpim")


bölüm.onclick=function(event){
    event.preventDefault()
    console.log("/")
}
positive.onclick=function (event){
    console.log("+")
    event.preventDefault();
}
negative.onclick=function (event){
    event.preventDefault();
    console.log("-")
}
çarpim.onclick=function (event){
    event.preventDefoult();
    console.log("*")
}