let button=document.querySelector("#counter-button");
let clickValue=document.querySelector("#Click-value");
let reset=document.querySelector("#reset");
let count=0;

window.onload=function(){
    clickValue.textContent="0";
}

button.addEventListener('click',()=>{
   count++;
   clickValue.textContent=count;
   changeButtonColor();

})

reset.addEventListener('click',()=>{
    count=0;
    clickValue.textContent=count;
    button.style.backgroundColor="#082858";
})


function changeButtonColor() {
    // Generate random RGB
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Correctly set button color
    button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}
