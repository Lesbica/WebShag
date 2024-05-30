class MovieService {
    static async search(title, type, page, apiKey) {
        const response = await fetch(`http://www.omdbapi.com/?s=${title}&type=${type}&page=${page}&apikey=${apiKey}`);
        return response.json();
    }

    static async getMovie(movieId, apiKey) {
        const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
        return response.json();
    }
}
