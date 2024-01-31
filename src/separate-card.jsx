import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Car1 from './assets/car-1.jpeg'
import Logo from './logo'

function Separate_card() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logo />
      <div className="separate_card">
        <div className="separate_card_content">
          <img src={Car1} alt="" />
            <p>Дата нарушения: 15.01.24</p>
            <p>Место нарушения: г. Оренбург, ул. Чкалова</p>
            <p>Номер машины: B707OP</p>
        <div className="separate_card_btn">
           <button className='separate_card_btn_1'>Принять</button>
           <button className='separate_card_btn_2'>Отклонить</button> 
        </div>  
        </div>
        
      </div>
    </>
  )
}

export default Separate_card
