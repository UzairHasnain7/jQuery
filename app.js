$(document).ready(function(){
    $("#btn").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var age = $("#age").val();
        var designation = $("#designation").val();
        var city = $("#city").val();
        
        $("#box").css("display", "block");

        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        $("#designation").val("");
        $("#city").val("");

        $("#dname").text("Your Name is: " + name);
        $("#demail").text("Your Name is: " + email);
        $("#dage").text("Your Name is: " + age);
        $("#ddesignation").text("Your Name is: " + designation);
        $("#dcity").text("Your Name is: " + city);
    });
});