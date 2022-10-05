import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

function Menu() {
    return(
      <nav>
        <ul className={styles.listamenu }>
        <li >
          <Link className={ styles.headermenu } to="/">Home</Link>
        </li>
        <li >
          <Link  className={ styles.headermenu } to="/about">Sobre</Link>
        </li>
        <li >
          <Link className={ styles.headermenu } to="/comments">Comentários</Link>
        </li>
        <li >
          <Link className={ styles.headermenu } to="/contact">Contato</Link>
        </li>
      </ul>
      </nav>
    )
}
export default Menu