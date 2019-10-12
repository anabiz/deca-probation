console.log('welcome to dashboard');
console.log(localStorage.getItem('myid'));

$(function(){
    var $span = $('#span');
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

            $free.append("<div>" +
            "<p>"+ "<strong>firstname: </strong>" + freelancer.name+"</p>" +
            "<p>"+ "<strong>Job: </strong>"+ freelancer.job+"</p>" +
            "<p>"+ "<strong>Your phone Number: </strong>"+ freelancer.phone+"</p>" +
            "<p>"+ "<strong>Your Profile: </strong>"+ freelancer.profile+"</p>" +
            "<p>"+ "<strong>id: </strong>"+ freelancer.id+"</p>" +
            "<hr></hr>"+
           
            "</div>" );
            
        },
        error: function(){
            alert('error getting your data');
        }
    })

   
})

$('#logout').on('click', function(){      
    console.log("ggpppppppppppppgg");
   localStorage.removeItem('myid');
    window.location.href="landingpage.html";

});