import { useState } from 'react'
import './App.css'

function Logo() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='logo'>Штрафам <span>ДА</span>!</h1>
    </>
  )
}

export default Logo
