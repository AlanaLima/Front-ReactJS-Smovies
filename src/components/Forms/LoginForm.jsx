import React from "react";
import Button from "../Button/Button";
import "./Form.css"

function LoginForm(props){
    // const onClick=()=>{
    //     fetch( get e verifica senha apidousuario)
    // }
    return(
        <div className="div">
            <form>
                <div>
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" />
                </div>
               <Button>Entrar</Button>
            </form>
        </div>
    )

}
export default LoginForm;