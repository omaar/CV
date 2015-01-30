(function(){

	var $menu 	 = $("#menu"),
		$button  = $("#show-menu"),
		$a 		 = $("#menu ul li a"),
		$chart 	 = $(".chart");
	var $doc 	 = $(".download");
		$(".submit").attr('disabled', 'disabled');

		function ShowMenu(e){
			e.preventDefault();
			$menu.slideToggle();
		}

		function ShowLink(){
			$menu.slideToggle();
		}

		function downDoc(){
			document.location.href='http://www.google.com.mx';//CVOmarRegino.docx
		}

		$button.on('click', ShowMenu);
		$a.on('click', ShowLink);
		$doc.on('click', downDoc);
		$chart.easyPieChart({
			easing: 'easeOutBounce',
			barColor:  '#f1844d',
			scaleColor: '#333',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
})();
