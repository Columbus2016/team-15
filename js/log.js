$(document).ready(function(){
    //grab user history log items
    $.ajax({
        dataType: 'json',
        url: 'data/personal_logs.json',
        type: 'GET',
        success: function (data) {
            for(var i = 0;i < data.length; i++){
                $('#personalLog').append('<tr><td>'+ data[i].Item + '</td>' +
                    '<td>' + data[i].Date + " " + data[i].Time + '</td>' +
                    '<td>' + data[i].SKU + '</td>' +
                    '<td>' + data[i].PointValue + '</td></tr>'
                );
            }
        }
    });

    //grab user's group history
    $.ajax({
        dataType: 'json',
        url: 'data/team_logs.json',
        type: 'GET',
        success: function (data) {
            for(var i = 0;i < data.length; i++){
                $('#teamLog').append('<tr>'+
                    '<td>' + data[i].Date + " " + data[i].Time + '</td>' +
                    '<td>' + data[i].Contributor + '</td>' +
                    '<td>' + data[i].PointValue + '</td></tr>'
                );
            }
        }
    });
});
