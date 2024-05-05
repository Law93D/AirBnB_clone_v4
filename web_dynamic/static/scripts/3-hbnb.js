$(document).ready(function() {
	// Function to fetch places from the backend
	function fetchPlaces() {
		$.ajax({
			type: 'POST',
			url: 'http://0.0.0.0:5001/api/v1/places_search',
			contentType: 'application/json',
			data: JSON.stringify({}),
			success: function(response) {
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
			}
			error: function(xhr, status, error) {
				console.error('Error fetching places:', error);
			}
		});
	}
	// Fetch places when the page loads
	fetchPlaces();
});
