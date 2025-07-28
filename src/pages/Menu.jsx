import React from 'react'
import FoodMenu from '../components/Menu/FoodMenu'
import DrinksMenu from '../components/Menu/DrinksMenu'
import DessertsMenu from '../components/Menu/DessertsMenu'

const Menu = () => {
  return (
    <div>
      <FoodMenu/>
      <DrinksMenu/>
      <DessertsMenu/>
    </div>
  )
}

export default Menu
