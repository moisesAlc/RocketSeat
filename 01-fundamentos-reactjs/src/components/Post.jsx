import styles from './Post.module.css'
import profilePic2 from '../assets/profile-pic2.png'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={profilePic2} alt="" />
          <div className={styles.authorInfo}>
            <strong>Raquel Vilarouca</strong>
            <span>Web Developer</span>
          </div>

          <time 
            title="11 de Maio às 09:08" 
            dateTime="2022-05-11 09:08:52">
              Publicado à 1h
          </time>
        </div>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">{' '}jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}