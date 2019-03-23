$(function (){
    isNavBarHidden = true;
   $('body > header .nav_two .menu_icon img').click(function (){
       if(isNavBarHidden){
           $('body > header .nav_two .navs').fadeIn("slow");
            isNavBarHidden = false;
       }
        else{
            $('body > header .nav_two .navs').fadeOut("slow");
            isNavBarHidden = true;
        }
   });
});