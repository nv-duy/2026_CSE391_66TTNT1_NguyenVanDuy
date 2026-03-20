let today = new Date();
let minDate = today.toISOString().split("T")[0];

$("#date").attr("min", minDate);

let maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 30);
let maxDateStr = maxDate.toISOString().split("T")[0];

$("#date").attr("max", maxDateStr);

$(function() {
    let initialLen = $("#note").val().length;
    $("#charCount").text(initialLen + "/200");

    $("#note").on("input", function() {
        let currentLength = $(this).val().length;
        let maxLength = 200;
        let charCount = $("#charCount");
        
        charCount.text(currentLength + "/" + maxLength);
        
        if (currentLength > maxLength) {
            charCount.css("color", "red");
            charCount.css("font-weight", "bold");
        } else {
            charCount.css("color", "#666");
            charCount.css("font-weight", "normal");
        }
    });
    $('#form').validate({
        onfocusout: true,
        onkeyup: false,
        onclick: false,
        rules: {
            "name": {
                required: true
            },

            "amount": {
                required: true,
                number: true,
                min: 1,
                max: 99
            },
            "date": {
                required: true
            },
            "location": {
                required: true,
                minlength: 10
            },
            "note": {
                maxlength: 200
            },
            "payments": {
                required: true
            },
        },
        massages: {
            "name": {
                required: "Hãy chọn 1 sản phẩm!"
            },
            "amount": {
                required: "Hãy nhập số lượng!",
                number: "Vui lòng nhập một số hợp lệ!",
                min: "Số lượng phải lớn hơn 0!",
                max: "Số lượng không được vượt quá 99!"
            },
            "date": {
                required: "Hãy chọn ngày giao hàng!"
            },
            "location": {
                required: "Hãy nhập địa chỉ giao hàng!",
                minlength: "Địa chỉ phải có ít nhất 10 ký tự!"
            },
            "note": {
                maxlength: "Ghi chú không được vượt quá 200 ký tự!"
            },
            "payments": {
                required: "Hãy chọn phương thức thanh toán!"
            }
        }
    })
    $('#form input').on('input', function() {
        $(this).removeClass('error');
        $(this).next('.error').remove();
    });
});