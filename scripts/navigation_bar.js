/**ANIMATE HEADER**/
 $(document).ready(function() { 
    $('.toggle').click(function(){ /*toggles when specificed width size*/
        $('ul').toggleClass('active');
    })
    $(window).scroll( function() { /*change style of header when scrolling*/
        var value = $(this).scrollTop();
        if (value > 80){
            $("header").css('height', '50px');
            $('p.title').html('');
            $("img#logo").css('width' , '126px');
            $("p.title").css('font-size', '17px'); 
            $("ul li a").css('padding', '4.7px 20px');
            $('ul#navigation_bar').css('margin-top', '50px');
            $('button.hamburger').css('margin-top', '-1em');
        }
        else {
            $("header").css('height', '80px');
            $("img#logo").css('width' , '200px');
            $("p.title").css('font-size', '22px'); 
            $('p.title').html('Women in Mathematics <br / >at Berkeley');
            $("ul li a").css('padding', '10px 20px')
            $('ul#navigation_bar').css('margin-top', '5em');
            $('button.hamburger').css('margin', '0em -1em');
        }

    })
});