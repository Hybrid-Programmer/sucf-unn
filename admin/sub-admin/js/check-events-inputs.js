$('.event-numbers').on('keyup', function () {

	if ($(this).val() > 59 || $(this).val().length > 2) {
		$(this).val("");
	}
	
})

$('#event-hour').on('keyup', function () {

	if ($(this).val() > 23 || $(this).val().length > 2) {
		$(this).val("");
	}
	
})