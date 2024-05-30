document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '4e081ec5';
    const form = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');
    const paginationDiv = document.getElementById('pagination');
    const loadingDiv = document.getElementById('loading');
    const detailsDiv = document.getElementById('details');
    const detailsContentDiv = document.getElementById('detailsContent');
    const detailsLoadingDiv = document.getElementById('detailsLoading');
    const moreButton = document.getElementById('moreButton');

    let currentPage = 1;
    let totalPages = 0;
    let currentTitle = '';
    let currentType = '';

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        currentTitle = document.getElementById('title').value;
        currentType = document.getElementById('type').value;
        currentPage = 1;
        await searchMovies(currentTitle, currentType, currentPage);
    });

    moreButton.addEventListener('click', async function () {
        if (currentPage < totalPages) {
            currentPage++;
            await searchMovies(currentTitle, currentType, currentPage, true);
        }
    });

    async function searchMovies(title, type, page, append = false) {
        showLoading();
        const data = await MovieService.search(title, type, page, apiKey);
        hideLoading();
        if (data.Response === "True") {
            displayMovies(data.Search, append);
            totalPages = Math.ceil(data.totalResults / 10);
            setupPagination(totalPages, page);
            moreButton.style.display = (currentPage < totalPages) ? 'block' : 'none';
        } else {
            resultsDiv.innerHTML = '<p>Movie not found!</p>';
        }
    }

    function displayMovies(movies, append) {
        if (!append) {
            resultsDiv.innerHTML = '';
        }
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <p>${movie.Title} (${movie.Year})</p>
                <button onclick="showDetails('${movie.imdbID}')">Details</button>
            `;
            resultsDiv.appendChild(movieDiv);
        });
    }

    function setupPagination(totalPages, currentPage) {
        paginationDiv.innerHTML = '';

        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&laquo;';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                searchMovies(currentTitle, currentType, currentPage);
            }
        });
        paginationDiv.appendChild(prevButton);

        const pageButtons = getPaginationButtons(totalPages, currentPage);
        pageButtons.forEach(page => {
            const pageButton = document.createElement('button');
            pageButton.innerText = page;
            if (page === '...') {
                pageButton.disabled = true;
            } else {
                pageButton.disabled = page === currentPage;
                pageButton.addEventListener('click', () => {
                    currentPage = page;
                    searchMovies(currentTitle, currentType, currentPage);
                });
            }
            paginationDiv.appendChild(pageButton);
        });

        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&raquo;';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                searchMovies(currentTitle, currentType, currentPage);
            }
        });
        paginationDiv.appendChild(nextButton);
    }

    function getPaginationButtons(totalPages, currentPage) {
        let pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pages = [1, 2, 3, 4, 5, '...', totalPages];
            } else if (currentPage >= totalPages - 3) {
                pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }
        return pages;
    }

    window.showDetails = async function (imdbID) {
        showModalLoading();
        const movie = await MovieService.getMovie(imdbID, apiKey);
        if (movie.Response === "True") {
            displayDetails(movie);
        }
    };

    function displayDetails(movie) {
        detailsLoadingDiv.style.display = 'none';
        detailsContentDiv.style.display = 'block';
        detailsContentDiv.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p><strong>Released:</strong> ${movie.Released}</p>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Country:</strong> ${movie.Country}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Writer:</strong> ${movie.Writer}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Awards:</strong> ${movie.Awards}</p>
        `;
    }

    function showLoading() {
        loadingDiv.style.display = 'block';
    }

    function hideLoading() {
        loadingDiv.style.display = 'none';
    }

    function showModalLoading() {
        detailsDiv.style.display = 'block';
        detailsLoadingDiv.style.display = 'block';
        detailsContentDiv.style.display = 'none';
    }

    window.hideDetails = function () {
        detailsDiv.style.display = 'none';
    };
});
