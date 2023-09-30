const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialChars=["%","*","/","-","+","="];
let output=" ";

// Define function  to calculate based on button clicked.
const calculate=(btnvalue)=>{ 
    if(btnvalue==="=" && output !== ""){
        //if output has '%', replace with '/100' before evaluating.
        output =eval(output.replace("%","/100"));
    }
    else if(btnvalue=== "AC"){
            output=" ";
        }
        else if(btnvalue==="DEL"){
            // If DEL button is clicked, remove the last character from the output.
            output= output.toString().slice(0,-1);
        }
        else{
            // if the output is empty and button is specialChars then return
            if(output=== " " && specialChars.includes(btnvalue)) return;
output += btnvalue;
        }
    display.value= output;
};


buttons.forEach((buttons) =>{
 //button click listener calls calculato() with dataset value as argument.
 buttons.addEventListener("click",(e)=>calculate(e.target.dataset.value));
});
 