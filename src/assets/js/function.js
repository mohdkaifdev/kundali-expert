import Swiper from "swiper";
import "swiper/css";
import $ from "jquery";
import "jquery-match-height";

var swiper = new Swiper(".abc", {
  slidesPerView: 1,
  spaceBetween: 14,
  loop: true,
  centeredSlides: true,
  speed: 1200,
  autoplay: {
    delay: 2900,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
      spaceBetween: 6,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2.5,
    },
  },
});

// $('#simpleList-example > a').on('click', function(event){
//   $(this).addClass('active');
//   $(this).siblings().removeClass('active');
//   event.preventDefault();
//   let getScrollItem = $(this).attr('href');
//   console.log(getScrollItem)
//   $('.ourTreatmentCntRght').animate({
//     scrollTop: $('.ourTreatmentCntRght').scrollTop() +
//                $(getScrollItem).offset().top - $('.ourTreatmentCntRght').offset().top
//   }, 1000);
// });

$(document).on("click", ".menu_icon_sec > a", function (e) {
  e.preventDefault();
  $("body").addClass("active_menu active_sidebar");
});

$(document).on(
  "click",
  ".cross_icon span, .header_sidebar .cross_icon",
  function (e) {
    e.preventDefault();
    $("body").removeClass("active_menu active_sidebar");
  },
);

$(".bg_overlay").on("click", function () {
  $("body").removeClass("active_sidebar");
});

$(document).ready(function () {
  $(".nav li > a + i").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find(">ul").slideToggle(100);
  });
});

$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();
  if (scroll >= 150) {
    sticky.addClass("fixed_header");
  } else {
    sticky.removeClass("fixed_header");
  }
});

$(document).ready(function () {
  $(".banner_box").matchHeight();
  $(".kundali_detail_block").matchHeight();
  $(".horoscope_box").matchHeight();
  $(".bi_box").matchHeight();
});

let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Funtion to update rating
function gfg(n) {
  remove();
  let cls = "";
  for (let i = 1; i <= n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
  output.innerText = "Rating is: " + n + "/5";
}
// To remove the pre-applied styling
function remove() {
  let i = 1;
  while (i <= 5) {
    stars[i].className = "star";
    i++;
  }
}


    const buttons = document.querySelectorAll('.toggle-btn');
    const indicator = document.querySelector('.toggle-indicator');
    const items = document.querySelectorAll('.timeline-item');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {

          
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            indicator.style.left = index === 0 ? '0%' : '50%';

            const type = btn.dataset.type;

            items.forEach(item => {
                item.style.display = 'none';
                if (item.classList.contains(type)) {
                    item.style.display = 'block';
                }
            });

        });
    });

 