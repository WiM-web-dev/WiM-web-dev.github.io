/**ANIMATE HEADER**/

 $(document).ready(function() { 
   console.log($('ul li a').css('padding'));
   console.log($('ul li a').css('margin'));

     var scroll_height = $(window).scrollTop();
     var window_width = $(window).width();
     
    $('.toggle').click(function(){ /*toggles when specificed width size*/
        $('ul').toggleClass('active');
    })
     
    $(window).scroll( function() {
        scroll_height = $(this).scrollTop();
        animate_header();

    })
    $(window).resize( function() {
        window_width = $(this).width();
        animate_header();
    });
     
    function animate_header() {
        console.log(window_width);
        if (scroll_height > 80){ /*scroll down*/ 
            if (window_width > 1230) {
                $('ul#navigation_bar').css('margin-top', '');

            }
            else {
                $('ul#navigation_bar').css('margin-top', '50px');
                $('button.hamburger').css('margin-top', '-1em');
            }
            
            $("p.title").css('margin', '.7em 0 0 1em '); 
            $("header").css('height', '50px');
            $('p.title').html('');
            $("img#logo").css('width' , '127px');
            $("ul li a").css('padding', '4.7px 20px');
            $("li ul li a").css('padding', '0px 25px');
        }
        
        else { /*scroll up*/ 
            if (window_width > 1230 ) {
                $('ul#navigation_bar').css('margin-top', '');
            } 
            else {
                $('ul#navigation_bar').css('margin-top', '80px');
                $('button.hamburger').css('margin', '0em -1em');
            }
            
            $("p.title").css('margin', '1em 0 0 2em'); 
            $("header").css('height', '80px');
            $("img#logo").css('width' , '201px');
            $('p.title').html('Women in Mathematics <br / >at Berkeley');
            $("ul li a").css('padding', '10px 20px');
            $("li ul li a").css('padding', '0px 25px');
        
        }
    }
});