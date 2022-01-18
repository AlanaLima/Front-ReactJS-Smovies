

const query="Matrix";
const getMovies = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR&query=${query}`)
        .then(results => results.json())
        
}

const id=603;
const getMoviesdetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR`)
        .then(results => results.json())
        
}

const posterPath=lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg;
const getMoviesdetails = () => {
    fetch(`https://image.tmdb.org/t/p/w500//${posterPath}`)
        .then(results => results.json())
        
}

const getMoviesproviders = () => {
    fetch(`https://api.themoviedb.org/3/movie/{$id}/watch/providers?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR&region=BR`)
        .then(results => results.json())
        
}



