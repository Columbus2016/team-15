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
            $('#leaderboard').append('<tr><td>' + parseEmail(data[i].Username) +'</td>' +
                '<td>' + data[i].Score +'<td></tr>');
        }
    }
});

$.ajax({
    dataType: 'json',
    url: 'data/teamdata.json',
    type: 'GET',
    success: function (data) {
        for(var i = 0; i < 5; i++){
            $('#teamLeaderboard').append('<tr><td>' + parseEmail(data[i].Teamname) +'</td>' +
                '<td>' + data[i].Score +'<td></tr>');
        }
    }
});


    $.ajax({
        dataType: 'json',
        url: 'data/package.json',
        type: 'GET',
        success: function (data) {
            $('#display').html('<h1>'+data.points[0].point+'</h1>');
        }
    });

    $.ajax({
        dataType: 'json',
        url: 'data/package.json',
        type: 'GET',
        success: function (data) {
            $('#display2').html('<h1>'+data.points[0].point+'</h1>');
        }
    });

