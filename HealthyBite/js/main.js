var mobileMenu = document.getElementById("mobile-menu");
var headerNav = document.getElementById("header-nav");
var header = document.getElementById("header");
var headerLogoId = document.getElementById("header-logoId");
var headerLogoId2 = document.getElementById("header-logoId2");
var logoWrap = document.getElementById("logoWrap");
var cartLogoWrap = document.getElementById("cartLogoWrap");


mobileMenu.addEventListener("click", function(locwww){
    locwww.preventDefault();
    headerNav.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    header.classList.toggle("header-scroll");
    if(header.classList.contains("header-scroll")) {
        header.style.boxShadow = "0 13px 8px -10px rgba(0, 0, 0, 0.1)";
        headerLogoId.classList.add("scroll");
        headerLogoId2.classList.add("scroll");
        logoWrap.classList.add("scroll");
        cartLogoWrap.classList.add("scroll");
    }
    else {
        header.style.boxShadow = "none";
        headerLogoId.classList.remove("scroll");
        headerLogoId2.classList.remove("scroll");
        logoWrap.classList.remove("scroll");
        cartLogoWrap.classList.remove("scroll");
    }
});

window.addEventListener("scroll", function() {
    var offs = window.pageYOffset;
    if(offs > 0)
        {
            header.classList.add("header-scroll");
            if(header.classList.contains("header-scroll")) {
              header.style.boxShadow = "0 13px 8px -10px rgba(0, 0, 0, 0.1)";
              headerLogoId.classList.add("scroll");
              headerLogoId2.classList.add("scroll");
              logoWrap.classList.add("scroll");
              cartLogoWrap.classList.add("scroll");
            }
        }
    if(offs == 0)
        {
            header.classList.remove("header-scroll");
            header.style.boxShadow = "none";
            headerLogoId.classList.remove("scroll");
            headerLogoId2.classList.remove("scroll");
            logoWrap.classList.remove("scroll");
            cartLogoWrap.classList.remove("scroll");
            if (mobileMenu.clicked == true){
                headerNav.classList.add("active");
                mobileMenu.classList.add("active");
                header.classList.add("header-scroll");
            }
            else {
                headerNav.classList.remove("active");
                mobileMenu.classList.remove("active");
                header.classList.remove("header-scroll");
            }
        }
});

$('.faq-slider').slick({
  centerMode: true,
  slidesToScroll: 1,
  slidesToShow: 1,
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

$('.contacts-slider').slick({
  centerMode: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: true,
  variableHeight: true,
  arrows:false,
  dots:true,
  infinite: true,
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