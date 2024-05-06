import React, { useEffect } from 'react'
import CustomImages from './CustomImages'
import { useNavigate } from 'react-router-dom'

function RecipeCard({re}) {
  const navigate = useNavigate()

  // useEffect(()=>{

  // },[])
  return <>
     <div className="recipe-card">
       <CustomImages imgSrc={re.recipeimage} pt="65%"/>
       <div className="recipe-card-info">
        <img className="chef-img" src={re.Author} alt="" />
         <p className="recipe-title">{re.recipename}</p>
         <p className="recipe-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut, commodi voluptate maiores hic nulla </p>
         <button  className='view-btn' onClick={()=> navigate('/recipecard')}> View Recipe </button>
       </div>
     </div>
  </>
}
 
export default RecipeCard