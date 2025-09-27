
let result=document.querySelector("#result");
let form=document.querySelector("#basic-form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   result.style.display = "block";

 let fullName=document.querySelector("#fullName").value;
let email=document.querySelector("#email").value;
let phone=document.querySelector("#phone").value;
let dob=document.querySelector("#dob").value;



    result.innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
    `;

    form.reset();
});




