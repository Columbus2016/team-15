var $getPointsbtn = $('#grabPointsbtn');
var $getTeambtn = $('#grabTeamPoints');
var leaderBoardTable =
$.ajax({
    dataType: 'json',
    url: 'data/leaderboard.json',
    type: 'GET',
    success: function (data) {
        console.log(data[0].id);
    }
});
$getPointsbtn.on('click', function(e){
    e.preventDefault();
    $.ajax({
        dataType: 'json',
        url: 'data/package.json',
        type: 'GET',
        success: function (data) {
            $('#display').html(data.points[0].point);
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
            $('#display2').html(data.points[0].point);
        }
    });
});
