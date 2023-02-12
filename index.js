
// *******************************Light and dark mode switch******************************************

var icon = document.getElementById("light-dark-icon");
var logo = document.getElementById("logo");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "./logoAndImgaes/dark-mode.png";
        logo.src = "./logoAndImgaes/Portfolio_logo.png";
    }
    else {
        icon.src = "./logoAndImgaes/lighmode.png";
        logo.src = "./logoAndImgaes/portlightLogo.png";

    }
}

// *************************************************************************************************

// *********************SIdebar icon menu operner************************************

let sidebar = document.getElementById("sidebar");

function myFunction(x) {

    x.classList.toggle("change");
    if(x.classList.contains("change")){
        sidebar.style.visibility = "visible";
        sidebar.style.animation = "sidebar-load 400ms ease-in";


    }else {
        sidebar.style.animation = "sidebar-load 400ms ease-out";
        sidebar.style.visibility = "hidden";

    }
  }

//   *******************************************************************************************

  //********************* */ back to top button functionality********************************

  let btn = document.querySelector("#backToTop");
  window.addEventListener("scroll", () => {

      if (window.scrollY > 200) {
          btn.classList.add("active");
      } else {
          btn.classList.remove("active");
      }
  })

  const backToTop = () => {
      document.body.scrollTop = 0;  // For Safari
      document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
      //  ( documentElement  or  scrollingElement )
  }

  // ******************************************************************************************

//*********************************side nav bar active inactive************************************************ */

let sidebarActive = document.querySelector("#sidebar-nav-menu-box ul li");

sidebarActive.onclick = ()=>{
    if(!sidebarActive.classList.contains("active")){
        sidebarActive.classList.add("active");
    }
    else{
        sidebarActive.classList.remove("active")
    }
}