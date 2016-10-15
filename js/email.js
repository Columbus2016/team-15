$(document).ready(function(){
    //email to be sent out when user invites friends
    var $emailBtn = $('#emailBtn');
    function email() {
        var connstring = "mailto:escape(document.getElementById('').value)?body=Come join Feeding America at this link www.fake.com  it is really fun";
        window.location.href = connstring;
    }
    //simulates an email being sent out by email server
    $emailBtn.on('click', function () {
        email();
        alert("Email has been sent");
    });
});