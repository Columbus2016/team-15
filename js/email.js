$(document).ready(function(){
    var $emailBtn = $('#emailBtn');
    function email() {
        var connstring = "mailto:escape(document.getElementById('').value)?body=Come join Feeding America at this link www.fake.com  it is really fun";
        window.location.href = connstring;
    }

    $emailBtn.on('click', function () {
        email();
        alert("Email has been sent");
    });
});