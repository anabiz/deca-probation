$(function(){
    var $email = $('#email');
    var $password = $('#pwd');
    console.log("ouytrteeff");



    $('#myForm').submit(function(e) {
        e.preventDefault();
        console.log('lllllllll');
        // get all the inputs into an array.
        var $inputs = $('#myForm :input');
        console.log($inputs);
        
        var a; 
        var b;
        $inputs.each(function() {
            //console.log(this);

            if (this.type == 'email'){
            a=$(this).val();
            console.log(a);
        }else if(this.type =='password'){
            b=$(this).val();
            console.log(b);
        }
        });

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/freelancer',
            success: function(freelancers){
                console.log('success', freelancers);
                $.each(freelancers, function(i, freelancer){
                    //displayFreelancers(freelancer);
                    //console.log(i);
                    console.log(freelancers.length)
                
                   if(freelancer.password==b && freelancer.email== a) { 
                       console.log(i);
                    localStorage.setItem('myid', JSON.stringify(freelancer.id));
                    window.location.href="dashboard.html";
                    //break;

                   }//else if(i+1 == freelancers.length){
                       //alert('Incorrect password or email');
                   //}
  
                });
            
            
            },
            error: function(){
                alert('error getting data');
            }
        });
    });

    //alert('errorrrrrrrr');


    });
    

    
