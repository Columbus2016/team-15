var $getPointsbtn = $('#grabPointsbtn');
var $getTeambtn = $('#grabTeamPoints');

$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

function parseEmail(inputString){
    var index = inputString.indexOf('@');
    var defaultUserName = inputString.slice(0,index);
    return defaultUserName;
}

function share() {
    document.getElementById('SubmitButton').onclick = function () {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'http://localhost:52408/index.html',
            quote: "Look at all the points I earned!"
        }, function (response) { });
    }
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

