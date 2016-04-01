$(document).ready(function () {
    //Відправка форм===============================
    $("form").submit(function (e) {
        if (cor) {
            var form = this;
            var thisForm = $(form);
            var formData = thisForm.serialize();
            $.ajax({
                //url: 'mail/mailer.php',test_ajax
                url: 'test_ajax.php',
                data: formData,
                type: 'POST',
                success: function (data) {
                    if ( data.trim()!='true') {
                        //$.fancybox({ href: "#none" });
                        alert('Ошибка при отправке')
                    }
                    else {
                        $(form).trigger('reset');
                        $.fancybox({ href: "#spas" });
                    }
                }
            });
        }
        e.preventDefault();
        return false;
    });
    //=============================================
});