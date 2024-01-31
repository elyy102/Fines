import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo from './logo'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logo />
    <div className="login">
      <div className="login_rectangle">
      <h1 className='login_rectangle_h1'>Вход</h1>
        <input className='login_input' type="email" placeholder='Введите логин...'/>
        <input className='password_input' type="password" placeholder='Введите пароль...'/>
        <button className='login_btn'>Войти</button>
        <p className='login_p'>Еще нет аккаунта?
        <Link to={'/Registration'}>
          <a href="">Зарегистрироваться</a>
        </Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login
