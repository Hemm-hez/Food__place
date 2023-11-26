import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../hooks/context'
import { Link } from 'react-router-dom';

const Mealboxes = () => {
  const {loading,shopItems}= useGlobalContext();
  if (loading){
    return <Loading/>
  }
  if (shopItems.length < 1){
    return <h2 className="text-danger text-center">No food Found for your Search</h2>
  }
  return (
    <div id='below' className='single_meal'>
      {
        shopItems.map((meal)=>{
          const {idMeal,strMealThumb,strTags,strCategory,strMeal}= meal
          return <Link className='text-decoration-none' to={`/meal/${idMeal}`} key={idMeal}>
          <div className='mealplate'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p className='py-2'>{strCategory}</p>
            </div>
          </Link>
        })
      }
    </div>
  )
}

export default Mealboxes