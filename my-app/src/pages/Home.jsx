import styles from '../components/Pages.module.css'
function Home () {
    return (
        <div>
            <h1 className={styles.titulo}>Home</h1>
            <p className={styles.parag}>Conteúdo da Página</p>
        </div>
    )
}

export default Home