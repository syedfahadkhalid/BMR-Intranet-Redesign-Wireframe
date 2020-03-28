
jQuery(document).ready(function($) {  
	
	/*on click collaps hide*/
	$(".grid-item > a").click(function(event) {
		if (!$(this).parent().hasClass('collapse'))
		$(".collapse").collapse('hide');
	});

	
	$('#option-panel-btn').on('click', function() {
		
			$(this).toggleClass('opened');
			
	});
	
	$('#panel-btn').on('click', function() {
			$(this).toggleClass('opened');	
	});
	
	$('.scroll-data').slimScroll({
          height: 'auto',
		  opacity : 1,
		   borderRadius: '0px',
		  color: '#283f56'
    });
	  
	$('.grid').responsivegrid({
				'breakpoints': {
					'desktop' : {
						'range' : '1200-',
						'options' : {
							'column' : 6,
						}
					},
					'tablet-landscape' : {
						'range' : '1000-1200',
						'options' : {
							'column' : 5,
						}
					},
					'tablet-portrate' : {
						'range' : '767-1000',
						'options' : {
							'column' : 4,
						}
					},
					'mobile' : {
						'range' : '480-767',
						'options' : {
							'column' : 3,
						}
					},
					'mobile-small' : {
						'range' : '-480',
						'options' : {
							'column' : 2,
						}
					},
					
				}
			});
			
			$('.sub-grid').responsivegrid({
				'breakpoints': {
					'desktop' : {
						'range' : '1200-',
						'options' : {
							'column' : 3,
						}
					},
					'tablet-landscape' : {
						'range' : '1000-1200',
						'options' : {
							'column' : 3,
						}
					},
					'tablet-portrate' : {
						'range' : '767-1000',
						'options' : {
							'column' : 4,
						}
					},
					'mobile' : {
						'range' : '-767',
						'options' : {
							'column' : 3,
						}
					},
					
				}
			}); 
			
			
			$('.tow-sub-grid').responsivegrid({
				'breakpoints': {
					'desktop' : {
						'range' : '1200-',
						'options' : {
							'column' : 2,
						}
					},
					'tablet-landscape' : {
						'range' : '1000-1200',
						'options' : {
							'column' : 2,
						}
					},
					'tablet-portrate' : {
						'range' : '767-1000',
						'options' : {
							'column' : 2,
						}
					},
					'mobile' : {
						'range' : '-767',
						'options' : {
							'column' : 2,
						}
					},
					
				}
			});
			
			
			
			
			
			
			
/*-------------------------------------------------*/
    /* =  Login Form Control
    /*-------------------------------------------------*/
    var objQuickLoginButton = $('#quick-login-btn');
    if (objQuickLoginButton.length > 0) {
        var formInputOpen = true;
        $(objQuickLoginButton).on('click', function (e) {
            var parentForm = $(this).closest('.quick-login-form');
            var searchInput = $(parentForm).find('.form-control');
            var searchInputValue = $.trim(searchInput.val());
            $('.shw-txt').text(
                $(this).is(':visible') ? "Sign In" : "Submit"   // TODO : Read from .resx file
            );
            if (searchInputValue === '') {
                var hiddenGroup = parentForm.find(':hidden.form-group');
                var formGroup = parentForm.find('.form-group ');
                if (formInputOpen) {
                    $('#quick-login').addClass('signin-right');
                    $(this).addClass('act');
                    $('.shw-txt').text(
                        $(this).is(':visible') ? "Submit" : "Sign In"
                    );
                    $(hiddenGroup).animate({ width: 'show' }, 400, function () {
                        formInputOpen = false;
                    });
                } else {
                    $(this).removeClass('act');
                    $(formGroup).animate({ width: 'hide' }, 400, function () {
                        formInputOpen = true;
                        $('#quick-login').removeClass('signin-right');
                    });
                }
                e.preventDefault();
            }
        });
    }
	
	
	//04-11-2015
	$('a.clickToJump').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	
	});
	
	
});

