$(function(){
    var $email = $('#email');
    var $password = $('#pwd');
    console.log("ouytrteeff");
    


    $('#button').on('click', function(){ 

        console.log($email.val(), $password.val()); 
        console.log("ggpppppppppppppgg");

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/freelancer',
            success: function(freelancers){
                console.log('success', freelancers);
                $.each(freelancers, function(i, freelancer){
                    //displayFreelancers(freelancer);
                   console.log(freelancer.password);
                   if(freelancer.password==$password.val() && freelancer.email==$email.val()){
                    localStorage.setItem('myid', JSON.stringify(freelancer.id));
                    window.location.href="dashboard.html";
                    return -1;

                   }
  
                })
                alert("incorrect email or password");  
            },
            error: function(){
                alert('error getting data');
            }
        });
    });




})