let img=document.getElementById("google-logo");

let btn=document.getElementById("changeButton");

btn.addEventListener('click',()=>{
    if(img.src.includes("https://pnclogosofficial.s3.us-west-2.amazonaws.com/2016/12/02085143/The-evolution-of-Google-logos-through-the-years.jpg"))
    {
        img.src="https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg"
    }else{
        img.src="https://pnclogosofficial.s3.us-west-2.amazonaws.com/2016/12/02085143/The-evolution-of-Google-logos-through-the-years.jpg";
    }
})