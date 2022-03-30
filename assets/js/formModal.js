$(document).ready(function() {
    const formModal = $(".formModal");
    const formModalClose = $(".formModal__close");
    formModalClose.on("click", (e) => {
        e.preventDefault();
        formModal.removeClass("active");
    });
    const validateFields = (form, fieldsArray) => {
        fieldsArray.forEach(field => {
            field.removeClass("errorInput");
            if(field.val().trim() === ""){
                field.addClass("errorInput");
            }
        });
        const errorFields = form.find(".errorInput");
        return errorFields.length === 0;
    }
    $(".form").on("submit", (e) => {
        e.preventDefault();
        const form = $(e.currentTarget);
        const name = form.find("[name='name']");
        const phone = form.find("[name='phone']");
        const comment = form.find("[name='comment']");
        const to = form.find("[name='to']");
        const isValid = validateFields(form, [name, phone, comment, to]);
        const content = formModal.find(".formModal__content");
        formModal.removeClass("error-send");
        if(isValid){
            const request = $.ajax({
                url: "https://webdev-api.loftschool.com/sendmail",
                method: "post",
                data: {
                    name: name.val(),
                    phone: phone.val(),
                    comment: comment.val(),
                    to: to.val(),
                },
            });
            request.done(data => {
                content.find("span").text(data.message);
            });
            request.fail(data => {
                const message = data.responseJSON.message;
                content.find("span").text(message);
                formModal.addClass("error-send");
            });
            request.always(() => {
                formModal.addClass("active");
            });
        }
    });
});