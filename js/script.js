window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function() {
        preloader.classList.add('preloader-hidden');
  }, 990);
}

new Swiper('.image-slider' , {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //   },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
    //   grabCursor: true,
    autoHeight: false,
    slidesPerView: '4',
    spaceBetween: 20,
    loop: true,
    slidesPerColumn: 2,

      breakpoints: {
          320: {
            spaceBetween: 10,
              slidesPerView: 2.5,
          },
          992: {
            slidesPerView: 4,
          }
      },

}); 

new Swiper('.image-slider-2' , {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //   },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
    //   grabCursor: true,
    autoHeight: true,
    slidesPerView: '4',
    spaceBetween: 20,
    loop: true,

      breakpoints: {
          320: {
            spaceBetween: 10,
              slidesPerView: 2.5,
          },
          992: {
            slidesPerView: 4,
          }
      },

}); 


new Swiper('.image-slider-3' , {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
  //   grabCursor: true,
  autoHeight: false,
  slidesPerView: '1',
  spaceBetween: 20,
  loop: false,

    breakpoints: {
        320: {
          spaceBetween: 10,
            slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        }
    },
    
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 4,
      breakpoints: {
        320: {
          spaceBetween: 10,
            slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        }
    },
		}
	},

}); 


new Swiper('.background-slider' , {
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,
    },
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  //     draggable: true
  //   },
  //   grabCursor: true,
  // autoHeight: true,
  slidesPerView: '1',
  spaceBetween: 5,
  autoplay: false,
  speed: 100,
  // effect: 'fade',


    breakpoints: {
        320: {
          spaceBetween: 10,
            slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        }
    },

}); 

// $(document).ready(function(){
//   $("#menu").on("click","a", function (event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       event.preventDefault();

//       //забираем идентификатор бока с атрибута href
//       var id  = $(this).attr('href'),

//       //узнаем высоту от начала страницы до блока на который ссылается якорь
//           top = $(id).offset().top;

//       //анимируем переход на расстояние - top за 1500 мс
//       $('body,html').animate({scrollTop: top}, 1500);
//   });
// });

$(document).ready(function(){
  $("#arrow").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function(){
  $("#arrow-2").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
  });
});



$(function() {
  $('#linen-complects').change(function () {
      var vibor = $(this).find(':selected').val();
	  var br = '<br>';
      if(vibor == 'Евро') {
        $('.linen-size').html('— Простынь 220х240 <br>— Пододеяльник 200х220 <br> — Наволочки 50х70 или 70х70');
      } else if(vibor == 'Двуспальный') {
		$('.linen-size').html('— Простынь 220х240 <br>— Пододеяльник 180х215 <br> — Наволочки 50х70 или 70х70');
      } else if(vibor == 'Дует') {
        $('.linen-size').html('— Простынь 220х240 <br>— Пододеяльник: 2шт. 150х215 <br> — Наволочки 50х70 или 70х70');
      }
     
  });

});

$("#navToggle").click(function () {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind

});

$('.overlay').click(function () {
  $(this).removeClass('open');
  $('.navBurger').removeClass('active');
});




