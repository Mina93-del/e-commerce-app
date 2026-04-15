const menu = document.getElementById("menu");
const nav = document.getElementById("navbar");

if(menu){
menu.addEventListener('click' , ()=> {
    nav.classList.toggle('active');
})
}
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
        nav.classList.remove("active");
    }
});

    var swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        spacebetween: 20 ,
        breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullests: true ,
    //     clickable: true
    //   },
      autoplay:{
        delay:2500,
      },
      loop: true,
    });