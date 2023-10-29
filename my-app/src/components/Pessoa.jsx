import PropTypes from 'prop-types'
import styles from './Pessoa.module.css'


function Pessoa ({nome, idade}) {
    return (
        <> 
            <h1 className={styles.pessoaContent}>Olá, seu nome é {nome}</h1>
            <p className={styles.pessoaContent}>Você possui {idade} anos, certo?</p>
        </>
    )
    
}

Pessoa.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number.isRequired
}

Pessoa.defaultProps = {
    nome: '[Sem nome]',
    idade: 0
}

export default Pessoa