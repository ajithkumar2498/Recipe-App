import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
function Recepies() {
  const recipes = [
    {
      recipename:"noodles",
      recipeimage:"images/recepies/image_1.jpg",
      Author:"images/chefs/chef_01.jpg"
    },
    {
      recipename:"chicken pan pizza",
      recipeimage:"images/recepies/image_2.jpg",
      Author:"images/chefs/chef_01.jpg"
    },
    {
      recipename:"Chicken kebab",
      recipeimage:"images/recepies/image_3.jpg",
      Author:"images/chefs/chef_05.jpeg"
    },
    {
      recipename:"Sushi",
      recipeimage:"images/recepies/image_4.jpg",
      Author:"images/chefs/chef_02.jpg"
    },
    {
      recipename:"Lamb Cheese Burger",
      recipeimage:"images/recepies/image_5.jpg",
      Author:"images/chefs/chef_06.jpeg"
    },
    {
      recipename:"CHicken Pilav",
      recipeimage:"images/recepies/image_6.jpg",
      Author:"images/chefs/chef_04.jpg"
    },
    {
      recipename:"Mushroom Prawns Curry",
      recipeimage:"images/recepies/image_7.jpg",
      Author:"images/chefs/chef_04.jpg"
    },
    {
      recipename:"Baked Rice Casserole ",
      recipeimage:"images/recepies/image_8.jpg",
      Author:"images/chefs/chef_06.jpeg"
    },
    {
      recipename:"Goodale Farms Duck Breast",
      recipeimage:"images/recepies/image_9.jpg",
      Author:"images/chefs/chef_06.jpeg"
    },
    {
      recipename:"Greek Stuffed Eggplants",
      recipeimage:"images/recepies/image_17.jpg",
      Author:"images/chefs/chef_01.jpg"
    },
    {
      recipename:"Red & Green Chile Breakfast Burritos",
      recipeimage:"images/recepies/image_21.png",
      Author:"images/chefs/chef_02.jpg"
    },
    {
      recipename:"Baked Lasagna",
      recipeimage:"images/recepies/image_19.png",
      Author:"images/chefs/chef_03.jpg"
    },
    {
      recipename:"Chicken Chettinad",
      recipeimage:"images/recepies/image_10.jpg",
      Author:"images/chefs/chef_05.jpeg"
    },
    {
      recipename:"Braised Lamb Chops",
      recipeimage:"images/recepies/image_13.jpg",
      Author:"images/chefs/chef_06.jpeg"
    }
   
  ].sort(()=> Math.random() - 0.5)
  return <>
    <PreviousSearches/>
    <div className="recepies-container">
      {
        recipes.map((re, index)=>(
          <RecipeCard key={index} re={re}/>
        
        ))
      }
        
    </div>
  </>
}

export default Recepies