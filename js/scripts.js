$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $(".navbar").addClass("sticky");
          $(".goTop").fadeIn();
        }
        else{
          $(".navbar").removeClass("sticky");
          $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function(){scroll(0,0)});

    $("#mc.service").click(function (){window.location = "https://dev.bukkit.org/members/marylieh/projects"});
    $("#git.service").click(function (){window.location = "https://github.com/marylieh"});
    $("#db.service").click(function (){window.location = "https://www.mongodb.com/"});
    $("#wd.service").click(function (){window.location = "https://github.com/marylieh/MariesHomepage"});
    $("#design.service").click(function (){window.location = "https://github.com/marylieh/MariesHomepage/blob/main/css/style.css"});
    $("#android.service").click(function (){window.location = "https://play.google.com/store"});

    $("#discord.item").click(function (){window.location = "https://discord.gg/YeSM2c6qwb"});
    $("#mail.item").click(function (){window.location = "mailto:contact@marylieh.me"});
    $("#bukkit.item").click(function (){window.location = "https://dev.bukkit.org/members/marylieh/reputation"});

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{enabled:true}
    });
});