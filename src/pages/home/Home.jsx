import styles from './home.module.css'
import homeImg from '../../assents/home.svg'

function Home(){
    return(
        <>
        <div className= {styles.header}>
            <h1>
              Quero ser DEV
            </h1>
            <img src={homeImg}/>
        </div>

        <div className={styles.subtitulo}>
        <h2>
         Analista de planejamento migrando para a área de Tecnologia.

         </h2>
      </div>
      <div className={styles.qualificacao}>
        
      <p>Validações e testes de alterações sistêmicas. </p>
      <p>Cursando Java Script, HTML e CSS no PretaLab . </p>
      <p>Certificação Scrum Fundamentals Certified - Scrum Study.</p>
      <p>MBA em Gestão Estratégicas de Negócios.</p>

      </div>
        </>
    )
}
export default Home