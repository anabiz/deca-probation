console.log("ggg888888888888g");

$(function(){
    console.log("gggguuuuuuuuuu");
    var $name = $('#name');
    var $job = $('#job');
    var $phone = $('#phone');
    var $profile = $('#profile');
    var $email = $('#email');
    var $password = $('#pwd');
    var $image = $('#file');
    //var $mail=$("input[name='email']").val();
    

   
    $('#myForm').submit(function(e) {
        e.preventDefault();
        
        console.log($email.val());
        console.log($image.val());
        var a=$image.val().slice(12, $image.val().length);
        console.log(a);
        
    var freelance = {
        name: $name.val(),
        job: $job.val(),
        phone: $phone.val(),
        email: $email.val(),
        password:$password.val(),
        profile: $profile.val(),
        image:a,

        
    }

    console.log("gggg");

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/freelancer',
        data: freelance,
        success: function(freelancer){
            console.log('success', freelancer);
            console.log('success', freelancer.id);
            localStorage.setItem('myid', JSON.stringify(freelancer.id));
            window.location.href="../dashboard.html";
        },
        error: function(){
            alert('error creating account data');
        }
    });

});




$('#btnUploadFile').on('click', function () {
    console.log('gtreeeeeeee');
    var data = new FormData();
    var files = $("#fileUpload").get(0).files;

    // Add the uploaded file content to the form data collection
    if (files.length > 0) {
        data.append("upload", files[0]);
    }

    // Make Ajax request with the contentType = false, and procesDate = false
    var ajaxRequest = $.ajax({
        type: "POST",
        url:  'http://localhost:3000/bookings',
        contentType: false,
        processData: false,
        data: data,

        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            console.log(data);
        }
    });

    ajaxRequest.done(function (xhr, textStatus) {
        console.log('uuuuuuuuuuuuuuuuuuu');
       // $("#response").attr('class', "alert alert-success");
       // $("#response").html("File uploaded successfully");
    });


});






});