import React from "react";
import { useState } from "react";
import "./Moviesdetails.css"

function Moviesdetails(){

    const[id, setId]=useState('');
    const[Movie, setMovie]=useState({});
    const[Providers, setProviders]=useState({});
    const [posterPath, setposterPath]=useState('');

    function onChange(event){
        setId(event.target.value);
        console.log(id);
        getMoviesdetails(id)
        getMoviesproviders(id)
        console.log('passou aqui')
        
    };

    const getMoviesdetails = async (id) => {
    const responsedetails = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR`)
    const dataMoviedetails =  await responsedetails.json();
    console.log(dataMoviedetails);
    setMovie(dataMoviedetails);
    console.log('https://image.tmdb.org/t/p/w500//'+ Movie.poster_path)
    setposterPath('https://image.tmdb.org/t/p/w500//'+ Movie.poster_path)
    };

    const getMoviesproviders = async (id) => {
    const responseproviders =await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR&region=BR`)
    const dataProviders =  await responseproviders.json();
    console.log(dataProviders);
    setProviders(dataProviders);
    };

    


 
    return(
        <div className='main'>
            <input type="text" value={id} onChange={onChange}/>
            
            <div className="all">
                <img src={posterPath} alt="Movie poster" width="500" height="600"/>
                <div className="infos">
                    <h3> {Movie.title}</h3>
                    <p> {Movie.overview}</p>
                </div>
            </div>
            <div>
            <p>provedores </p> 
            </div>
            
            
        </div>
    )

}
export default Moviesdetails;
