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
// ServicesSingle Page - Model Video
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
btnClose.onclick = function() {
    btnPreview.classList.remove('active');
    btnClose.classList.remove('active');
    video.pause();
}

// Project Page - tab Filter
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