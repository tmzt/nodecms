(function($) {
	var app = $.sammy('#main', function() {
		this.get('#/', function(context){this.partial('/ajax/index');});
		this.get('#/specific', function(context){});
		this.get('#/:p1/:p2', function(context) {
			this.partial('/ajax/'+this.params['p1']+'/'+this.params['p2']);
		});
		this.get('#/:p1', function(context) {
			this.partial('/ajax/'+this.params['p1']);
		});
	});
	$(function() {
        $('a').live('click',function(e) {
            var loc = $(this).attr('href');
            if (loc.match(/\:\/\//)) {
            } else {
				e.preventDefault();
                loc = loc.replace(/^\//, '#/');
				window.location.href = loc;
				return false;
            }
        });
        app.run('#/');
    });
})(jQuery);
