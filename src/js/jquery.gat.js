(function( $ ) {
	$.fn.gat = function( options  ) {
		
		var settings = $.extend({
			GOOGLE_SPEECH_API_KEY: "YOUR_API_KEY",
			language: "en"
		}, options );
		
		this.addClass( "gat-textarea" );
		this.wrap('<div class="gat-widget">').after('<div class="gat-controls"> </div>');
		
		
		
		return this;
	};
	
	$(document).on("click", ".gat-controls", function(){
		if(!$(this).hasClass('active')){
			// Start Recording
			$(this).addClass('active');
		} else {
			// Stop & Process
			$(this).removeClass('active');
		}
	});
}( jQuery ));