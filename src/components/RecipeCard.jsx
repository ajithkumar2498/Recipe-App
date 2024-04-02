import React from 'react'
import CustomImages from './CustomImages'
function RecipeCard({re}) {
  return <>
     <div className="recipe-card">
       <CustomImages imgSrc={re.image} pt="65%"/>
       <div className="recipe-card-info">
        <img className="chef-img" src={re.Author} alt="" />
         <p className="recipe-title">{re.title}</p>
         <p className="recipe-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut, commodi voluptate maiores hic nulla </p>
         <button  className='view-btn'> View Recipe </button>
       </div>
     </div>
  </>
}
 
export default RecipeCard