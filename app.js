const burger = document.querySelector('#menu');
const panel = document.querySelector('.links');
const close = document.querySelectorAll('#close');
const closebtn = document.querySelector('#navclose');



// navigation
burger.addEventListener("click", () => {

    panel.classList.add("active");

});

closebtn.addEventListener('click', () => {
    panel.classList.remove("active");
})
close.forEach(element => {
    element.addEventListener("click", () => {

        panel.classList.remove("active");

    });
});

// animation

