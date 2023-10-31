import { useState } from 'react'

function Form () {

    function cadastrarUsuario(e) {
        console.log(name)
        console.log('Cadastrou o usuário')
        console.log(`O usuário é "${name}" e sua senha é: "${password}"`)
        e.preventDefault()
    }

    const [name, setName] = useState('SEM NOME')

    const [password, setPassword] = useState('INDEFINIDA')

    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="username">Seu nome: </label>
                    <input type="text" name='name' id="username" placeholder="Digite seu nome"
                    onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="password">Sua senha: </label>
                    <input type="password" id="password" placeholder="Digite sua senha"
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form;