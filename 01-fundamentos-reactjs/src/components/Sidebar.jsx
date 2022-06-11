import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import coverImg from '../assets/cover.png'
import profilePic from '../assets/profile-pic.png'
export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={coverImg} alt="" 
      />
      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src={profilePic} 
        />
        <strong>Natália Catunda</strong>
        <span>Poetisa e Artista Plástica</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar meu perfil
        </a>
      </footer>
      
    </aside>
  )
}