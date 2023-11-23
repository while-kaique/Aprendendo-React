function Saudacao ({nome, setNome}) {
    function gerarSaudacao (algumNome){
        return `Seu nome é ${algumNome}, certo?`
    }
    

    if (nome && nome[0] === ' '){
        nome = undefined
        return(
            <>
                {<h1>Por favor, não comece com espaços!</h1>}
            </>
        )
    }

    return (
        <>
            {nome && <h1>{gerarSaudacao(nome)}</h1>}
        </>
    )
} 

export default Saudacao