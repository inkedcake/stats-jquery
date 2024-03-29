$(document).ready(function () {

    setInterval(function () {
        $.ajax({
            type: 'GET',
            url: 'http://dev.waiteswireless.com/pdc-stats/json.php',
            data: {get_param: 'value'},
            dataType: 'json',
            success: function (data) {
                var amazon_count = parseInt(data.amazon);
                var customer_count = parseInt(data.clients);
                var errors = data.errors;
                $('.numbers-amazon').text(data.amazon);
                $('.numbers-customer').text(data.clients);

                var html = '';
                $.each(errors,function (index, item) {
                     html +=
                        '<li class="rounded">' +
                        '<svg xmlns="http://www.w3.org/2000/svg"' +
                        ' aria-hidden="true" focusable="false"' +
                        ' data-prefix="fas" data-icon="exclamation-circle"' +
                        ' class="svg-inline--fa fa-exclamation-circle fa-w-16 warning" role="img"' +
                        ' viewBox="0 0 512 512">' +
                        '<path fill="currentColor"' +
                        ' d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>' +
                        '</svg>' +
                        '<span class="error-text">'+item.message+'</span>' +
                        '</li>';
                });

                $('.js-errors-list').html(html);

                if (amazon_count >= 500) {
                    $('.js-amazon-counters').attr('data-color', 'red')
                } else if (amazon_count >= 300) {
                    $('.js-amazon-counters').attr('data-color', 'orange')
                } else {
                    $('.js-amazon-counters').attr('data-color', 'green')
                }
                if (customer_count >= 500) {
                    $('.js-cusotomer-counters').attr('data-color', 'red')
                } else if (customer_count >= 300) {
                    $('.js-cusotomer-counters').attr('data-color', 'orange')
                } else {
                    $('.js-cusotomer-counters').attr('data-color', 'green')
                }
            }
        });
    }, 5000);


});
