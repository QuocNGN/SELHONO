// $(document).ready(function () {
//     $(window).scroll(function () {
//         console.log($(window).scrollTop());
//         if ($(window).scrollTop() > 200) {
//             $(".search").addClass("sticky");
//         } else {
//             $(".search").removeClass("sticky");
//         }
//     });
// });


// /* -------------------------------------------------------------
//         ================ FAQ - accordion Toggle 
// -----------------------------------------------------------------*/
// const faqs = document.querySelectorAll('.faq');

// faqs.forEach((faq) => {
//     faq.addEventListener("click", () => {
//         // Loại bỏ active từ tất cả các phần tử
//         faqs.forEach((otherFaq) => {
//             if (otherFaq !== faq) {
//                 otherFaq.classList.remove("active");
//             }
//         });

//         // Toggle active cho phần tử được nhấp vào
//         faq.classList.toggle("active");
//     });
// });


// /* -------------------------------------------------------------
//         ================ TeamSingle - accordion
// -----------------------------------------------------------------*/
// let accordion = document.querySelectorAll(".QnA-accordion-item");

// function toggleAccordion(item) {
//     accordion.forEach(eachItem => {
//         eachItem.classList.remove("active");
//         let eachSymbol = eachItem.querySelector(".symbol");
//         if (eachSymbol) {
//             eachSymbol.innerHTML = '<i class="bi bi-plus"></i>';
//         }
//     });

//     item.classList.add("active");
//     console.log("click it");

//     let symbol = item.querySelector(".symbol");
//     if (symbol) {
//         symbol.innerHTML = '<i class="bi bi-dash"></i>';
//     }
// }

// accordion.forEach(item => {
//     item.addEventListener("click", () => {
//         toggleAccordion(item);
//     });
// });





// /* -------------------------------------------------------------
//         ================ ProjectDetail - Zoom Image
// -----------------------------------------------------------------*/
// let zoom = document.querySelector('.zoom');
// let imgZoom = document.getElementById('imgZoom');
// let iconZoom = document.querySelector('.icon-zoom');
// zoom.addEventListener('mousemove', (event) => {
//     imgZoom.style.opacity = 1;
//     iconZoom.style.opacity = 0;

//     let positionPx = event.x - zoom.getBoundingClientRect().left;
//     let positionX = (positionPx / zoom.offsetWidth) * 100;

//     let positionPy = event.y - zoom.getBoundingClientRect().top;
//     let positionY = (positionPy / zoom.offsetHeight) * 100;

//     imgZoom.style.setProperty('--zoom-x', positionX + '%');
//     imgZoom.style.setProperty('--zoom-y', positionY + '%');

//     let transformX = -(positionX - 50) / 3.5;
//     let transformY = - (positionY - 50) / 3.5;
//     imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
// })
// zoom.addEventListener('mouseout', () => {
//     imgZoom.style.opacity = 0;
//     iconZoom.style.opacity = 1;
// })


// /* -------------------------------------------------------------
//         ================ Slider: About Us
// -----------------------------------------------------------------*/
// let slider = document.querySelector('.slider .list');
// let itemsList = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let dotsSlide = document.querySelectorAll('.slider .dots li');

// let lengthItems = itemsList.length - 1;
// let activeDemo = 0;
// next.onclick = function () {
//     active = active + 1 <= lengthItems ? activeDemo + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function () {
//     activeDemo = activeDemo - 1 >= 0 ? activeDemo - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(() => { next.click() }, 3000);
// function reloadSlider() {
//     slider.style.left = -items[activeDemo].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li.active');
//     activeDemo.classList.remove('active');
//     dotsSlide[activeDemo].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(() => { next.click() }, 3000);
// }

// dotsSlide.forEach((li, key) => {
//     li.addEventListener('click', () => {
//         activeDemo = key;
//         reloadSlider();
//     })
// })

// window.onresize = function (event) {
//     reloadSlider();
// };

// /* -------------------------------------------------------------
//         ================ ServicesSingle Page - Model Video
// -----------------------------------------------------------------*/
// let btnPreview = document.querySelector('.icon-play');
// let clip = document.querySelector('.clip');
// let btnClose = document.querySelector('.closeBtn');
// let video = document.querySelector('video');
// btnPreview.onclick = function () {
//     btnPreview.classList.add('active');
//     clip.classList.add('active');
//     video.play();
//     video.currentTime = 0;
// }
// btnClose.onclick = function () {
//     btnPreview.classList.remove('active');
//     clip.classList.remove('active');
//     video.pause();
// }


