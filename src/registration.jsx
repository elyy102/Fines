import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo from './logo'

function Registration() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logo />
    <div className="login">
      <div className="login_rectangle">
      <h1 className='login_rectangle_h1'>Регистрация</h1>
        <input className='login_input' type="email" placeholder='Введите email...' />
        <input className='password_input' type="text" placeholder='Введите имя...'/>
        <input className='login_input' type="number" placeholder='Введите номер телефона...'/>
        <input className='password_input' type="password" placeholder='Введите пароль...'/>
        <input className='login_input' type="password" placeholder='Повторите пароль...'/>
        <button className='login_btn'>Зарегистрироваться</button>
        <p className='login_p'>Уже есть аккаунт?
        <Link to={'/Login'}>
          <a href="">Войти</a>
        </Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default Registration