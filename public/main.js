$('#confirm').on('click',function (evt) {
    if ($("#stuClass").val() === '' ||
        $("#stuId").val() === '' ||
        $("#stuName").val() === '') {
        $('#myModal').modal('show');
        evt.preventDefault();
    }else {
        $('form').submit();
    }
});
