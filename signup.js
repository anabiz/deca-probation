$(function(){
    var $name = $('#name');
    var $job = $('#job');
    var $phone = $('#phone');
    var $profile = $('#profile');
    var $email = ('#email');
    var $password = ('#pwd');

    $('#button').on('click', function(){      

    var freelance ={
        name: $name.val(),
        job: $job.val(),
        phone: $phone.val(),
        profile: $profile.val(),
        
    }

    console.log("gggggggggggggggggg");

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/freelancer',
        data: freelance,
        success: function(freelancer){
            console.log('success', freelancer);
        
        },
        error: function(){
            alert('error creating account data');
        }
    });

});

});