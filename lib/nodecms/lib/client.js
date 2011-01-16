(function($) {
	var app = $.sammy('#main', function() {
		function updatesession(session) {
			if (session.uid == -1) {
				//$('#session ul li a.logout').fadeOut('slow',function(){$(this).parent().remove();})
				//$('#session ul').append($('<li><a class="action login" href="/session/login">Login</a></li>').hide().fadeIn('slow'));
				$('#session a.login').html('<a class="action login" href="/session/login">Login</a>');
			} else {
				//$('#session ul li a.login').fadeOut('slow',function(){$(this).parent().remove();})
				//$('#session ul').append($('<li><a class="action logout" href="/session/logout">Logout</a></li>').hide().fadeIn('slow'));
				$('#session a.login').html('<a class="action logout" href="/session/logout">Logout</a>');
			};
		}
		this.post('#/session/login', function(context) {
			$.post('/session/login', this.params, updatesession);
		});
		$('a.logout').live('click',function(e) {
			e.preventDefault();
			$.post('/session/logout', null, updatesession);
			return false;
		});
		this.post('#/session/logout', function(context) {
			$.post('/session/logout', null, updatesession);
		});
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
