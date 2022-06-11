import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Moisés Madeira"
            content="Que legal"
          />
          <Post 
            author="João Gonçalves"
            content="Que jóia"
          />
        </main>
      </div>
    </div>
  )
}
