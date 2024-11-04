
document.addEventListener('DOMContentLoaded', function() {
    const filmList = document.getElementById('film-list');
    const movieFilter = document.getElementById('movie-filter');
  
    const favoriteMovies = ['Nanban', 'Thuppakki', 'Kaththi', 'Theri', 'Mersal', 'Master', 'Leo'];
  
    function filterMovies() {
        const selectedFilter = movieFilter.value;
        const films = filmList.getElementsByTagName('li');
  
        for (let film of films) {
            const title = film.getAttribute('data-title');
            const rating = parseFloat(film.getAttribute('data-rating'));
  
            switch (selectedFilter) {
                case 'favorites':
                    film.style.display = favoriteMovies.includes(title) ? '' : 'none';
                    break;
                case 'top-rated':
                    film.style.display = rating >= 7 ? '' : 'none';
                    break;
                default:
                    film.style.display = '';
            }
        }
    }
  
    movieFilter.addEventListener('change', filterMovies);
  
  
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupYear = document.getElementById('popup-year');
    const popupRating = document.getElementById('popup-rating');
    const closePopup = document.getElementById('close-popup');
  
    filmList.addEventListener('click', function(e) {
        const film = e.target.closest('li');
        if (film) {
            popupTitle.textContent = film.getAttribute('data-title');
            popupYear.textContent = `Year: ${film.getAttribute('data-year')}`;
            popupRating.textContent = `Rating: ${film.getAttribute('data-rating')}`;
            popup.style.display = 'flex';
        }
    });
  
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
  });
  function toggleBio() {
    const bioContent = document.getElementById('bio-content');
    if (bioContent.style.display === "none" || bioContent.style.display === "") {
        bioContent.style.display = "block";
    } else {
        bioContent.style.display = "none";
    }
}
  