// let listSlide = document.querySelector('.accordion .slide-wrapper');
// let items = document.querySelectorAll('.accordion .slide-wrapper .slide');
// let dots = document.querySelectorAll('.accordion .dots ');
// let prevBtn = document.getElementById('prev');
// let nextBtn = document.getElementById('next');
// let active = 0;

// nextBtn.onclick = function () {
//     active += 1;
//     reloadSlider();
// }

// function reloadSlider() {
//     let checkLeft = items[active].offsetLeft;
//     listSlide.style.left = -checkLeft + 'px';

// }


// /* -------------------------------------------------------------
//         ================ Project Page - tab Filter
// -----------------------------------------------------------------*/
// const name_item = document.querySelectorAll('name_item');
// const element_room = document.querySelectorAll('.element_room');
// const btn_filter_tab = document.querySelectorAll('.filter_button .btn-filter-tab');

// Array.from(btn_filter_tab).forEach(function (element) {
//     element.addEventListener('click', function (event) {
//         console.log(event.target);
//         for (let i = 0; i < btn_filter_tab.length; i++) {
//             btn_filter_tab[i].classList.remove('active');
//         }
//         this.classList.add('active');

//         let name_filter = element.dataset.filter;
//         Array.from(element_room).forEach(function (ele) {
//             if (ele.dataset.item === name_filter || name_filter === 'all') {
//                 ele.style.display = 'block';
//                 console.log(ele.dataset.item);
//             } else {
//                 ele.style.display = 'none';
//             }
//         })
//     })
// })


// /* -------------------------------------------------------------
//         ================ Home Index - Search Dropdown, Sidebar
// -----------------------------------------------------------------*/
// const nav = document.querySelector("nav"),
//     searchToggle = document.querySelector(".searchToggle"),
//     sidebarOpen = document.querySelector(".sidebarOpen"),
//     siderbarClose = document.querySelector(".siderbarClose");

// // js code to toggle search box
// searchToggle.addEventListener("click", () => {
//     searchToggle.classList.toggle("active");
// });


// //   js code to toggle sidebar
// sidebarOpen.addEventListener("click", () => {
//     nav.classList.add("active");
// });

// body.addEventListener("click", e => {
//     let clickedElm = e.target;

//     if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
//         nav.classList.remove("active");
//     }
// });

$(document).ready(function () {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 200) {
            $(".header nav").addClass("sticky");
            $(".scroll-top").addClass("active");
        } else {
            $(".header nav").removeClass("sticky");
            $(".scroll-top").removeClass("active");
        }
    });

    /* -------------------------------------------------------------
        ================ FAQ - accordion Toggle 
    -----------------------------------------------------------------*/
    const faqs = $('.faq');

    faqs.on("click", function () {
        const clickedFaq = $(this);
        faqs.not(clickedFaq).removeClass("active");
        clickedFaq.toggleClass("active");
    });

    /* -------------------------------------------------------------
        ================ About Us - Slider
    -----------------------------------------------------------------*/
    // let slider = document.querySelector('.slider .list');
    // let items = document.querySelectorAll('.slider .list .item');
    // let next = document.getElementById('next');
    // let prev = document.getElementById('prev');
    // let dots = document.querySelectorAll('.slider .dots li');

    // let lengthItems = items.length - 1;
    // let active = 0;
    // next.onclick = function () {
    //     active = active + 1 <= lengthItems ? active + 1 : 0;
    //     reloadSlider();
    // }
    // prev.onclick = function () {
    //     active = active - 1 >= 0 ? active - 1 : lengthItems;
    //     reloadSlider();
    // }
    // let refreshInterval = setInterval(() => { next.click() }, 3000);
    // function reloadSlider() {
    //     slider.style.left = -items[active].offsetLeft + 'px';
    //     // 
    //     let last_active_dot = document.querySelector('.slider .dots li.active');
    //     last_active_dot.classList.remove('active');
    //     dots[active].classList.add('active');

    //     clearInterval(refreshInterval);
    //     refreshInterval = setInterval(() => { next.click() }, 3000);


    // }

    // dots.forEach((li, key) => {
    //     li.addEventListener('click', () => {
    //         active = key;
    //         reloadSlider();
    //     })
    // })
    // window.onresize = function (event) {
    //     reloadSlider();
    // };
    /* -------------------------------------------------------------
        ================ TeamSingle - accordion
    -----------------------------------------------------------------*/
    let accordion = $(".QnA-accordion-item");

    function toggleAccordion(item) {
        accordion.not(item).removeClass("active").find(".symbol").html('<i class="bi bi-plus"></i>');
        item.addClass("active").find(".symbol").html('<i class="bi bi-dash"></i>');
        console.log("click it");
    }

    accordion.on("click", function () {
        toggleAccordion($(this));
    });

    /* -------------------------------------------------------------
        ================ ProjectDetail - Zoom Image
    -----------------------------------------------------------------*/
    let zoom = $('.zoom');
    let imgZoom = $('#imgZoom');
    let iconZoom = $('.icon-zoom');

    zoom.on('mousemove', function (event) {
        imgZoom.css('opacity', 1);
        iconZoom.css('opacity', 0);

        let positionPx = event.clientX - zoom.offset().left;
        let positionX = (positionPx / zoom.width()) * 100;

        let positionPy = event.clientY - zoom.offset().top;
        let positionY = (positionPy / zoom.height()) * 100;

        imgZoom.css('--zoom-x', positionX + '%');
        imgZoom.css('--zoom-y', positionY + '%');

        let transformX = -(positionX - 50) / 3.5;
        let transformY = - (positionY - 50) / 3.5;
        imgZoom.css('transform', `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`);
    });

    zoom.on('mouseout', function () {
        imgZoom.css('opacity', 0);
        iconZoom.css('opacity', 1);
    });

    // ... (Các phần còn lại của mã JavaScript)

});

