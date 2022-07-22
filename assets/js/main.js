let img = document.getElementsByTagName("img");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function() {
    for (var i = 0; i < img.length; i++) {
        img[i].classList.replace("d-block", "d-none");
    }
    img[0].classList.replace("d-none", "d-block");
    btn1.disabled = true;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
});

btn2.addEventListener("click", function() {
    for (var i = 0; i < img.length; i++) {
        img[i].classList.replace("d-block", "d-none");
    }
    img[1].classList.replace("d-none", "d-block");
    btn1.disabled = false;
    btn2.disabled = true;
    btn3.disabled = false;
    btn4.disabled = false;
});

btn3.addEventListener("click", function() {
    for (var i = 0; i < img.length; i++) {
        img[i].classList.replace("d-block", "d-none");
    }
    img[2].classList.replace("d-none", "d-block");
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = true;
    btn4.disabled = false;
});

btn4.addEventListener("click", function() {
    for (var i = 0; i < img.length; i++) {
        img[i].classList.replace("d-block", "d-none");
    }
    img[3].classList.replace("d-none", "d-block");
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = true;
});