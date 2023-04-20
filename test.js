
$(document).ready(function () {

    $(".container .exam-day button").click(function () { 
    

        let pane = $(this).attr("id");

        $(".container .course-main").removeClass("hide").hide()
        $(".container .course-main."+pane).fadeIn()

        $("  .container .right .exam-main .course-main.two .course").css({
                background:"#1560bd"
        })

        $("  .container .right .exam-main .course-main.three .course").css({
            background:"#00b7eb"
       })
        
        
    });



    $          
        $(".container .upcoming-events  .check-test").fadeOut(2000,function() {
            $(".container .upcoming-events .check-test").css({
                display:"none"
            })
            $(".container .upcoming-events .check").addClass("show").fadeIn(1000, function(){
                $(this).fadeOut(2000,function(){
                    $(".container .upcoming-events  .check-test").fadeIn(1000)
                })
                
                 
            })
        })

        

    
    

   
    


    
    
      
   

    
});