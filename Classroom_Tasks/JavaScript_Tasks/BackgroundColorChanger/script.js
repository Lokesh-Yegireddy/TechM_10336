let heading = document.getElementById("heading");
let onClickBtn = document.getElementById("btn");


window.onload = () => {
    document.body.style.backgroundColor = "white";
    heading.style.color = "#063688"; // blue initially
};

onClickBtn.addEventListener("click", () => {
    // Generate random RGB
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


    // Change heading color based on background brightness
    if(document.body.style.backgroundColor === "white") {
        heading.style.color = "#063688"; // blue
    } else {
        heading.style.color = "white"; // white
    }

});
