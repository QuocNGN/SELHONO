const menuBtn = document.getElementById('menuToggle');
const menuCloseBtn = document.querySelector('.siderbarClose');
const showMenuElement = document.querySelector('.wrapper-nav');

menuBtn.addEventListener('click', () => {
    showMenuElement.classList.add('active');
    document.body.classList.add('disable-scroll'); // Thêm lớp để tắt scrolling
});

menuCloseBtn.addEventListener('click', () => {
    showMenuElement.classList.remove('active');
    document.body.classList.remove('disable-scroll'); // Xóa lớp để bật scrolling lại
});


$(document).ready(function () {
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 200) {
            $(".header nav").addClass("sticky");
            $(".scroll-top").addClass("active");
        } else {
            $(".header nav").removeClass("sticky");
            $(".scroll-top").removeClass("active");
        }
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
    // let zoom = $('.zoom');
    // let imgZoom = $('#imgZoom');
    // let iconZoom = $('.icon-zoom');

    // zoom.on('mousemove', function (event) {
    //     imgZoom.css('opacity', 1);
    //     iconZoom.css('opacity', 0);

    //     let positionPx = event.clientX - zoom.offset().left;
    //     let positionX = (positionPx / zoom.width()) * 100;

    //     let positionPy = event.clientY - zoom.offset().top;
    //     let positionY = (positionPy / zoom.height()) * 100;

    //     imgZoom.css('--zoom-x', positionX + '%');
    //     imgZoom.css('--zoom-y', positionY + '%');

    //     let transformX = -(positionX - 50) / 3.5;
    //     let transformY = - (positionY - 50) / 3.5;
    //     imgZoom.css('transform', `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`);
    // });

    // zoom.on('mouseout', function () {
    //     imgZoom.css('opacity', 0);
    //     iconZoom.css('opacity', 1);
    // });
    const btnShowPopUp = document.querySelector('.icon-zoom');
    const btnClosePopUp = document.querySelector('.close-btn');
    const popUp = document.querySelector('.popUp-container');
    btnShowPopUp.addEventListener('click', () => {
        popUp.classList.add('active');
    })
    btnClosePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    })
});



/* -------------------------------------------------------------
    ================ Slider: About Us
-----------------------------------------------------------------*/
// let slider = $('.slider .list');
// let itemsList = $('.slider .list .item');
// let next = $('#next');
// let prev = $('#prev');
// let dotsSlide = $('.slider .dots li');

// let lengthItems = itemsList.length - 1;
// let activeDemo = 0;
// let active = 0;

// next.on('click', function () {
//     active = active + 1 <= lengthItems ? activeDemo + 1 : 0;
//     reloadSlider();
// });

// prev.on('click', function () {
//     activeDemo = activeDemo - 1 >= 0 ? activeDemo - 1 : lengthItems;
//     reloadSlider();
// });

// let refreshInterval = setInterval(() => { next.click(); }, 3000);

// function reloadSlider() {
//     slider.css('left', -itemsList[activeDemo].offsetLeft + 'px');

//     let lastActiveDot = $('.slider .dots li.active');
//     lastActiveDot.removeClass('active');
//     dotsSlide[activeDemo].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(() => { next.click(); }, 3000);
// }

// dotsSlide.on('click', function () {
//     activeDemo = dotsSlide.index(this);
//     reloadSlider();
// });

// $(window).on('resize', function (event) {
//     reloadSlider();
// });

/* -------------------------------------------------------------
    ================ Project Page - tab Filter
-----------------------------------------------------------------*/
const nameItem = $('name_item');
const elementRoom = $('.element_room');
const btnFilterTab = $('.filter_button .btn-filter-tab');

btnFilterTab.on('click', function (event) {
    // console.log(event.target);
    btnFilterTab.removeClass('active');
    $(this).addClass('active');

    let nameFilter = $(this).data('filter');
    elementRoom.each(function () {
        if ($(this).data('item') === nameFilter || nameFilter === 'all') {
            $(this).css('display', 'block');
            // console.log($(this).data('item'));
        } else {
            $(this).css('display', 'none');
        }
    });
});

/* -------------------------------------------------------------
    ================ ServicesSingle Page - auto Increase Number FUN-FACT
-----------------------------------------------------------------*/
// let counterNums = document.querySelectorAll(".fun-fact-item__inner p");
// let sectionContainer = document.querySelector(".fun-fact");
// //Variable that tracks if the counters have been activated
// let actived = false; // Function Started ? No

// // Add scroll event to the page
// window.addEventListener("scroll", () => {
//     /* If the page is scrolled to the containers
//     element and the counters are not activated */
//     if (pageYOffset > sectionContainer.offsetTop - sectionContainer.offsetHeight - 400 && actived === false) {
//         // Select all counter
//         counterNums.forEach(counterNum => {
//             //Set counter values to zero
//             counterNum.innerText = 0;
//             /* Set count variable to track the count*/
//             let count = 0;
//             //Update count function
//             function updateCount() {
//                 //Get counter target number to count to
//                 const target = parseInt(counterNum.dataset.count);
//                 //As long as the count is below the target number
//                 if (count < target) {
//                     //Increase the count
//                     count++;
//                     counterNum.innerText = count;
//                     //Repeat this every 10 milliseconds
//                     setTimeout(updateCount, 1) /*Count speed */
//                     //And when the target is reached
//                 } else {
//                     //Set the counter text to the target number
//                     counterNum.innerText = target;
//                 }
//             }
//             //Run the function initially
//             updateCount();
//             //Set activated to true
//             activated = true;
//         });
//     } else if (pageYOffset < sectionContainer.offsetTop - sectionContainer.offsetHeight - 10 || pageYOffset === 0 && activated === true) {
//         //Select all counter 
//         counterNums.forEach(counterNum => {
//             //Set counter text back to zero
//             counterNum.innerText = 0;
//         });
//         //Set activated to false
//         activated = false;
//     }
// });
const itemsCounter = document.querySelectorAll('.numbCount');
let isCounting = false;

const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
    const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
            el.innerText = `${value}`;
            clearInterval(increaseCount);
            return;
        }
        el.innerText = `${initialValue}`;
    });
};

const startCounting = () => {
    if (!isCounting) {
        itemsCounter.forEach((item) => {
            updateCount(item);
        });
        isCounting = true;
    }
};

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const handleScroll = () => {
    const funFactContainer = document.querySelector('.fun-fact');
    if (isElementInViewport(funFactContainer)) {
        startCounting();
        window.removeEventListener('scroll', handleScroll);
    }
};

window.addEventListener('scroll', handleScroll);


/* -------------------------------------------------------------
    ================ ServicesSingle Page - Model Video
-----------------------------------------------------------------*/
const btnPreview = document.querySelector('.play');
const videoModal = document.querySelector('.clip');
const btnCloseVideo = document.querySelector('.closeBtn');
const videoOverlay = document.querySelector('.video-overlay');
const videoElement = document.querySelector('.clip video');

btnPreview.addEventListener('click', () => {
    videoModal.classList.add('show');
    videoElement.play(); // Tự động chạy video khi modal hiển thị
    console.log('click me!!!');
});

btnCloseVideo.addEventListener('click', () => {
    closeVideoModal();
});

videoOverlay.addEventListener('click', () => {
    closeVideoModal();
});

function closeVideoModal() {
    if (!videoElement.paused) {
        videoElement.pause(); // Dừng video nếu đang chạy
    }
    videoModal.classList.remove('show');
}






