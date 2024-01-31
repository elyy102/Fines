import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Car1 from './assets/car-1.jpeg'

function Card_admin() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="profile_myapplication">
        <img src={Car1} alt="" />
        <div className="card_admin_btn">
           <button className='card_admin_btn_1'>Принять</button>
           <button className='card_admin_btn_2'>Отклонить</button> 
        </div>
        
      </div>
    </>
  )
}

export default Card_admin
