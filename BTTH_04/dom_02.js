
$(document).ready(function() {
    $('#form').validate({
        onfocusout: true,
        onkeyup: false,
        onclick: false,
        rules: {
            "name": {
                required: true,
                minlength: 3,
                pattern: /^[a-zA-Z\s]+$/
            },

            "email": {
                required: true,
                email: true
            },

            "phone": {
                required: true,
                maxlength: 10,
                minlength: 10,
                pattern: /^(0)[0-9]{9}$/
            },

            "password": {
                required: true,
                minlength: 8
            },

            "re-password": {
                equalTo: "#password",
                minlength: 8,
                required: true
            },

            "gender": {
                required: true
            },

            "agree": {
                required: true
            }
        },
        messages: {
            "name": {
                required: "Không trống, chỉ chứa chữ cái khoảng trắng và ít nhất 3 ký tự!",
                minlength: "Ít nhất 3 ký tự",
                pattern: "Chỉ chứa chữ cái và khoảng trắng!"
            },

            "email": {
                required: "Không trống, đúng định dạng name@domain.com",
                email: "Định dạng email không hợp lệ!"
            },

            "phone": {
                required: "Không trống, chỉ chứa số đúng định dạng 10 số và bắt đầu bằng số 0!",
                maxlength: "Chỉ chứa 10 số",
                minlength: "Chỉ chứa 10 số",
                pattern: "Phải bắt đầu bằng 0 và chỉ chứa 10 chữ số!"
            },

            "password": {
                required: "Không trống, ít nhất 8 ký tự!",
                minlength: "Ít nhất 8 ký tự"
            },

            "re-password": {
                equalTo: "Mật khẩu không khớp!",
                minlength: "Ít nhất 8 ký tự!"
            },

            "gender": {
                required: "Vui lòng chọn giới tính!"
            },

            "agree": {
                required: "Vui lòng đồng ý với điều khoản!"
            }
        },
        submitHandler: function(form) {
            const userName = $('#name').val();
            $('#form').hide();
            $('body').append(`<h2>Chào mừng ${userName} đã đăng ký thành công!</h2>`);
        }
    })

    $('#form input').on('input', function() {
        $(this).removeClass('error');
        $(this).next('.error').remove();
    });

});

