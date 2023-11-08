function Saudacao ({nome}) {
    function gerarSaudacao (algumNome){
        return `Seu nome é ${algumNome}, certo?`
    }
    return (
        <>
            {nome && <h1>{gerarSaudacao(nome)}</h1>}
        </>
    )
} 

export default Saudacao