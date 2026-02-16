import React, { useContext } from 'react'
import './FoodDisplay.css'
import { seyiContext } from '../../context/StoreContext'   
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  const { food_list } = seyiContext()
  
  return (
    <div className='food-display' id='food-diplay'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item)=>{
              return <FoodItem key={item._id} item={item} />

            })}

        </div>
      
    </div>
  )
}

export default FoodDisplay
