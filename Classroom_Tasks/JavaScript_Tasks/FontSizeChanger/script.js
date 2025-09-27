let defaultFontSize=16;


let text=document.querySelector('#My-Text');
let increaseSize=document.querySelector('#increment-button');
let decreaseSize=document.querySelector('#decrement-button');
let reset=document.querySelector('#reset');

increaseSize.addEventListener('click',()=>{
   defaultFontSize=defaultFontSize+5;
    text.style.fontSize=defaultFontSize+ "px";
});

decreaseSize.addEventListener('click',()=>{
     defaultFontSize=defaultFontSize-5;
    text.style.fontSize=defaultFontSize+ "px";
});

reset.addEventListener('click',()=>{
    
    defaultFontSize=16;
      text.style.fontSize=defaultFontSize+ "px";

});