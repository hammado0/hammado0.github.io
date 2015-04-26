$( document ).ready(function() {

  //
  smoothScroll(300);
  poemControls();
  jQuery("header h1").fitText(1, { minFontSize: '25px', maxFontSize: '72px' });
});

function smoothScroll(duration){
	$('a[href^="#"]').on('click', function(event){

		var target = $( $(this).attr('href'))

		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function poemControls(){

	$('.poem-nav-mobile span').click(function(){
		var $this = $(this);
		var $siblings = $this.parent().children();
		var index = $siblings.index($this);

		$('.poem-unit').removeClass('active-poem').eq(index).addClass('active-poem');
		$siblings.removeClass('active-poem');
		$this.addClass('active-poem');
	});

	$('.poem-next, .poem-prev').click(function(){
		var $this = $(this);
		var active = $('.poem-belt').find('.active-poem');
		var position = $('.poem-belt').children().index(active);
		var numberOfPoems = $('.poem-unit').length;
		//if next was clicked on
		if($this.hasClass('poem-next')){
			if(position < numberOfPoems - 1){
				$('.active-poem').removeClass('active-poem').next().addClass('active-poem');
			}
			else{
				$('.poem-unit').removeClass('active-poem').first().addClass('active-poem');
			}
		}

		//if prev was clicked on
		else{
			if(position === 0){
				$('.poem-unit').removeClass('active-poem').last().addClass('active-poem');
			}
			else{
				$('.active-poem').removeClass('active-poem').prev().addClass('active-poem');
			}
		}


	});
}


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