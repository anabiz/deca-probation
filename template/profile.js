console.log('welcome to dashboard');
console.log(localStorage.getItem('myid'));

$(function(){
    var $myname=$('#myname');
    var $free = $('#profile');
    var id =JSON.parse(localStorage.getItem('mybutt'));
    console.log(id);
    var $logout = $('#logout');


    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/freelancer/' + id ,
        success: function(freelancer){
            console.log('success', freelancer);
            $myname.text(freelancer.name);

            $free.append(
                "<div class='row' style='height:200px'>" + 

                    "<div class='col-sm-3'>" +
                        "<img style='height:150px; width:150px; border-radius:50px' src=" + freelancer.image + ">" +
                    "</div>" +
       
                    "<div class='col-sm-9'>" +
                        "<p>"+
                            "<strong>firstname: </strong>" + "<span class='noedit name'>" + freelancer.name+ "</span>"+
                            
                        "</p>" +

                        "<p>"+ 
                            "<strong>Job: </strong>"+ "<span class='noedit job'>" + freelancer.job + "</span>"+
                            
                        "</p>" +
                         
                        "<p>"+ 
                            "<strong>Your phone Number: </strong>"+ "<span class='noedit phone'>" + freelancer.phone + "</span>" +
                            
                        "</p>" +

                        "<p>" + 
                            "<strong>Your Profile: </strong>"+ "<span class='noedit profile'>" + freelancer.email + "</span>" +
                            
                        "</p>" +

                        "<p>"+
                            "<strong>Email: </strong>" + "<span class='noedit email'>" + freelancer.profile + "</span>" +
                            
                        "</p>" +

   
                        "<hr></hr>"+
                     "</div>" +
          
                "</div>" );
            
        },
        error: function(){
            alert('error getting your data');
        }
    })







});
