$(function(){
    var $free = $('.display-freelancers');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/freelancer',
        success: function(freelancers){
            console.log('success', freelancers);
            for(var i=0; i<freelancers.length; i++){
                $free.append('<li>name: '+ freelancers[i].firstName)
            }
        },
        error: function(){``
            alert('error getting data');
        }
    })
})