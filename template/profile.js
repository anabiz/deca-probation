console.log('welcome my profile');
//console.log(localStorage.getItem('myid'));

$(function(){
    var $myname=$('#myname');
    var $free = $('#profile');
    var id1 =JSON.parse(localStorage.getItem('mybutt'));
    console.log(id1);
    var $logout = $('#logout');
    var $jdata;
    var $jdata1


    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/freelancer/' + id1,
        success: function(freelancer){
            console.log('success', freelancer);
            $myname.text(freelancer.name);
            //var freelancer1=JSON.parse(freelancer)
            $jdata=(JSON.stringify(freelancer));
            $jdata1=freelancer;
            console.log($jdata);

            $free.append(
                "<div class='row' style='height:200px; border-bottom:2px solid Violet'>" + 

                    "<div class='col-sm-3 shadow-sm p-3 mb-5 bg-white rounded'>" +
                        "<img style='height:150px; width:150px; border-radius:50px' src='../images/" + freelancer.image + "'>" +
                    "</div>" +
       
                    "<div class='col-sm-9'>" +
                        "<p>"+
                            "<strong>Name: </strong>" + "<span class='noedit name'>" + freelancer.name+ "</span>"+
                            
                        "</p>" +

                        "<p>"+ 
                            "<strong>Job: </strong>"+ "<span class='noedit job'>" + freelancer.job + "</span>"+
                            
                        "</p>" +
                         
                        "<p>"+ 
                            "<strong>Phone Number: </strong>"+ "<span class='noedit phone'>" + freelancer.phone + "</span>" +
                            
                        "</p>" +

                        "<p>" + 
                            "<strong>Email: </strong>"+ "<span class='noedit profile'>" + freelancer.email + "</span>" +
                            
                        "</p>" +

                        "<p>"+
                            "<strong>Profile: </strong>" + "<span class='noedit email'>" + freelancer.profile + "</span>" +
                            
                        "</p>" +

   
                        "<hr></hr>"+
                     "</div>" +
          
                "</div>" );
            
        },
        error: function(){
            alert('error getting your data');
        }
    })


   

    $('#myForm').submit(function(e) {
        e.preventDefault();
        console.log('lllllllll');
        var dat1= new Date();
        console.log(dat1);
        // get all the inputs into an array.
        var $inputs = $('#myForm :input');
        console.log($inputs);
        //console.log($('input#email.form-control')['vaue']);
        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.
        //var values = {};
        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

        var postDay = dat1.getDate();
        var postMonth = months[dat1.getMonth() + 1];
        var postYear = dat1.getFullYear();
        var bookingTime = postMonth + " " + postDay + ", " + postYear + "."
        console.log(bookingTime);
        var a; 
        var b;
        var c;
        var d;
        $inputs.each(function() {
            //console.log(this);
            //console.log($(this).val());
            //console.log(values[this.name]);
            //console.log($(this).val());
           // values[this.name] = $(this).val();
            if (this.id == 'name'){
            a=$(this).val();
            console.log(a);
        }else if(this.type =='email'){
            b=$(this).val();
            console.log(b);
        }else if(this.id == 'project'){
            c=$(this).val();
        }
        });
        console.log(a , b);

        var dat = {
            name:a,
            email:b,
            project:c,
            bookingid: id1,
            bookingtime:bookingTime
        
        };
        console.log(dat);
        console.log(JSON.stringify(dat));

        

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/bookings',
            data:dat,

            success: function(freelancer){
                console.log('success', freelancer);
                //$myname.text(freelancer.name);
                alert('Thanks for booking me')
            },
    
        });
    



    
    });


    

   


});



