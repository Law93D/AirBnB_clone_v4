$(document).ready(function() {
	// Function to fetch and display reviews
	function fetchReviews() {
		// Check if reviews are already visible
		if ($('#toggle-reviews').text() === 'show') {
			// Fetch reviews from the backend (assuming the endpoint is available)
			$.ajax({
				type: 'GET',
				url: 'http://0.0.0.0:5001/api/v1/reviews',
				success: function(response) {
					// Parse and display reviews
					response.forEach(function(review) {
						var reviewHTML = '<div class="review">';
						reviewHTML += '<h3>' + review.title + '</h3>';
						reviewHTML += '<p>' + review.description + '</p>';
						reviewHTML += '</div>';
						$('#review-container').append(reviewHTML);
					});
					// Change text of toggle button to "hide"
					$('#toggle-reviews').text('hide');
				}
				error: function(xhr, status, error) {
					console.error('Error fetching reviews:', error);
				}
			});
		} else {
			// If reviews are already visible, hide them
			$('#review-container').empty();
			// Change text of toggle button to "show"
			$('#toggle-reviews').text('show');
		}
	}

	// Click event handler for the toggle button
	$('#toggle-reviews').click(function() {
		// Fetch and display reviews
		fetchReviews();
	});
});
