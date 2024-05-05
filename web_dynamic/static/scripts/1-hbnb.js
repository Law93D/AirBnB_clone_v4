$(document).ready(function() {
	// Function to handle checkbox changes
	$('input[type="checkbox"]').change(function() {
		var amenities = [];
		// Loop through each checkbox
		$('input[type="checkbox"]').each(function() {
			if ($(this).is(':checked')) {
				amenities.push($(this).data('id'));
			}
		});
		// Update the h4 tag inside the div Amenities
		$('.filters h4').text('Amenities: ' + amenities.join(', '));
	});
});
