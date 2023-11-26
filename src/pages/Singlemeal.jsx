import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import ReactPlayer from 'react-player'

const Singlemeal = () => {
  const {id} = useParams();
  const [isLoading, setIsloading]=useState(true);
  const [meal, setMeal] = useState(null);
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  const mealGet = async ()=>{
    try{
      const res = await fetch (`${url} ${id}`);
      const data = await res.json();
      console.log(data.meals);
      setIsloading(false);
      if (data.meals){
        const {strYoutube,
          strMeal,
          strMealThumb,
          strInstructions,
          strTags,
          strCategory,
          strArea} 
          =data.meals[0]
          setMeal(
            {strYoutube,
              strMeal,
              strMealThumb,
              strInstructions,
              strTags,
              strCategory,
              strArea} 
          )
      }
      else {
        setMeal(null)
      }
    }
      catch(error){
        console.log(error)
      }
  }
  useEffect(()=>{
    setTimeout(() => {
      mealGet(); 
    }, 2000);
    
  }, [])

  if(isLoading){
    return <Loading/>
  }
  return (
    <div className='contianer mt-2'>
      <div className="singleDesc">
        <img src={meal.strMealThumb} alt="" />
        <p ><span className='bg-success py-1 px-2 rounded-2 mt-1 me-2 fw-semibold text-light'>Name :</span>{meal.strMeal}</p>
        <p ><span className='bg-success py-1 px-2 rounded-2 mt-1  me-2 fw-semibold text-light'>Tags :</span>{meal.strTags}</p>
        <p ><span className='bg-success py-1 px-2 rounded-2 mt-1  me-2 fw-semibold text-light'>Category :</span>{meal.strCategory}</p>
        <p ><span className='bg-success py-1 px-2 rounded-2 mt-1  me-2 fw-semibold text-light'>Area :</span>{meal.strArea}</p>
        <p ><span className='bg-success py-1 px-2 rounded-2 mt-1  me-2 fw-semibold text-light'>Instructions :</span>{meal.strInstructions}</p>
        <p ><span className='bg-success py-1 px-2 rounded-2 mt-1  me-2 fw-semibold text-light'>Video Instructions :</span></p>
        <div className="mt-2">
          <ReactPlayer url={meal.strYoutube} width={"100"} height={"400px"} playing={true} controls={true}/>
        </div>
      </div>
    </div>
  )
}

export default Singlemeal