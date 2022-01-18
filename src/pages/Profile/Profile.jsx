import React from "react";
import Lists from "../../components/Lists/Lists";
import Logo from "../../components/Logo/Logo";
import UserProfile from "../../components/UserProfile/UserProfile";
import SearchList from "../../components/SearchList/SearchList";
import "./Profile.css";

function Profile(){
    //evento que pega a busca e atribui o valor digitado como a variavel querry
    //atributo filmes pesquisados que recebe o json(set)
    //pega o clique e o id
    return(
        <div>
            <div className="cabecalho">
                <Logo/>
                <SearchList></SearchList>
            </div>
            <div className="perfil">
                <UserProfile></UserProfile>
            </div>
           <div>
                <Lists/>    
           </div>
            
        </div>
    )
}
export default Profile;