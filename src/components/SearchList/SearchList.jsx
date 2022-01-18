import React from "react";
import { useState } from "react";
function SearchList(){
    
    //tratar para quando titulo for mais de uma palavra
    // fazer a lista ser clicavel

    const[title, setTitle]=useState('');
    const[list, setList]=useState([]);

     function onChange(event){
        setTitle(event.target.value);
        console.log(title);
        getMovie(title)
        console.log('passou aqui')
        
    };
        

      const getMovie = async (title) => {
          console.log('here');
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c8efafb3e6f045642d03388215f1f3e2&language=pt-BR&query=${title}`);
        const data = await response.json();//converte em json
        console.dir(data);
        if(data.page===1){
            setList(data.results); //limitar o tamanho do array
            console.log(list);
        }
        
        
        // return data;
        
      };
   
    
    return(
            
            <div>
                <input type="text" value={title} onChange={onChange}/>
                
                <ul>
                    {list.map(function(objs, index){
                        return <li>{objs.title}</li>
                    })}
                </ul>
               
            
            </div>  
    )

}
export default SearchList;