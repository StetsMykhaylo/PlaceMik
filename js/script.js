
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });





});



//new Swiper('.cat_slider');
const swiper = new Swiper('.crb', {

    slidesPerView: '1',
    paginationClickable: true,
    spaceBetween: 0
});


let cont = document.querySelector('.container');
//console.log(cont.offsetWidth + 10);




let buy = document.querySelectorAll('.buy_block');
let news = document.querySelectorAll('.news_block');
let for_y = document.querySelectorAll('.f_block');
let rec = document.querySelectorAll('.rec_block');
let load_buy = document.querySelector('.load_buy');
let load_news = document.querySelector('.load_news');
let load_y = document.querySelector('.load_y');
let load_rec = document.querySelector('.load_rec');


for (let key in buy) {
    if (key > 5) {
        buy[key].style.display = 'none';
    }
}
load_buy.addEventListener('click', function () {

    for (let key in buy) {
        if (key > 5) {
            buy[key].style.display = 'block';
        }
    }
    load_buy.style.display = 'none';

})

for (let key in news) {
    if (key > 5) {
        news[key].style.display = 'none';
    }
}
load_news.addEventListener('click', function () {
    for (let key in news) {
        if (key > 5) {
            news[key].style.display = 'block';
        }
    }
    load_news.style.display = 'none';
})

for (let key in for_y) {
    if (key > 3) {
        for_y[key].style.display = 'none';
    }
}
load_y.addEventListener('click', function () {
    for (let key in for_y) {
        if (key > 3) {
            for_y[key].style.display = 'block';
        }
    }
    load_y.style.display = 'none';
})

for (let key in rec) {
    if (key > 5) {
        rec[key].style.display = 'none';
    }
}
load_rec.addEventListener('click', function () {
    for (let key in rec) {
        if (key > 5) {
            rec[key].style.display = 'block';
        }
    }
    load_rec.style.display = 'none';
})




// if (cont.offsetWidth >= 1366) {
//     for (let key in buy) {
//         if (key > 5) {
//             buy[key].style.display = 'none';
//         }
//     }
//     load_buy.addEventListener('click', function () {

//         for (let key in buy) {
//             if (key > 5) {
//                 buy[key].style.display = 'block';
//             }
//         }
//         load_buy.style.display = 'none';

//     })

//     for (let key in news) {
//         if (key > 5) {
//             news[key].style.display = 'none';
//         }
//     }
//     load_news.addEventListener('click', function () {
//         for (let key in news) {
//             if (key > 5) {
//                 news[key].style.display = 'block';
//             }
//         }
//         load_news.style.display = 'none';
//     })

//     for (let key in for_y) {
//         if (key > 3) {
//             for_y[key].style.display = 'none';
//         }
//     }
//     load_y.addEventListener('click', function () {
//         for (let key in for_y) {
//             if (key > 3) {
//                 for_y[key].style.display = 'block';
//             }
//         }
//         load_y.style.display = 'none';
//     })

//     for (let key in rec) {
//         if (key > 5) {
//             rec[key].style.display = 'none';
//         }
//     }
//     load_rec.addEventListener('click', function () {
//         for (let key in rec) {
//             if (key > 5) {
//                 rec[key].style.display = 'block';
//             }
//         }
//         load_rec.style.display = 'none';
//     })



// }


// if (cont.offsetWidth <= 768 && cont.offsetWidth > 576) {
//     for (let key in buy) {
//         if (key > 3) {
//             buy[key].style.display = 'none';
//         }
//     }
//     load_buy.addEventListener('click', function () {

//         for (let key in buy) {
//             if (key > 3) {
//                 buy[key].style.display = 'block';
//             }
//         }
//         load_buy.style.display = 'none';

//     })

//     for (let key in news) {
//         if (key > 3) {
//             news[key].style.display = 'none';
//         }
//     }
//     load_news.addEventListener('click', function () {
//         for (let key in news) {
//             if (key > 3) {
//                 news[key].style.display = 'block';
//             }
//         }
//         load_news.style.display = 'none';
//     })

//     for (let key in for_y) {
//         if (key > 1) {
//             for_y[key].style.display = 'none';
//         }
//     }
//     load_y.addEventListener('click', function () {
//         for (let key in for_y) {
//             if (key > 1) {
//                 for_y[key].style.display = 'block';
//             }
//         }
//         load_y.style.display = 'none';
//     })

//     for (let key in rec) {
//         if (key > 3) {
//             rec[key].style.display = 'none';
//         }
//     }
//     load_rec.addEventListener('click', function () {
//         for (let key in rec) {
//             if (key > 3) {
//                 rec[key].style.display = 'block';
//             }
//         }
//         load_rec.style.display = 'none';
//     })

// }

// if (cont.offsetWidth < 1366 && cont.offsetWidth >= 768) {
//     for (let key in buy) {
//         if (key > 4) {
//             buy[key].style.display = 'none';
//         }
//     }
//     load_buy.addEventListener('click', function () {

//         for (let key in buy) {
//             if (key > 4) {
//                 buy[key].style.display = 'block';
//             }
//         }
//         load_buy.style.display = 'none';

//     })

//     for (let key in news) {
//         if (key > 4) {
//             news[key].style.display = 'none';
//         }
//     }
//     load_news.addEventListener('click', function () {
//         for (let key in news) {
//             if (key > 4) {
//                 news[key].style.display = 'block';
//             }
//         }
//         load_news.style.display = 'none';
//     })

//     for (let key in for_y) {
//         if (key > 2) {
//             for_y[key].style.display = 'none';
//         }
//     }
//     load_y.addEventListener('click', function () {
//         for (let key in for_y) {
//             if (key > 2) {
//                 for_y[key].style.display = 'block';
//             }
//         }
//         load_y.style.display = 'none';
//     })

//     for (let key in rec) {
//         if (key > 4) {
//             rec[key].style.display = 'none';
//         }
//     }
//     load_rec.addEventListener('click', function () {
//         for (let key in rec) {
//             if (key > 4) {
//                 rec[key].style.display = 'block';
//             }
//         }
//         load_rec.style.display = 'none';
//     })



// }


console.log(cont.offsetWidth);


let cat = document.querySelector('.cat');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    cat.classList.toggle('hidden');
})
let cl_link = document.querySelectorAll('.c_left_link');
let cr_top = document.querySelectorAll('.c_right_top');
// let a = 0;
// let b = 1;
// for (let item of cr_top) {
//     console.log(a++);
// }
// for (let item of cl_link) {
//     console.log(b++);
// }


//cr_top.style.opacity = '0';
// for (item of cr_top) {
//     item.style.display = 'none';
// }
// cr_top[0].style.display = "grid";


for (let i = 0; i < cl_link.length; i++) {
    cl_link[i].addEventListener('mouseover', function () {
        for (j = 0; j < cr_top.length; j++) {
            cr_top[j].classList.add('hidden');
        }

    });

    cl_link[i].addEventListener('mouseover', function () {
        cr_top[i].classList.remove('hidden');
    });




}

// let key=0;
// let key2=0;
// for ( otem of cl_link) {
//     otem.addEventListener('mouseover', function () {
//         for (item of cr_top) {
//             item.style.opacity = '0';
//         }



//     });
//     otem.style.opacity = '1';
// }

