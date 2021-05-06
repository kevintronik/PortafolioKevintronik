/*
PWA
*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }
/*
PWA
*/
var firmacount = 0;
    $(document).ready(function(){
        
        
        $(function(){
          // get hash value
          var hash = window.location.hash;
          // now scroll to element with that id
          $('html, body').animate({ scrollTop: $(hash).offset().top });
        });
        
        var altura = $(".body").height();
        var ancho = $(".body").width();

        $(".start").css("height",altura+"px");
        $(".start").css("width",ancho+"px");
        $("#first").css("margin-top",altura+"px");

        $("#hire").on("click", function(){
            $(this).toggleClass("hireClick");
            $('.info').toggleClass("displaySee");
        });

        $('.toggle').toggles({
          drag: true, // allow dragging the toggle between positions
          click: true, // allow clicking on the toggle
          text: {
            on: 'English', // text for the ON position Inglés
            off: 'Español' // and off
          },
          on: true, // is the toggle ON on init
          animate: 250, // animation time (ms)
          width: 100, // width used if not set in css
          height: 30, // height if not set in css
        });


        ingles();

        $('.toggle').on('toggle', function(e, active) {
          if (active) {
            ingles();
          } else {
            espanol();
          }});

    });

    $(window).resize(function(){
        var altura = $(".body").height();
        var ancho = $(".body").width();

        $(".start").css("height",altura+"px");
        $(".start").css("width",ancho+"px");
        $("#first").css("margin-top",altura+"px");
    });

    $( ".body" ).scroll(function() {
        if ($('.line').visible(true,true)) {
            $(".background").css("background", "linear-gradient(#2084dc, #16a085)");
        }

        if ($('.show1').visible(false,true)) {
            $('.show1').addClass("animated slideInLeft visible");
            $('.show1').removeClass("hidden");
            $(".background").css("background", "linear-gradient(#ecf0f1, #7f8c8d)");
        }

        if ($('.show2').visible(true,true)) {
            $('.show2').addClass("animated slideInRight visible");
        }

        if ($('.show3').visible(true,true)) {
            $('.show3').addClass("animated slideInLeft visible");
            $(".background").css("background", "linear-gradient(#1abc9c, #16a085)");
        }

        if ($('.show4').visible(true,true)) {
            $('.show4').addClass("animated slideInRight visible");
            $(".background").css("background", "linear-gradient(#9b59b6, #34495e)");
        }

        if ($('.show5').visible(true,true)) {
            $('.show5').addClass("animated slideInRight visible");
            $(".background").css("background", "linear-gradient(#7f8c8d,#e74c3c)");
        }

        if($(".firma").visible(true)&& firmacount == 0){
            firmacount = 0;
            var paths = $('#svg4166 path:not(defs path)');
            paths.each(function(i, e) {
                e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
            });
            var tl = new TimelineMax();
            tl.add([
                TweenLite.to(paths.eq(0), 4, {
                    strokeDashoffset: 0,
                    delay: 0.0,
                    autoAlpha: 1
                })
            ]);
        }
    });
    


        
    function ingles(){
        $(".espanol").hide();
        $(".ingles").show();
    }

    function espanol(){
        $(".ingles").hide();
        $(".espanol").show();
    }