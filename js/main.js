$(document).ready(function () {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 200) {
            $(".search").addClass("sticky");
        } else {
            $(".search").removeClass("sticky");
        }
    });
});

function changeColor(element) {
    // Lấy tất cả các phần tử có lớp "areaRoom-design-item"
    var items = document.querySelectorAll(".areaRoom-design-item");

    // Loại bỏ lớp "selected" từ tất cả các phần tử
    items.forEach(function (item) {
        item.classList.remove("selected");
        item.querySelector(".jsBtnSelected").src = "img/icon/btnNextCirle.svg";
    });

    // Thêm lớp "selected" cho phần tử được click
    element.classList.add("selected");
    element.querySelector(".jsBtnSelected").src = "img/icon/btnNextCircleActive.svg";
}


/* -------------------------------------------------------------
        ================ Project Page - tab Filter
-----------------------------------------------------------------*/
const name_item = document.querySelectorAll('name_item');
const element_room = document.querySelectorAll('.element_room');
const btn_filter_tab = document.querySelectorAll('.filter_button .btn-filter-tab');

Array.from(btn_filter_tab).forEach(function (element) {
    element.addEventListener('click', function (event) {
        console.log(event.target);
        for (let i = 0; i < btn_filter_tab.length; i++) {
            btn_filter_tab[i].classList.remove('active');
        }
        this.classList.add('active');

        let name_filter = element.dataset.filter;
        Array.from(element_room).forEach(function (ele) {
            if (ele.dataset.item === name_filter || name_filter === 'all') {
                ele.style.display = 'block';
                console.log(ele.dataset.item);
            } else {
                ele.style.display = 'none';
            }
        })
    })
})

/* -------------------------------------------------------------
        ================ TeamSingle - accordion
-----------------------------------------------------------------*/
let accordion = document.querySelectorAll(".QnA-accordion-item");

function toggleAccordion(item) {
    accordion.forEach(eachItem => {
        eachItem.classList.remove("active");
        let eachSymbol = eachItem.querySelector(".symbol");
        if (eachSymbol) {
            eachSymbol.innerHTML = '<i class="bi bi-plus"></i>';
        }
    });

    item.classList.add("active");
    console.log("click it");

    let symbol = item.querySelector(".symbol");
    if (symbol) {
        symbol.innerHTML = '<i class="bi bi-dash"></i>';
    }
}

accordion.forEach(item => {
    item.addEventListener("click", () => {
        toggleAccordion(item);
    });
});


/* -------------------------------------------------------------
        ================ FAQ - accordion Toggle 
-----------------------------------------------------------------*/
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        // Loại bỏ active từ tất cả các phần tử
        faqs.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });

        // Toggle active cho phần tử được nhấp vào
        faq.classList.toggle("active");
    });
});


/* -------------------------------------------------------------
        ================ ProjectDetail - Zoom Image
-----------------------------------------------------------------*/
let zoom = document.querySelector('.zoom');
let imgZoom = document.getElementById('imgZoom');
let iconZoom = document.querySelector('.icon-zoom');

zoom.addEventListener('mousemove', (event) => {
    imgZoom.style.opacity = 1;
    iconZoom.style.opacity = 0;

    let positionPx = event.x - zoom.getBoundingClientRect().left;
    let positionX = (positionPx / zoom.offsetWidth) * 100;

    let positionPy = event.y - zoom.getBoundingClientRect().top;
    let positionY = (positionPy / zoom.offsetHeight) * 100;

    imgZoom.style.setProperty('--zoom-x', positionX + '%');
    imgZoom.style.setProperty('--zoom-y', positionY + '%');

    let transformX = -(positionX - 50) / 3.5;
    let transformY = - (positionY - 50) / 3.5;
    imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
})
zoom.addEventListener('mouseout', () => {
    imgZoom.style.opacity = 0;
    iconZoom.style.opacity = 1;
})


/* -------------------------------------------------------------
        ================ Slider: About Us
-----------------------------------------------------------------*/
let slider = document.querySelector('.slider .list');
let itemsList = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dotsSlide = document.querySelectorAll('.slider .dots li');

let lengthItems = itemsList.length - 1;
let activeDemo = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? activeDemo + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    activeDemo = activeDemo - 1 >= 0 ? activeDemo - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[activeDemo].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    activeDemo.classList.remove('active');
    dotsSlide[activeDemo].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dotsSlide.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        activeDemo = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


/* -------------------------------------------------------------
        ================ ServicesSingle Page - Model Video
-----------------------------------------------------------------*/
let btnPreview = document.querySelector('.icon-play');
let clip = document.querySelector('.clip');
let btnClose = document.querySelector('.closeBtn');
let video = document.querySelector('video');
btnPreview.onclick = function () {
    btnPreview.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
}
btnClose.onclick = function () {
    btnPreview.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
}


let listSlide = document.querySelector('.accordion .slide-wrapper');
let items = document.querySelectorAll('.accordion .slide-wrapper .slide');
let dots = document.querySelectorAll('.accordion .dots ');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let active = 0;

nextBtn.onclick = function() {
    active += 1;
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    listSlide.style.left = -checkLeft + 'px';
    
}

// let zoom = document.querySelector('.zoom');
// let imgZoom = document.getElementById('imgZoom');

// zoom.addEventListener('mousemove', (event) => {
//     imgZoom.style.opacity = 1;
    
//     let positionPx = event.x - zoom.getBoundingClientRect().left;
//     let positionX = (positionPx / zoom.offsetWidth) * 100;

//     let positionPy = event.y - zoom.getBoundingClientRect().top;
//     let positionY = (positionPy / zoom.offsetHeight) * 100;

//     let transformX = -(positionX - 50) / 3.5;
//     let transformY = - (positionY - 50) / 3.5;

//     imgZoom.style.clipPath = `circle(100px at ${positionX}% ${positionY}%)`;
//     imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
// });

// zoom.addEventListener('mouseout', () => {
//     imgZoom.style.opacity = 0;
// });

