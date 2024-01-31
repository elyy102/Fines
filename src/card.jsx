import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Car1 from './assets/car-1.jpeg'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="profile_myapplication">
        <img src={Car1} alt="" />
        <p>Дата нарушения: 15.01.24</p>
        <p>Место нарушения: г. Оренбург, ул. Чкалова</p>
        <p>Номер машины: АУ290Н</p>
        <p className="status">Заявка принята</p>
      </div>
    </>
  )
}

export default Card
