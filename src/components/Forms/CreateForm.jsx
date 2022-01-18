import React from "react";
import Button from "../Button/Button";
import "./Form.css"

function CreateForm(props){
    // const onClick=()=>{
    //     fetch( post apidousuario)
    // }
    return(
        <div className="div">
            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Descrição</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" />
                </div>

               <Button>Criar conta</Button>
            </form>
        </div>
    )

}
export default CreateForm;