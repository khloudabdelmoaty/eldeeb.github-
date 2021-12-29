// ============  Navbar responsive  ============= //
const bars = document.querySelector('.nav__bars');
const sideBar = document.querySelector('.side__bar');
const closeSideBar = document.querySelector('.close__sidebar');
showSidebar = () => sideBar.classList.add('nav__active');
hideSidebar = () => sideBar.classList.remove('nav__active');

bars.addEventListener('click' , showSidebar )
closeSideBar.addEventListener('click' , hideSidebar )


//===== Initialize Swiper ====//
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

//============= owl carousel =============// 
var owl = $('.blog__carousel');
owl.owlCarousel({
    loop : true,
    nav : true,
    margin : 10,
    pagination:true,
    responsive : {
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:2
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



var owl2 = $('.team__carousel');
owl2.owlCarousel({
    loop : true,
    nav : true,
    margin : 10,
    responsive : {
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:4
        }
    }
});
owl2.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl2.trigger('next.owl');
    } else {
        owl2.trigger('prev.owl');
    }
    e.preventDefault();
});

// Our Partner Carousel 
$('.partner__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    pagination:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
//==== Consultation request Model ====//

const consultRequest = document.querySelector('.Consultation__request');
const openRequest = document.getElementById('open__request');
const closeRequest = document.querySelector('.close__request')

openRequest.addEventListener( 'click' , () => consultRequest.style.display = "flex");
closeRequest.addEventListener( 'click' , () => consultRequest.style.display = "none");

