import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo from './logo'

function Application() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logo />
    <div className="login">
      <div className="login_rectangle">
      <h1 className='login_rectangle_h1'>Заявка</h1>
        <input className='login_input' type="date" placeholder='Введите дату нарушения...' />
        <input className='password_input' type="text" placeholder='Введите место нарушения...'/>
        <input className='login_input' type="text" placeholder='Введите номер машины...'/>
        <input className='password_input' type="file" placeholder='Прикрепите фото/видео...'/>
        <button className='login_btn'>Отправить</button>
      </div>
    </div>
    </>
  )
}

export default Application