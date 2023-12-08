import { useState } from 'react'
import ChatsPage from './ChatPage'
import Auth from './Auth'
import './App.css'

function App() {
  const [user, setUser] = useState(undefined)
  if(!user){
    return <Auth onAuth={(user) => setUser(user)}/>
  } else{
    return <ChatsPage user={user}/>
  }
}

export default App
