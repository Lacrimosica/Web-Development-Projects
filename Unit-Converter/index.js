
let kilos;
let pounds;
let meters;
let feet;
let liters;
let gallons;



function metersToFeet(n){
    return n*3.28084;
}

function feetToMeters(n){
    return n/3.28084;
}

function litersToGallons(n){
    return n /4.54609;
}

function gallonsTOLiters(n){
    return n *4.54609;
}

function kilogramsToPounds(n){
    return n *2.20462;
}
function poundsTokilograms(n){
    return n /2.20462;
}




function calculate(){
    let lengthEl = document.getElementById("length-el");
    let volumeEl = document.getElementById("volume-el");
    let massEl = document.getElementById("mass-el");
    
    let inputEl = document.getElementById("input-element").value;
    
    kilos = poundsTokilograms(inputEl).toFixed(3);
    
    pounds = kilogramsToPounds(inputEl).toFixed(3);
    
    console.log(inputEl + " :  " + kilos + "K | "  + pounds + "lb");
    
    liters = gallonsTOLiters(inputEl).toFixed(3);
    gallons = litersToGallons(inputEl).toFixed(3);
    meters = feetToMeters(inputEl).toFixed(3);
    feet = metersToFeet(inputEl).toFixed(3);
 
    
    lengthEl.textContent = inputEl + " meters = " + feet +" feet | " + inputEl + " feet = " + meters + " meters";
    
    volumeEl.textContent = inputEl + " liters = " + gallons +" gallons | " + inputEl + " gallons = " + liters +" liters"; 
 
    massEl.textContent = inputEl + " kilos = " + pounds +" pounds | " + inputEl + " pounds = " + kilos + " kilos";
}

