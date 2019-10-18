$(function(){
    var $free = $('#test');

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
        url: 'http://localhost:3000/freelancer/8',
        success: function(freelancer){
            //console.log('success', freelancer);
           
            //console.log( freelancer.booking[0].comment);
            //freelancer.booking[0].job="teacher";
            //console.log( freelancer.booking[0].job);
            //console.log(freelancer);

           
        
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