

let counter=0;
let counterDisplay = document.getElementById('counter-display');

let incrementButton = document.getElementById('increment-button');
let decrementButton = document.getElementById('decrement-button');

let resetButton = document.getElementById('reset-button');

window.onload = function() {
    counterDisplay.textContent = counter;
    counterDisplay.style.fontSize = "50px";
    counterDisplay.style.fontWeight = "bold";
    
}

resetButton.addEventListener('click',function(){
    counter=0;
    counterDisplay.textContent = counter;
});

incrementButton.addEventListener('click',function(){
     counter++;
     counterDisplay.textContent = counter;
     counterDisplay.style.color = "black";
     counterDisplay.style.fontSize = "50px";
     counterDisplay.style.fontWeight = "bold"; 
     
});

decrementButton.addEventListener('click',function(){
     counter--;
     counterDisplay.textContent = counter;
});

