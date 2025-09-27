const likeButton = document.getElementById('like-button');
const icon = likeButton.querySelector('.material-icons');
let toggleValue = document.querySelector('#toggle-value');


window.onload=function(){
    toggleValue.style.display="none";
}

likeButton.addEventListener('click', () => {
    toggleValue.style.display="block";
    likeButton.classList.toggle('liked');

    // Change icon between outline and filled
    if (likeButton.classList.contains('liked')) {
        icon.textContent = 'favorite'; // filled heart
        toggleValue.textContent = "Liked!";
        toggleValue.style.color = "white";
        toggleValue.style.backgroundColor = "pink"; // corrected property name
    } else {
        icon.textContent = 'favorite_border'; // outline heart
        toggleValue.textContent = "UnLiked!";
        toggleValue.style.color = "#333";
        toggleValue.style.backgroundColor = "#f0f0f0";
    }
});
