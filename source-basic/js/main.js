$(document).ready(function () {
    $(window).scroll(function () { 
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 200){
            $(".search").addClass("sticky");
        }else{
            $(".search").removeClass("sticky");
        }
    });
});


function changeColor(element) {
    // Lấy tất cả các phần tử có lớp "areaRoom-design-item"
    var items = document.querySelectorAll('.areaRoom-design-item');
  
    // Loại bỏ lớp "selected" từ tất cả các phần tử
    items.forEach(function(item) {
      item.classList.remove('selected');
    });
  
    // Thêm lớp "selected" cho phần tử được click
    element.classList.add('selected');
  }
  