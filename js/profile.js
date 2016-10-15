$(document).ready(function(){
    //grab the profile information of user's group
    $.ajax({
        dataType: 'json',
            url: 'data/profile_teammates.json',
            type: 'GET',
            success: function(data){
            for(var i = 0;i < data.length; i++){
                $('#profiles').append('<div class="row"><div class="col s2">' +
                    '<img class="profile-pic" src="'+ data[i].link+ '"></div>' +
                    '<div class="col s8 offset-2">' + data[i].Username + '<br/>' +
                    data[i].Score + '</div></div>'
                );
            }
        }
    });
});
