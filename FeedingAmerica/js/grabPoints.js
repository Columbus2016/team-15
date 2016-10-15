var $getPointsbtn = $('#grabPointsbtn');
var $getTeambtn = $('#grabTeamPoints');

function parseEmail(inputString){
    var index = inputString.indexOf('@');
    var defaultUserName = inputString.slice(0,index);
    return defaultUserName;
}

$.ajax({
    dataType: 'json',
    url: 'data/leaderboard.json',
    type: 'GET',
    success: function (data) {
        for(var i = 0; i < 15; i++){
            $('#leaderboard').append('<div class="row orange darken-2"><div>Username: ' + parseEmail(data[i].Username) +'</div>' +
                '<div>Score: ' + data[i].Score +'</div>');
        }
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
