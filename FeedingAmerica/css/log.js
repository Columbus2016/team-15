$(document).ready(function(){
    $.ajax({
        dataType: 'json',
        url: 'data/personal_logs.json',
        type: 'GET',
        success: function (data) {
            for(var i = 0;i < data.length; i++){
                $('#personalLog').html('<tr><td>'+ data[i].Item + '</td>' +
                    '<td>' + data[i].Date + " " + data[i].Time + '</td>' +
                    '<td>' + data[i].SKU + '</td>' +
                    '<td>' + data[i].PointValue + '</td></tr>'
                );
            }
        }
    });
});
