$(document).ready(function(){
    $("#design").click(function(){
        $(".design").toggle();
        $("#design").toggle();
    })
    $("#development").click(function(){
        $(".development").toggle();
        $("#development").toggle();
    });
    $("#product").click(function(){
        $(".product").toggle();
        $("#product").toggle();
    });
});
function feedBack(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;
    alert(name)

    var regEx=/^[A-Za-z]+$/;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ((name.value.match(regEx)) && (email.value.match(validRegex)) && (message.value.match(regEx))){
        alert("Hi "+" name "+" We have received your message. Thank you for contacting Delani Studio. ")
    }else {
        alert("Please check your input!")
    }
}