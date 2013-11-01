//docready function
$(function(){
	var stateSelect = $('.us-states');
	var idx;
	var state;
	var abbr;
	for (idx = 0; idx < usStates.length; idx++) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}

	$('.cancel-signup').click(function(){
		
		$('.cancel-signup-modal').modal();
	});
	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});
});

$('.signup-form').submit(function(){
	var signupForm = $(this);
	var addr1Input = signupForm.find('input[name="addr-1"]');
	var addr1Value = addr1Input.val();
	if (addr1Value.length > 0) {
		var zipInput = signupForm.find('input[name="zip"]');
		var zipValue = zipInput.val();
		if (zipValue.length > 0) {
			return true;
		} else {
			alert('If address is provided, zip must also be provided');
			return false;
		}
	}
});

