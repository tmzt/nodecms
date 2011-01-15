(function($) {
	var app = $.sammy('#main', function() {
		this.get('#/', function(context){alert(this.params.splat);this.partial('/ajax/index');});
		this.get('#/specific', function(context){alert('specificstuff');});
		this.get('#/:p1/:p2', function(context) {
			alert(this.params['p1']+'/'+this.params['p2']);
			this.partial('/ajax/'+this.params['p1']+'/'+this.params['p2']);
		});
		this.get('#/:p1', function(context) {
			alert('p1: ' + this.params['p1']);
			this.partial('/ajax/'+this.params['p1']);
		});
	});
	$(function() { app.run('#/'); });
})(jQuery);
