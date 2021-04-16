//Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario,
//mediante inputs, y muestre en pantalla, mediante un alert o console.log, cuál es el mayor de los tres números.

let display=document.getElementById("displayText");
let displayMultiply=document.getElementById("displayMultiply");
let displaySum=document.getElementById("displaySum");
let selectbtnpsh=document.getElementById("select");
let gobtn=document.getElementById("go");
let opt;
document.getElementById("one").value="";
document.getElementById("two").value="";
document.getElementById("three").value="";
document.getElementById("distance").disabled=true;
document.getElementById("time").disabled=true;
document.getElementById("speed").disabled=true;

//let myarray=[firstnumber,secondnumber,thirdnumber,fourthnumber];


function selectbtn(){
    let firstnumber=document.getElementById("one").value;
    firstnumber=parseInt(firstnumber);
    let secondnumber=document.getElementById("two").value;
    secondnumber=parseInt(secondnumber);
    let thirdnumber=document.getElementById("three").value;
    thirdnumber=parseInt(thirdnumber);
    console.log(firstnumber);
    console.log(secondnumber);
    console.log(thirdnumber);
    if(firstnumber>secondnumber && firstnumber>thirdnumber){
        display.innerText="the bigger number is: "+firstnumber;
    }else if (secondnumber>firstnumber && secondnumber>thirdnumber){
        display.innerText="the bigger number is: "+secondnumber;
    }else{
        display.innerText="the bigger number is: "+thirdnumber;
    }
    let product=firstnumber*secondnumber*thirdnumber;
    displayMultiply.innerText="the product is: "+product;
    let sum=firstnumber+secondnumber+thirdnumber;
    displaySum.innerText="the sum is: "+sum;
    alert(sum);
}

//Crea una función que convierta de grados centígrados a Farenheit

document.getElementById("celsius").value="0";

function tempbtn(){
    let celsiusTemp=document.getElementById("celsius").value;
    let faherenheitTemp=(celsiusTemp*9/5)+32;
    let kelvinTemp=celsiusTemp+273.15;
    document.getElementById("fahrenheit").value=faherenheitTemp;
    document.getElementById("kelvin").value=kelvinTemp;
}

//Crea una funcion que calcule el tiempo necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v)

document.getElementById("distance").value="0";
document.getElementById("time").value="0";
document.getElementById("speed").value="0";
submitbtn=document.getElementById("submit");

function calculate(){
    opt = measure.options[measure.selectedIndex].innerText;
    document.getElementById("distance").value="0";
    document.getElementById("time").value="0";
    document.getElementById("speed").value="0";
    if(opt==="Distance"){
        document.getElementById("distance").disabled=true;
        document.getElementById("time").disabled=false;
        document.getElementById("speed").disabled=false;
    }else if(opt==="Time"){
        document.getElementById("time").disabled=true;
        document.getElementById("distance").disabled=false;
        document.getElementById("speed").disabled=false;
    }else{
        document.getElementById("speed").disabled=true;
        document.getElementById("time").disabled=false;
        document.getElementById("distance").disabled=false;
    }
}

function calculateSpeed(){
    opt = measure.options[measure.selectedIndex].innerText;
    if(opt==="Distance"){
        let speedValue=document.getElementById("speed").value;
        let timeValue=document.getElementById("time").value;
        let distanceValue=speedValue*timeValue;
        document.getElementById("distance").value=distanceValue;
    }else if(opt==="Time"){
        speedValue=document.getElementById("speed").value;
        distanceValue=document.getElementById("distance").value;
        timeValue=speedValue/distanceValue;
        document.getElementById("time").value=timeValue;
    }else{
        distanceValue=document.getElementById("distance").value;
        timeValue=document.getElementById("time").value;
        speedValue=distanceValue/timeValue;
        document.getElementById("speed").value=speedValue;
    }
}


selectbtnpsh.addEventListener("click",selectbtn);
tempbtnconvert.addEventListener("click",tempbtn);
submit.addEventListener("click",calculateSpeed);
gobtn.addEventListener("click",calculate);
