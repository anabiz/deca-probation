$(function(){
    
    $free = $('#others');
    
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/freelancer',
            success: function(freelancers){
                console.log('success', freelancers);
                $.each(freelancers, function(i, freelancer){
                    //displayFreelancers(freelancer);
                    if(freelancer.job =="agriculture") {
                    $free.append("<div class='col-sm-4' style='border:20px'>" +
                    "<p>"+ "<strong>firstname: </strong>" + freelancer.name+"</p>" +
                    "<p>"+ "<strong>lastname: </strong>"+ freelancer.job+"</p>" +
                    "<p>"+ "<strong>lastname: </strong>"+ freelancer.phone+"</p>" +
                    "<p>"+ "<strong>lastname: </strong>"+ freelancer.profile+"</p>" +
                    "<p>"+ "<strong>id: </strong>"+ freelancer.id+"</p>" +
                    "<hr></hr>"+
                   
                    "</div>"
                )
                }
                })
            },
            error: function(){
                alert('error getting data');
            }
        })
    })