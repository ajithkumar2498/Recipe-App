import React from 'react'
import CustomImages from './CustomImages'
function RecipeCard() {
  return <>
     <div className="recipe-card">
       <CustomImages imgSrc="/images/recepies/image_9.jpg" pt="65%"/>
       <div className="recipe-card-info">
        <img className="chef-img"src="/images/chefs/chef_01.jpg" alt="" />
         <p className="recipe-title">Raviouli cake</p>
         <p className="recipe-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut, commodi voluptate maiores hic nulla </p>
         <a href="!" className='view-btn'> View Recipe </a>
       </div>
     </div>
  </>
}
 
export default RecipeCard