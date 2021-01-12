$(function () {
	$('.slider__items').slick({
  slidesToShow: 1,
	slidesToScroll: 1,
  arrows: true,
	fade: true,
	prevArrow: '<button class="slick-prev slick-arrow"><img src="/icons/previous.png" alt=""></button>',
	nextArrow: '<button class="slick-next slick-arrow"><img src="/icons/next.png" alt=""></button>',
	asNavFor: '.slider__thumbnails',
	responsive: [
    {
      breakpoint: 941,
      settings: {
        arrows: false,
      }
    },
	]
	});

	$('.slider__thumbnails').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerPadding: '40px',
		asNavFor: '.slider__items',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 921,
				settings: {
					slidesToShow: 4,
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 881,
				settings: {
					slidesToShow: 3,
					centerPadding: '140px',
				}
			},
		]
	});

		// Сщздаем переменную, в которую положим кнопку меню
		let menuToggle = document.querySelector('#menu__toggle');
		// Создаем переменную, в которую положим меню
		let menu = document.querySelector('.header__menu-wrapper');
		// Отслеживаем клик по кнопке меню и запускаем функцию
		menuToggle.addEventListener('click', function (event) {
			// Отменяем стандартное поведение ссылки
			event.preventDefault();
			// Вешаем класс на меню, когда кнопка нажата
			menu.classList.toggle('visible');
		});

		$('.menu__toggle').click(function(){
			$(this).toggleClass('open');
	});

})
