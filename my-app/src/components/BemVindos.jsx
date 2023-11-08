function BemVindos ( { setNome } ) {
    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Qual seu nome?" onChange={(e)=>setNome(e.target.value)} /> 
        </div>
    )
}

export default BemVindos    