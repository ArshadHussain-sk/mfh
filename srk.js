document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const filmList = document.getElementById('film-list');
    const movieFilter = document.getElementById('movie-filter');

    const favoriteMovies = ['Raees', 'Jawan', 'Dilwale', 'Kuch Kuch Hota Hai', 'Chennai Express', 'Baazigar', 'Dil Se', 'Kal Ho Naa Ho'];

    function filterMovies() {
        console.log('Filtering movies...');
        const selectedFilter = movieFilter.value;
        console.log('Selected filter:', selectedFilter);
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
        console.log('Filtering complete');
    }

    // Add event listener to the filter dropdown
    movieFilter.addEventListener('change', filterMovies);

    // Call filterMovies once at the start to set initial state
    filterMovies();

    console.log('Event listener added to movie filter');
});
function toggleBio() {
    const bioContent = document.getElementById('bio-content');
    if (bioContent.style.display === "none" || bioContent.style.display === "") {
        bioContent.style.display = "block";
    } else {
        bioContent.style.display = "none";
    }
}