import { useState } from 'react'
import './App.css'
import Login from './login'
import Logo from './logo'
import Profile from './profile'
import Profile_admin from './profile_admin'
import Separate_card from './separate-card'
import Application from './application'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile />
    </>
  )
}

export default App
