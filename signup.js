console.log("ggg888888888888g");

$(function(){
    console.log("gggguuuuuuuuuu");
    var $name = $('#name');
    var $job = $('#job');
    var $phone = $('#phone');
    var $profile = $('#profile');
    var $email = $('#email');
    var $password = $('#pwd');
    //var $mail=$("input[name='email']").val();
    

    $('#button').on('click', function(){      
        console.log("ggpppppppppppppgg");
        
        console.log($email.val());
        
    var freelance = {
        name: $name.val(),
        job: $job.val(),
        phone: $phone.val(),
        email: $email.val(),
        password:$password.val(),
        profile: $profile.val(),

        
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
            window.location.href="dashboard.html";
        },
        error: function(){
            alert('error creating account data');
        }
    });

});

});