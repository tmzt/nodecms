(function($) {
	var app = $.sammy('#main', function() {
		this.get('#', function(context){this.partial('/ajax/index';)});
		this.get('#:p1/:p2', function(context) {
			this.partial('/ajax/'+this.params.splat);
		}); 
	});
	app.run('#');
})(jQuery);
