$(document).ready(function() {
	// Function to fetch places from the backend based on amenities, states, and cities
	function fetchPlaces(amenities, states, cities) {
		var data = {
			"amenities": amenities,
			"states": states,
			"cities": cities
		};
		$.ajax({
			type: 'POST',
			url: 'http://0.0.0.0:5001/api/v1/places_search',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function(response) {
				// Clear existing places
				$('.places').empty();
				// Loop through the response and create article tags representing places
				response.forEach(function(place) {
					var placeHTML = '<article>';
					placeHTML += '<div class="title_box"><h2>' + place.name + '</h2>';
					placeHTML += '<div class="price_by_night">' + '$' + place.price_by_night + '</div></div>';
					 placeHTML += '<div class="information"><div class="max_guest">';
					placeHTML += '<i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + place.max_guest + ' Guests';
					placeHTML += '</div><div class="number_rooms">';
					placeHTML += '<i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + place.number_rooms + ' Bedrooms';
					placeHTML += '</div><div class="number_bathrooms">';
					placeHTML += '<i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + place.number_bathrooms + ' Bathroom';
					placeHTML += '</div></div><div class="description">' + place.description + '</div></article>';
					$('.places').append(placeHTML);
				});
			},
			error: function(xhr, status, error) {
				console.error('Error fetching places:', error);
			}
		});
	}
	// Click event handler for the filter button
	$('#filter-btn').click(function() {
		// Get list of amenities checked by the user
		var amenities = [];
		$('input[type="checkbox"][name="amenity"]:checked').each(function() {
			amenities.push($(this).data('id'));
		});

		// Get list of states checked by the user
		var states = [];
		$('input[type="checkbox"][name="state"]:checked').each(function() {
			states.push($(this).data('id'));
		});

		// Get list of cities checked by the user
		var cities = [];
		$('input[type="checkbox"][name="city"]:checked').each(function() {
			cities.push($(this).data('id'));
		});

		// Fetch places based on amenities, states, and cities
		fetchPlaces(amenities, states, cities);
	});
});
