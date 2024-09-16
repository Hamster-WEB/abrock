var navLinkM = document.getElementById("nav-linkM");
var navLinkA = document.getElementById("nav-linkA");
var navLinkW = document.getElementById("nav-linkW");
var navLinkC = document.getElementById("nav-linkC");
var main = document.getElementById("main");
var about = document.getElementById("about");
var myWork = document.getElementById("myWork");
var contactMe = document.getElementById("contactMe");
var mainBtn = document.getElementById("mainBtn");
var header = document.getElementById("headID");
var mobileMenu = document.getElementById("mobile-menu");
var headerNav = document.getElementById("header-nav");

$('.myWorks-wrapper').slick({
  centerMode: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  variableWidth: true,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

mainBtn.addEventListener("click", function(locwww){
    locwww.preventDefault();
    window.scroll(
    {
        left: 0,
        top: contactMe.offsetTop - header.clientHeight,
        behavior: 'smooth'
    });
});

mobileMenu.addEventListener("click", function(locwww){
    locwww.preventDefault();
    headerNav.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

navLinkM.addEventListener("click", function(locwww){
    locwww.preventDefault();
    navLinkM.classList.add("active");
    navLinkA.classList.remove("active");
    navLinkW.classList.remove("active");
    navLinkC.classList.remove("active");
    window.scroll(
    {
        left: 0,
        top: main.offsetTop,
        behavior: 'smooth'
    });
});

navLinkA.addEventListener("click", function(locwww){
    locwww.preventDefault();
    navLinkM.classList.remove("active");
    navLinkA.classList.add("active");
    navLinkW.classList.remove("active");
    navLinkC.classList.remove("active");
    window.scroll(
    {
        left: 0,
        top: about.offsetTop - header.clientHeight,
        behavior: 'smooth'
    });
});

navLinkW.addEventListener("click", function(locwww){
    locwww.preventDefault();
    navLinkM.classList.remove("active");
    navLinkA.classList.remove("active");
    navLinkW.classList.add("active");
    navLinkC.classList.remove("active");
    window.scroll(
    {
        left: 0,
        top: myWork.offsetTop - header.clientHeight,
        behavior: 'smooth'
    });
});

navLinkC.addEventListener("click", function(locwww){
    locwww.preventDefault();
    navLinkM.classList.remove("active");
    navLinkA.classList.remove("active");
    navLinkW.classList.remove("active");
    navLinkC.classList.add("active");
    window.scroll(
    {
        left: 0,
        top: contactMe.offsetTop - header.clientHeight,
        behavior: 'smooth'
    });
});

var massRow = document.getElementsByClassName("secJS"); // Массив секций
var navLink = document.getElementsByClassName("nav-link"); // Массив ссылок

window.onscroll = function()
{
    var scrollDist = window.scrollY;

    if(scrollDist > 0)
    {
      for(let j = 0; j < massRow.length; j++)
      {
        if(scrollDist + header.clientHeight >= massRow[j].offsetTop && scrollDist <= massRow[j].offsetTop + massRow[j].clientHeight)
        {
          for(let i = 0; i < navLink.length; i++)
          {
            navLink[i].classList.remove("active");
          }
          navLink[j].classList.add("active");
        }
      }
    }
};