
// *******************************Light and dark mode switch******************************************

var icon = document.getElementById("light-dark-icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "./logoAndImgaes/lighmode.png";
    }
    else {
        icon.src = "./logoAndImgaes/moon.png";
    }
}

// *************************************************************************************************