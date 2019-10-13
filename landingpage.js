$(function(){
    var $free = $('.display-freelancers');

    var freeTemplate = "" + 
    "<div>" +
    "<p> <strong>firstname: </strong>{{firstName}}</p>" +
    "<p> <strong>lastname: </strong>{{lastName}}</p>" +
    "<p> <strong>phone Number: </strong>{{phone}}</p>" +
    "<p> <strong>id: </strong>{{id}}</p>" +
    "</div>";

    //function displayFreelancers(freelancer){
        //$free.append(mustache.render(displayFreelancers, freelancer));
    //}

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/freelancer',
        success: function(freelancers){
            console.log('success', freelancers);
            $.each(freelancers, function(i, freelancer){
                //displayFreelancers(freelancer);
                $free.append("<div class='col-sm-4' style='border:20px'>" +
                "<p>"+ "<strong>firstname: </strong>" + freelancer.name+"</p>" +
                "<p>"+ "<strong>lastname: </strong>"+ freelancer.job+"</p>" +
                "<p>"+ "<strong>lastname: </strong>"+ freelancer.phone+"</p>" +
                "<p>"+ "<strong>lastname: </strong>"+ freelancer.profile+"</p>" +
                "<p>"+ "<strong>id: </strong>"+ freelancer.id+"</p>" +
                "<hr></hr>"+
               
                "</div>"
            )
            })
        },
        error: function(){
            alert('error getting data');
        }
    })

    $(document).on('click', '#ict', function () {
        console.log("ggpppppppppppppgg");
        window.location.href="template/ict.html"
    
    });

    $(document).on('click', '#fashion', function () {
        console.log("ggpppppppppppppgg");
        window.location.href="template/fashion.html"
    
    });

    $(document).on('click', '#agric', function () {
        console.log("ggpppppppppppppgg");
        window.location.href="template/agric.html"
    
    });

    $(document).on('click', '#builder', function () {
        console.log("ggpppppppppppppgg");
        window.location.href="template/builder.html"
    
    });

    $(document).on('click', '#teacher', function () {
        console.log("ggpppppppppppppgg");
        window.location.href="template/teacher.html"
    
    });

    $(document).on('click', '#others', function () {
        console.log("ggpppppppppppppgg");
        window.location.href="template/others.html"
    
    });

   
})