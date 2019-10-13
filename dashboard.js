console.log('welcome to dashboard');
console.log(localStorage.getItem('myid'));

$(function(){
    var $span = $('#span');
    var $titl = $('#titl');
    var $free = $('.display-freelancer');
    var id =JSON.parse(localStorage.getItem('myid'));
    console.log(id);
    var $logout = $('#logout');


    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/freelancer/' + id ,
        success: function(freelancer){
            console.log('success', freelancer);
            $span.text(freelancer.name);

            $free.append(
                "<div class='row' style='height:200px'>" + 

                    "<div class='col-sm-3'>" +
                        "<img style='height:150px; width:150px; border-radius:50px' src=" + freelancer.image + ">" +
                    "</div>" +
       
                    "<div class='col-sm-9'>" +
                        "<p>"+
                            "<strong>firstname: </strong>" + "<span class='noedit name'>" + freelancer.name+ "</span>"+
                            "<input class='edit name' />" +
                            
                        "</p>" +

                        "<p>"+ 
                            "<strong>Job: </strong>"+ "<span class='noedit job'>" + freelancer.job + "</span>"+
                            "<input class='edit job' />" +
                        "</p>" +
                         
                        "<p>"+ 
                            "<strong>Your phone Number: </strong>"+ "<span class='noedit phone'>" + freelancer.phone + "</span>" +
                            "<input class='edit phone' />" +
                        "</p>" +

                        "<p>" + 
                            "<strong>Your Profile: </strong>"+ "<span class='noedit profile'>" + freelancer.profile + "</span>" +
                            "<input class='edit profile' />" +
                        "</p>" +

                        "<p>"+
                            "<strong>Email: </strong>" + "<span class='noedit email'>" + freelancer.email + "</span>" +
                            "<input class='edit email' />" +
                        "</p>" +

                        "<p>"+
                            "<strong>Password: </strong>" + "<span class='noedit password'>" + freelancer.password + "</span>" +
                            "<input class='edit password' />" +
                        "</p>" +
   
                        "<p>" +
                            "<strong>id: </strong>"+ freelancer.id + 
                        "</p>" + 
                        "<div class='mybuttons'>" +
                        "<button class='remove' style='margin:20px' data-id=" + freelancer.id + " >Delete Account </button>" +
                        "<button style='margin:20px' class='editfreelancer noedit'> Edit Profile</button>" +
                       "<button style='margin:20px' class='saveEdit edit'>Save </button>" +
                       "<button style='margin:20px' class='cancelEdit edit' style='list'> Cancel</button>" +
                       "</div>" +
                        "<hr></hr>"+
                     "</div>" +
          
                "</div>" );
            
        },
        error: function(){
            alert('error getting your data');
        }
    })


$(document).on('click', '.editfreelancer', function () {
    console.log("ggpppppppppppppgg");
    console.log($('span.name').html());
    $('.edit').show();
    $('.noedit').hide();
    $('input.name').val($('span.name').html());
    $('input.job').val($('span.job').html());
    $('input.phone').val($('span.phone').html());
    $('input.email').val($('span.email').html());
    $('input.profile').val($('span.profile').html());
    $('input.password').val($('span.password').html());
});

$(document).on('click', '.saveEdit', function () {
    console.log($('Input.name').val());
    var freelancer = {
        name:$('Input.name').val(),
        job:$('Input.job').val(),
        phone:$('Input.phone').val(),
        email:$('input.email').val(),
        profile:$('Input.profile').val(),
        password:$('Input.password').val(),
    };

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/freelancer/' + id ,
        data:freelancer,
        success: function(freelancer){
            console.log('success', freelancer);
            $span.text(freelancer.name);
            console.log(freelancer.name);
            
            $('span.name').html(freelancer.name);
            $('span.job').html(freelancer.job);
            $('span.phone').html(freelancer.phone);
            $('span.email').html(freelancer.email);
            $('span.profile').html(freelancer.profile);
            $('span.password').html(freelancer.password);
            $('.noedit').show();
            $('.edit').hide();
            
        }

    });       

});


$(document).on('click', '.remove', function () {
    console.log('mmmmmmmmmmmmmm');

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/freelancer/' + id ,
        success: function(freelancer){
            $titl.text('Goodbye');
            console.log('mmmmmmmmmmmmmm');
            $('.row').remove();


        }
    });

});


});

$('#logout').on('click', function(){      
    console.log("ggpppppppppppppgg");
   localStorage.removeItem('myid');
    window.location.href="landingpage.html";

});