/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");


const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const convertBtn = document.getElementById("convert-btn");
console.log(convertBtn);
export function convert(){
    const lengthInMeter=(inputEl.value/3.281).toFixed(3);
    const lengthInFeet=(inputEl.value*3.281).toFixed(3);
    const volumeInGallons=(inputEl.value*0.264).toFixed(3);
    const volumeInLiters=(inputEl.value/0.264).toFixed(3);
    const massInPounds=(inputEl.value*2.204).toFixed(3);
    const massInKilograms=(inputEl.value/2.204).toFixed(3);
    
    lengthEl.textContent=`${inputEl.value} meters=${lengthInFeet} feet | ${inputEl.value} feet=${lengthInMeter} meters`;
    volumeEl.textContent=`${inputEl.value} liters=${volumeInGallons} gallons | ${inputEl.value} gallons=${volumeInLiters} liters`;
    massEl.textContent=`${inputEl.value} kilos=${massInPounds} pounds | ${inputEl.value} pounds=${massInKilograms} kilos`;
}

convertBtn.addEventListener("click",convert);
