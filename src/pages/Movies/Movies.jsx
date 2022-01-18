import React from "react";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import Moviesdetails from "../../components/Moviesdetails/Moviesdetails";
import "./Movies.css";
function Movies(){
    // function onClickquerover(){
    //     fetch(post na api do usuario)
    // }
    // function onClickvisto(){
    //     fetch(post na api do usuario)
    // }
    // function onClickfavoritos(){
    //     fetch(post na api do usuario)
    // }
    // function onClickvendo(){
    //abrir uma janela pgtando progresso
    //     fetch(post na api do usuario)
    // }
    return(
        <div className="div">
            <div>
                <Logo className="teste"/>
            </div>
            <div className="perfil">
                <Moviesdetails/>
            </div>
            <div className="botoes">
               <Button>Favorito</Button>
                <Button>Quero ver</Button>
                <Button>Visto</Button>
                <Button>Vendo</Button>
            </div>
            
        </div>
    )

}
export default Movies;