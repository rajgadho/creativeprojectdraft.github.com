(function($){


    $('#fullpage').fullpage({
		menu: '#menu',
		anchors:['vaynerx', 'vaynermedia', 'tracer', 'gallerymediagroup', 'sasha', 'vaynerproductions', 'vaynerspeakers'],
		afterLoad: function(anchorLink, index){
            if (index == 1){
                $("footer").fadeIn(250);
                $('header').removeClass('dark-header');
                $('.svg-wrap').addClass('animated infinite bounce2');
            }
        },
        onLeave: function(index, nextIndex, direction){
            $('.vm-wrap').removeClass('animated fadeInDown');
            $('.svg-wrap').removeClass('animated infinite bounce2');
            $('header').removeClass('dark-header');
            $('.svg-wrap').removeClass('dark-svg');
            console.log(nextIndex);

            switch(nextIndex){
                case 1:
                    $('.vm-wrap-1').addClass('animated fadeInDown');
                    $('.svg-wrap').addClass('animated infinite bounce2');
                break;
                case 2:
                    $('.vm-wrap-2').addClass('animated fadeInDown');
                break;
                case 3:
                    $('.vm-wrap-4').addClass('animated fadeInDown');
                break;
                case 4:
                    $('header').addClass('dark-header');
                    $('.vm-wrap-5').addClass('animated fadeInDown');
                    $('.svg-wrap').addClass('dark-svg');
                break;
                case 5:
                    $('.vm-wrap-6').addClass('animated fadeInDown');
                break;
                case 6:
                    $('.vm-wrap-8').addClass('animated fadeInDown');
                break;
                case 7:
                    $('.vm-wrap-7').addClass('animated fadeInDown');
                    $('header').addClass('dark-header');
                    $('.svg-wrap').addClass('dark-svg');
                break;
                default:
                break;
            }

    		if(index == 1 && direction =='down'){
    			$("footer").fadeOut(100);
                $('.svg-wrap').removeClass('animated infinite bounce2 fadeInDown');
                $('header').removeClass('animated fadeInDown');
                $('footer').removeClass('animated fadeInDown');
    		}
    	}
	});

})(window.jQuery || {});

