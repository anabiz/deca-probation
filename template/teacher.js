$(function(){
    
    $free = $('#teacher');
    
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/freelancer',
            success: function(freelancers){
                console.log('success', freelancers);
                $.each(freelancers, function(i, freelancer){
                    //displayFreelancers(freelancer);
                    if(freelancer.job =="teacher") {
                    $free.append(
                        "<div class='col-sm-6 card' style='width: 18rem; margin-right:50px;'>"+
                    "<img class='card-img-top' src='../images/teacher.jpg' style='width: 18rem;' alt='Card image cap'>"+
                    "<div class='card-body'>"+
                      "<h5 class='card-title'>Card title</h5>"+
                      "<p  class='card-text'>"+ "<strong>firstname: </strong>" + freelancer.name+"</p>" +
                      "<p  class='card-text'>"+ "<strong>lastname: </strong>"+ freelancer.job+"</p>" +
                      "<p  class='card-text'>"+ "<strong>lastname: </strong>"+ freelancer.phone+"</p>" +
                     
                      "<a href='#' id='butt' class='btn btn-primary' data-id=" + freelancer.id + ">Go somewhere</a>"+
                     "</div>"+
                  "</div>"
         
                    
                )
                }
                })
            },
            error: function(){
                alert('error getting data');
            }
        })

        $(document).on('click', '#butt', function () {
            console.log("ggpppppppppppppgg");
           var $fd=$(this).attr('data-id');
           console.log($fd);
           localStorage.setItem('mybutt', JSON.stringify($fd));
           window.location.href="profile.html";
        
        });





    })