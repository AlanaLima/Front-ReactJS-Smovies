

const query=House;
const getSeries = () => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=c8efafb3e6f045642d03388215f1f3e2&query={$query}&language=pt-BR`)
        .then(results => results.json())
        
}

const id=1408;
const getSeriesdetails = () => {
    fetch(`https://api.themoviedb.org/3/tv/{$id}?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR`)
        .then(results => results.json())
        
}

const posterPath=lW7MvZ4m49IUj2UrUu4z0xVVl81.jpg;
const getSeriesdetails = () => {
    fetch(`https://image.tmdb.org/t/p/w500//{$posterPath}`)
        .then(results => results.json())
        
}

const getSeriesproviders = () => {
    fetch(`https://api.themoviedb.org/3/tv/{$id}/watch/providers?api_key=c8efafb3e6f045642d03388215f1f3e2`)
        .then(results => results.json())
}