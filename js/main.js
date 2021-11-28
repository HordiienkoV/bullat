const swiperBanner = new Swiper('.banner-swiper.swiper', {
    navigation: {
        nextEl: '.banner__next',
        prevEl: '.banner__prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true
    },
});
const swiperDiscounts = new Swiper('.discounts-swiper.swiper', {
    navigation: {
        nextEl: '.discounts__next',
        prevEl: '.discounts__prev'
    },
    slidesPerView: 5,
    breakpoints: {
        280: {
            slidesPerView: 2
        },
        482: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 4
        },
        812: {
            slidesPerView: 5
        }
    }

});
const swiperCategory = new Swiper('.category-swiper.swiper', {
    navigation: {
        nextEl: '.category__next',
        prevEl: '.category__prev'
    },
    slidesPerView: 3,
    breakpoints: {
        280: {
            slidesPerView: 2
        },
        426: {
            slidesPerView: 1
        },
        580: {
            slidesPerView: 2
        },
        770: {
            slidesPerView: 3
        }
    }
});
const swiperCategoryClon = new Swiper('.category-swiper-clon.swiper', {
    navigation: {
        nextEl: '.category-clon__next',
        prevEl: '.category-clon__prev'
    },
    slidesPerView: 4,
    breakpoints: {
        280: {
            slidesPerView: 2
        },
        580: {
            slidesPerView: 3
        },
        770: {
            slidesPerView: 4
        }
    }

});


let showBtn = document.querySelectorAll('.nav__btn');
for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener('click', function () {
        this.previousElementSibling.classList.toggle('category__list--active')
        if (this.previousElementSibling.classList.contains('category__list--active')) {
            this.innerHTML = 'Свернуть'
        } else {
            this.innerHTML = 'Показать еще'
        }
    }
    )
}


// let catItemHidden = document.querySelectorAll('.category__item--hidden');
// let showBtn = document.querySelectorAll('.nav__btn');
// for (let i = 0; i < showBtn.length; i++) {
//     showBtn[i].addEventListener('click', function () {
//         for (j = 0; j < catItemHidden.length; j++) {
//             catItemHidden[j].classList.toggle('category__item--deactivated')
//             if (catItemHidden[j].classList.contains('category__item--deactivated')) {
//                 showBtn.innerHTML = 'Показать еще'
//             } else {
//                 showBtn.innerHTML = 'Свернуть'
//             }
//         }
//     })
// }




// for (i = 0; i < showBtn.length; i++) {
//     showBtn[i].addEventListener('click', showBtnClick);
//     function showBtnClick() {
//         for (j = 0; j < catItemHidden.length; j++) {
//             catItemHidden[j].classList.toggle('category__item--deactivated')
//             if (catItemHidden[j].classList.contains('category__item--deactivated')) {
//                 showBtn[i].innerHTML = 'Показать еще'
//             } else if (!catItemHidden[i].classList.contains('category__item--deactivated')) {
//                 showBtn[i].innerHTML = 'Свернуть'
//             }
//         }

//     }
// }

// function showBtnClick() {
//     for (i = 0; i < catItemHidden.length; i++) {
//         if (catItemHidden[i].classList.contains('category__item--deactivated')) {
//             showBtn.innerHTML = 'Показать еще'
//         } else {
//             catItemHidden[i].classList.toggle()
//             showBtn.innerHTML = 'Свернуть'
//         }
//         catItemHidden[i].classList.toggle('category__item--deactivated')
//     }
// }
// for (i = 0; i < showBtn.length; i++) {
//     showBtn[i] = document.addEventListener('toggle', function () {
//         for (let i = 0; i < catItemHidden.length; i++) {
//             catItemHidden[i].classList.remove('category__item--deactivated')
//         }
//     })
// }


// $('.category__show-button').on('click', function () {
//     $('.category__show-button').removeClass('category__nav-button--active');
//     $('.category__item--hidden').removeClass('category__item--deactivated');
//     $('.cat__arrow--hidden').removeClass('cat__arrow--deactivated')
//     $('.category__hide-button').addClass('category__nav-button--active');
// });
// $('.category__hide-button').on('click', function () {
//     $('.category__hide-button').removeClass('category__nav-button--active');
//     $('.category__item--hidden').addClass('category__item--deactivated');
//     $('.category__show-button').addClass('category__nav-button--active');
//     $('.cat__arrow--hidden').addClass('cat__arrow--deactivated')
// });