function toggleReview() {
    var reviewsContainer = document.getElementById('reviewsContainer');
    if (reviewsContainer.style.display === 'none') {
        reviewsContainer.style.display = 'block';
    } else {
        reviewsContainer.style.display = 'none';
    }
}
