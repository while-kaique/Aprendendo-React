import { useState } from "react"

function Condicional () {

    function enviarEmail (e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail () {
        setUserEmail('')
    }

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    return (
        <form onSubmit={enviarEmail}>
            <div>
                <label htmlFor="email">Digite o email:</label>
                <input type="text" id="email" placeholder="Digite o email" 
                onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
                <input type="submit" value="Enviar" />
            </div>
            {userEmail && (
                <div>
                    <h4>O email do usuário é {userEmail}</h4>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </form>
    )
}

export default Condicional