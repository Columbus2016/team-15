var xhr = new XMLHttpRequest();
var $getPointsbtn = $('#grabPointsbtn');
var $getTeambtn = $('#grabTeamPoints');

$getPointsbtn.on('click', function(e){
    e.preventDefault();
    $.ajax({
        dataType: 'json',
        url: 'data/package.json',
        type: 'GET',
        success: function (data) {
            document.getElementById('display').innerHTML = data.points[0].point;
        }
    });
});

$getTeambtn.on('click', function(e){
    e.preventDefault();
    $.ajax({
        dataType: 'json',
        url: 'data/package.json',
        type: 'GET',
        success: function (data) {
            document.getElementById('display2').innerHTML = data.points[0].point;
        }
    });
});
