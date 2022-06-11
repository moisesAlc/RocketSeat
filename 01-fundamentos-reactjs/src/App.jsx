import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="Moisés Madeira"
        content="Que legal"
      />
      <Post 
        author="João Gonçalves"
        content="Que jóia"
      />
    </div>
  )
}
