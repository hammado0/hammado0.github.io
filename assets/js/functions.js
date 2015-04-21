$( document ).ready(function() {

  //
  smoothScroll(300);
  poemControls();
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