import styles from './about.module.css'
import fotoImg from '../../assents/foto-perfil.png'

function About() {
    return (
      <>
        <div className={styles.header}>
          <h1>
        QUERO SER UMA DEV
          </h1>
          <img src={fotoImg}/>

        <h2>
          Atualmente trabalho como analista de planejamento e estou em processo de migração de carreira.
        </h2>

        </div>
        <div className={styles.containerSobre}>
        
          <p>Tive o prazer de participar do curso no Preta Lab e aprender mais sobre Desenvolvimento Front End.</p>
          <p>Também participo de uma grupo muito bacana que se chama Admina.</p>
          <p> O admina é grupo de apoio na carreira de Produto e UX, sem objetivo financeiro e totalmente sem custo.</p>
          <p>Nele aprendemos e discutimos tudo sobre produto e seu desenvolvimento.</p>
          
        </div>
        


        
        </>
)
}
export default About