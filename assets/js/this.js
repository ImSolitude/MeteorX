/*global console, alert, confirm, prompts*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
*/
$(document).ready(function(e){
        $('a[href^="#"]').on('click', function(e) {
            var target = $( $(this).attr('href') );
            console.log(target);
            if(target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
            }
        });
        // transitio
        $('.thumb-unit').on('click', function(e) {
            e.preventDefault();
            $('.work-belt').css('left', '-100%');
            $('.work-container').show();
        });

        $('.work-return').on('click', function(e) {
            e.preventDefault();
            $('.work-belt').css('left', '0%');
            $('.work-container').hide(800);
        });


        // work load
        $.ajaxSetup({cache: true});

        $('.thumb-unit').on('click', function() {
            var $this = $(this),
                $number = $this.attr('class').slice(-1);
                newTitle = $this.find('strong').text();
                spinner = '<div class="loader">Loading...</div>',
                newHtml = "./work/work" + $number +".html";
            $('.project-load').html(spinner).load(newHtml);
            $('.project-title').text(newTitle);
            console.log($number);
        });


        // client scroll
        $('.client-logo, .clients-mobile-nav span').on('click', function() {
            console.log('gggg');
            var $this = $(this),
                $siblings = $this.parent().children(),
                $position = $siblings.index($this);
            $('.client-unit').removeClass('active-client').eq($position).addClass('active-client');
            $siblings.removeClass('active-client');
            $this.addClass('active-client');
        });

        // next - prev buttons

        $('.next, .prev').on('click', function() {
            var $this = $(this),
                $currActiveClient = $('.clients-belt').find('.active-client'),
                $position = $('.clients-belt').children().index($currActiveClient),
                $clientNum = $('.client-unit').length;

                if($this.hasClass('next')) {
                    if($position < $clientNum - 1 ) {
                        $('.active-client').removeClass('active-client').next().addClass('active-client');
                    } else {
                        $('.client-unit').removeClass('active-client').first().addClass('active-client');
                        $('.client-logo').removeClass('active-client').first().addClass('active-client');
                    }
                } else {

                    if( $position === 0 ) {
                        $('.client-unit').removeClass('active-client').last().addClass('active-client');
                        $('.client-logo').removeClass('active-client').last().addClass('active-client');
                    } else {

                        $('.active-client').removeClass('active-client').prev().addClass('active-client');
                    }

                }

        });


        // next-prev
                $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });

                $(".biglink").fitText(1, { minFontSize: '42px', maxFontSize: '200px' });


});


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