/* -------------------------------------------------------------
    ================ Slider: About Us
-----------------------------------------------------------------*/
let slider = $('.slider .list');
let itemsList = $('.slider .list .item');
let next = $('#next');
let prev = $('#prev');
let dotsSlide = $('.slider .dots li');

let lengthItems = itemsList.length - 1;
let activeDemo = 0;
let active = 0;

next.on('click', function () {
    active = active + 1 <= lengthItems ? activeDemo + 1 : 0;
    reloadSlider();
});

prev.on('click', function () {
    activeDemo = activeDemo - 1 >= 0 ? activeDemo - 1 : lengthItems;
    reloadSlider();
});

let refreshInterval = setInterval(() => { next.click(); }, 3000);

function reloadSlider() {
    slider.css('left', -itemsList[activeDemo].offsetLeft + 'px');

    let lastActiveDot = $('.slider .dots li.active');
    lastActiveDot.removeClass('active');
    dotsSlide[activeDemo].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click(); }, 3000);
}

dotsSlide.on('click', function () {
    activeDemo = dotsSlide.index(this);
    reloadSlider();
});

$(window).on('resize', function (event) {
    reloadSlider();
});

/* -------------------------------------------------------------
    ================ ServicesSingle Page - Model Video
-----------------------------------------------------------------*/
let btnPreview = $('.icon-play');
let clip = $('.clip');
let btnClose = $('.closeBtn');
let video = $('video');

btnPreview.on('click', function () {
    btnPreview.addClass('active');
    clip.addClass('active');
    video.get(0).play();
    video.get(0).currentTime = 0;
});

btnClose.on('click', function () {
    btnPreview.removeClass('active');
    clip.removeClass('active');
    video.get(0).pause();
});

/* -------------------------------------------------------------
    ================ Project Page - tab Filter
-----------------------------------------------------------------*/
const nameItem = $('name_item');
const elementRoom = $('.element_room');
const btnFilterTab = $('.filter_button .btn-filter-tab');

btnFilterTab.on('click', function (event) {
    console.log(event.target);
    btnFilterTab.removeClass('active');
    $(this).addClass('active');

    let nameFilter = $(this).data('filter');
    elementRoom.each(function () {
        if ($(this).data('item') === nameFilter || nameFilter === 'all') {
            $(this).css('display', 'block');
            console.log($(this).data('item'));
        } else {
            $(this).css('display', 'none');
        }
    });
});

/* -------------------------------------------------------------
    ================ Home Index - Search Dropdown, Sidebar
-----------------------------------------------------------------*/
const nav = $('nav');
const searchToggle = $('.searchToggle');
const sidebarOpen = $('.sidebarOpen');
const body = $('body');

searchToggle.on('click', function () {
    searchToggle.toggleClass('active');
});

sidebarOpen.on('click', function () {
    nav.addClass('active');
});

body.on('click', function (e) {
    let clickedElm = $(e.target);

    if (!clickedElm.hasClass('sidebarOpen') && !clickedElm.hasClass('menu')) {
        nav.removeClass('active');
    }
});
