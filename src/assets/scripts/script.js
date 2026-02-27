$(document).ready(function () {
//выпадающее меню
    $('#burger').click(function () {
        $('#nav').addClass('open');
    })
    $('.nav__close').click(() => {
        $('#nav').removeClass('open');
    })
// Инициализация анимации
    new WOW().init();

// слайдер
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 929,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 636,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });

    let loader = $('.loader');
// Проверка формы
    let inputProduct = $('#input-product');

    let inputName = $('#input-name');
    inputName.inputmask('a{1,15}');

    let inputPhone = $('#input__phone');
    inputPhone.inputmask("+375 (99) 999-99-99");//маска для телефона из пакета inputmask

    let url = ' https://testologia.ru/checkout'; // ссылка на сервер для приема данных формы

    $('.order__btn').click(function () {

        loader.css('display', 'flex');

        let inputForm = $('.order__input');
        let err = false;

        for (let i = 0; i < inputForm.length; i++) {
            let input = $(inputForm[i]);
            input.next().css('display', 'none');
            input.css('border', '1px solid rgb(130, 19, 40)');
            if (!input.val()) {
                input.css('border', '1px solid red');
                input.next().css('display', 'flex');
                err = true;
            } else {
                //проверяем id текущего input , если это телефон - прповеряем заполнение
                if (input.attr('id') === 'input__phone') {
                    inputPhone.next().next().css('display', 'none');
                    if (!inputPhone.inputmask('isComplete')) {
                        inputPhone.next().next().css('display', 'flex');
                        inputPhone.css('border', '1px solid red');
                        err = true;
                    }
                }
            }
        }


        if (!err) {
// валидация ajax на сервере url = ' https://testologia.ru/checkout';
            $.ajax({
                method: "POST",
                url: url,
                // данные формы, передаваемые на сервер
                data: {product: inputProduct.val(), name: inputName.val(), phone: inputPhone.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        //скрываем форму

                        let form = $('.order_form_form');

                        // всплывающее сообщение
                        let orderMsg = $('.order_msg');
                        orderMsg.width(inputPhone.width());
                        orderMsg.height(form.height());
                        orderMsg.css('display', 'flex');
                        form.hide();

                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                        for (let i = 0; i < inputForm.length; i++) {
                            inputForm[i].value = ''
                        }
                    }
                });
        }
        loader.hide();
    })

})
