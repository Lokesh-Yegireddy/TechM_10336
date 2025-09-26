
let text=document.getElementById("text-paragraph");
let toggleButton=document.getElementById("toggle-button");
    

toggleButton.addEventListener("click",()=>{
    if(text.style.display==="none" || text.style.display===""){
        text.style.display="block";
        text.textContent="JavaScript is a versatile, high-level programming language that is primarily used for creating dynamic and interactive content on websites.It allows developers to manipulate the Document Object Model (DOM), handle events, and communicate with servers using APIs. JavaScript supports various programming paradigms, including procedural, object-oriented, and functional programming. Modern JavaScript, with the introduction of ES6 and beyond, provides features like arrow functions, promises, async/await,modules, and template literals, making development more efficient and expressive.";
        text.style.marginTop="20px";
        text.style.fontSize="18px";
        text.style.color="#000000ff";
        text.style.fontFamily="Times New Roman, Times, serif";
        toggleButton.textContent="Hide Text";
        return;
    }else
    {    text.style.display="none";
        toggleButton.textContent="Show Text";
        return;
      
    }
    } ); 