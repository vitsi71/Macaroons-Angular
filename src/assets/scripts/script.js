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

    // //открытие картинки на полный экран
    $('.card-img').magnificPopup({
        type: 'image'
    });

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
                    // infinite: true,
                    // dots: true
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

    $('.assortment__item-img').magnificPopup({
        type: 'image'
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

    let zakazArr = [];// массив заказа

// заполнение заказа по нажатию кнопок
    $('.assortment__btn').click((e) => {
        let zakazItem = {};// элемент  заказа

        let zakaz = $("#input-product");
        //ищем название элемента в карточке по нажатой кнопке
        let selection = $(e.target).parents('.assortment__item').find('.assortment__item-name').text();
// ищем индекс объекта в массиве по имени
        let index = zakazArr.findIndex(el => el.name === selection);
        if (index > -1) {
            zakazArr[index].count += 1;
        } else {
            zakazItem.name = selection;
            zakazItem.count = 1;
            zakazArr.push(zakazItem);
        }
        window.location.href = "#assortment__items";// переходим к форме заполнения заказа
// заполняем (обновляем) поле заказа из массива zakazArr
        zakaz.val('');
        $.each(zakazArr, function (ind, val) {
            if (!zakaz.val()) {
                zakaz.val(val.name + ' ' + val.count + ' шт. ');
            } else {
                zakaz.val(zakaz.val() + ', ' + val.name + ' ' + val.count + ' шт. ');
            }
        })

// определение высоты textarea с учетом скрола
        // height в jqwery не учитывает padding
        //scrollHeight в jqwery нет
        zakaz.height(zakaz[0].scrollHeight - 38); // scrollHeight высота поля с учетом (38 входит padding по Y (19px*2)
    })
})