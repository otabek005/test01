const btn = document.getElementById("btn");

let isDarkMode = false;

btn.onclick = function() {
    if(isDarkMode == false){
        btn.textContent = "*";
        document.body.style.transition =  "all 0.1s linear";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector(".menu__title").style.backgroundColor ="";
    }else{
        btn.textContent = "😎";
        document.body.style.transition = "all 0.1s linear";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    isDarkMode = !isDarkMode;
};