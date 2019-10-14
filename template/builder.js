$(function(){
    
    $free = $('#builder');
    var $modalBody=$('.modal-body');
    var $mode = $('#mode')
    
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/freelancer',
            success: function(freelancers){
                console.log('success', freelancers);
                $.each(freelancers, function(i, freelancer){

                    var $modalBody=$('.modal-body');
                    var $mode = $('#mode');

                    var $as = ("<div class='col-sm-4' id='mode' style='border:20px'>" +
                    "<p>"+ "<strong>firstname: </strong>" + freelancer.name+"</p>" +
                    "<p>"+ "<strong>lastname: </strong>"+ freelancer.job+"</p>" +
                    "<p>"+ "<strong>lastname: </strong>"+ freelancer.phone+"</p>" +
                    "<p>"+ "<strong>lastname: </strong>"+ freelancer.profile+"</p>" +
                    "<p>"+ "<strong>id: </strong>"+ freelancer.id+"</p>" +
                   
                    "<button type='button' id='but' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>view more of "+ freelancer.name+ "</button>"+
                    "<div id='myModal' class='modal fade' role='dialog'>"+
                      "<div class='modal-dialog'>" +
                    
                    "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                    "<button type='button' class='close' data-dismiss='modal'>&times;</button>"+
                    "<h4 class='modal-title'>Modal Header</h4>"+
                    "</div>"+
                    "<div class='modal-body'>"+

                    "<div class='col-sm-4' id='mode' style='border:20px'>" +
                        "<p>"+ "<strong>firstname: </strong><input type='text' id='name'></p>" +
                        "<p>"+ "<strong>lastname: </strong>"+ freelancer.job+"</p>" +
                        "<p>"+ "<strong>lastname: </strong>"+ freelancer.phone+"</p>" +
                        "<p>"+ "<strong>lastname: </strong>"+ freelancer.profile+"</p>" +
                        "<p>"+ "<strong>id: </strong>"+ freelancer.id+"</p>" +
                        "</div>"+"<hr></hr>"+
                   
                    "</div>"+
                    "<div class='modal-footer'>"+
                    "<button type='button class='btn btn-default' data-dismiss='modal'>Close</button>"+
                    "</div>"+
                    "</div>"+
                    
                    "</div>"+
                    "</div>" +
                    "</div>"+"<hr></hr>")

                    //displayFreelancers(freelancer);
                    if(freelancer.job =="builder") {

                    $free.append($as);
                }
                })
            },
            error: function(){
                alert('error getting data');
            }
        })

        


       // $mode.delegate('#but', 'click', function(){
         //   var $div = $(this).closest('div');
           // $div.find()
       // })
    })