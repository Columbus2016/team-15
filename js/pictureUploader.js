var $uploadBtn = $('#uploadbtn');

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
    $('#yourImage').attr('src', e.target.result);
};

$uploadBtn.on('click',function(){
    $(":file");
});