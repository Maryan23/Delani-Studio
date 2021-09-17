$(document).ready(function () {
    $(".desInD").click(function () {
        $("#ww1").toggle();
        $(".dd").toggle();
    });
    $(".devInD").click(function () {
        $("#ww2").toggle();
        $(".dp").toggle();
    });
    $(".pmInD").click(function () {
        $("#ww3").toggle();
        $(".pm").toggle();
    });

    $("#img1").mouseenter(function () {
        $("#w1").show()
            .mouseleave(function () {
                $("#w1,").hide();
            });
    });

    $("#img2").mouseenter(function () {
        $("#w2").show()
            .mouseleave(function () {
                $("#w2").hide();
            });
    });
    $("#img3").mouseenter(function () {
        $("#w3").show()
            .mouseleave(function () {
                $("#w3").hide();
            });
    });
    $("#img4").mouseenter(function () {
        $("#w4").show()
            .mouseleave(function () {
                $("#w4").hide();
            });
    });
    $("#img5").mouseenter(function () {
        $("#w5").show()
            .mouseleave(function () {
                $("#w5").hide();
            });
    });
    $("#img6").mouseenter(function () {
        $("#w6").show()
            .mouseleave(function () {
                $("#w6").hide();
            });
    });
    $("#img7").mouseenter(function () {
        $("#w7").show()
            .mouseleave(function () {
                $("#w7").hide();
            });
    });
    $("#img8").mouseenter(function () {
        $("#w8").show()
            .mouseleave(function () {
                $("#w8").hide();
            });
    });

});

function feedBack(){
    var uname = document.getElementById("uname").value;
    // var email=$("input#email").value();
    // var message=$("textarea#message").value();
    alert(uname)
    
    
//     if ($("input#name").value() && $("input#email").value() && $("textarea#message").value()) {
//         alert("Hi " name + " we have received your message. Thank you for reaching out to Delani Studio.");
//       } 
//       else {
//         alert("Please enter your name and email!");
//       }
// };
};