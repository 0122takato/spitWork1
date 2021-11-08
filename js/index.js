var mySwiper = new Swiper('.swiper-container', {
    slidesOffsetBefore: 0,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
        prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 100
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 200
        },
        428: {
            slidesPerView: 2,
            spaceBetween: 280
        }
    },
    autoplay: {
        delay:2000,
    },


    // スクロールバーを表示する場合
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
        draggable: true,
    }
});

const swiperPrev = document.getElementsByClassName('swiper-button-prev-a');
const swiperNext = document.getElementsByClassName('swiper-button-next-a');

for (let i = 0; i < swiperPrev.length; i++) {
    swiperPrev[i].addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        const prev = parent.getElementsByClassName('swiper-button-prev')[0];
        prev.click();
    });
}

for (let i = 0; i < swiperNext.length; i++) {
    swiperNext[i].addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        const next = parent.getElementsByClassName('swiper-button-next')[0];
        next.click();
    });
}

// トップの画像表示切替処理

const img1 = "./img/pc/sewingMachine.png";
const img2 = "./img/pc/sewingMachine.png";
const img3 = "./img/pc/sewingMachine.png";
function picChange(num) {
    const pic = document.querySelector('#sample')
    if (num == 0) {
        $('#pic').hide().fadeIn(1000, function () {
            pic.src = img1;
        });
    }
    if (num == 1) {
        $('#pic').hide().fadeIn(1000, function () {
            pic.src = img2;
        });
    }
    if (num == 2) {
        $('#pic').hide().fadeIn(1000, function () {
            pic.src = img3;
        });
    }
}


//ハンバーガーメニュー
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

function scrollChk() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();


    jQuery('.scroll-animation').not('.active').each(function () {
        var pos = $(this).offset().top;

        if (scroll > pos - windowHeight) {
            $(this).addClass("active");
            console.log("scroll",scroll);
            console.log("window",windowHeight);
            console.log("pos",pos);

        }
    });
}

$(window).scroll(function () {
    scrollChk();
});
$('body').on('touchmove', function () {
    scrollChk();
});