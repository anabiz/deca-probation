console.log('welcome to dashboard');
console.log(localStorage.getItem('myid'));

$(function(){
    
    var $span = $('#span');
    var $titl = $('#titl');
    var $free = $('.display-freelancer');
    var id2 =JSON.parse(localStorage.getItem('myid'));
    console.log(id2);
    var $logout = $('#logout');
    var bb ='';

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/freelancer/' + id2 ,
        success: function(freelancer){
            console.log('success', freelancer);
            $span.text(freelancer.name);
            bb += freelancer.image;

            $free.append(
                "<div class='row' style='height:200px; margin-bottom:50px;border-bottom:2px solid Violet'>" + 

                    "<div class='col-sm-3' id='image1' >" +
                        "<img style='height:150px; width:150px; border-radius:50px' classs='imag' src='images/"+ freelancer.image + "'>" +
                        "<input class='edit image' />" +
                    "</div>" +
       
                    "<div class='col-sm-9'>" +
                        "<p>"+
                            "<strong>Name: </strong>" + "<span class='noedit name'>" + freelancer.name+ "</span>"+
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
   
                        "<p >" +
                            "<strong>id: </strong>"+ freelancer.id + 
                        "</p>" + 
                        "<div class='mybuttons'>" +
                        "<button class='remove  btn btn-primary' style='margin:20px' data-id=" + freelancer.id + " >Delete Account </button>" +
                        "<button style='margin:20px' class='editfreelancer noedit btn btn-primary'> Edit Profile</button>" +
                       "<button style='margin:20px' class='saveEdit edit btn btn-primary' >Save </button>" +
                       "<button style='margin:20px' class='cancelEdit edit  btn btn-primary' style='list'> Cancel</button>" +
                       "</div>" +
                        "<hr style='color:green;>"+
                        "<hr style='color:red;'>"+
                     "</div>" +
          
                "</div>" );
            
        },
        error: function(){
            alert('error getting your data');
        }
    })

console.log($('.row #image1 img').attr('src'));
console.log($('#image1').find('tag').attr('src'));
console.log($('#image1').prop('src'));

$(document).on('click', '.editfreelancer', function () {
    console.log($('#image1').prop('src'));
    console.log("ggpppppppppppppgg");
    console.log($('img.src').html());
    $('.edit').show();
    $('.noedit').hide();
    $('input.image').val( bb);
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
        image:$('input.image').val(),
        name:$('Input.name').val(),
        job:$('Input.job').val(),
        phone:$('Input.phone').val(),
        email:$('input.email').val(),
        profile:$('Input.profile').val(),
        password:$('Input.password').val(),
    };


    

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/freelancer/' + id2 ,
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



$(document).on('click', '.cancelEdit', function () {
   
            $('.noedit').show();
            $('.edit').hide();

    });       










$(document).on('click', '.remove', function () {
    console.log('mmmmmmmmmmmmmm');

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/freelancer/' + id2 ,
        success: function(freelancer){
            $titl.text('Goodbye');
            console.log('mmmmmmmmmmmmmm');
            $('#button1').hide();
            $('.row').remove();
            window.location.href="login.html";
           

        }
    });

});
var counter = 0;
var $booking = $('#booking');
$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/bookings',
    success: function(bookings){
        console.log('success', bookings);
        $.each(bookings, function(i, singleBooking){

            if(singleBooking.bookingid == id2){
                counter +=1;
                console.log( singleBooking.bookingid);
                //console.log( freelancer);
       $booking.append(
        "<div class='col-sm-4' style='height:150px;border-left:2px solid Violet; margin-bottom:30px'>" + 
                       
                    "<div>" +
                        "<p>"+
                            "<strong>Project Description: </strong>" + "<span >" + singleBooking.project+ "</span>"+
                        "</p>" +

                        "<p>"+ 
                            "<strong>Name: </strong>"+ "<span >" + singleBooking.name + "</span>"+
                        "</p>" +
                      
                        "</p>" +

                        "<p>"+
                            "<strong>Email: </strong>" + "<span >" + singleBooking.email + "</span>" +
                        "</p>" +

                        "<p style='color:Violet;'>"+ 
                             "<span >" + "<i>"+ "Booked on " + singleBooking.bookingtime + "</i>" + "</span>"+
                        "</p>" +
                      
   
                        "</div>" +

                       
          
                    "</div>" );
       }
       });
       console.log(counter);
       if(counter==0){
        $booking.text("Sorry, no bookings for now.");
       }
        
    },
});

$(document).on('click', '#button1', function (e) {
    e.preventDefault();
    console.log('mmmmmmmmmmmmmm');
    $('#booking').toggle("slow");

});




});

$('#logout').on('click', function(){      
    console.log("ggpppppppppppppgg");
   localStorage.removeItem('myid');
    window.location.href="landingpage.html";

});