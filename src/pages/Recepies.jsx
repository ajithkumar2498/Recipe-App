import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
function Recepies() {
  const recipes = [
    {
      recipename:"noodles",
      recipeimage:"recipeimages/recepies/recipeimage_1.jpg",
      Author:"recipeimages/chefs/chef_01.jpg"
    },
    {
      recipename:"chicken pan pizza",
      recipeimage:"recipeimages/recepies/recipeimage_2.jpg",
      Author:"recipeimages/chefs/chef_01.jpg"
    },
    {
      recipename:"Chicken kebab",
      recipeimage:"recipeimages/recepies/recipeimage_3.jpg",
      Author:"recipeimages/chefs/chef_05.jpeg"
    },
    {
      recipename:"Sushi",
      recipeimage:"recipeimages/recepies/recipeimage_4.jpg",
      Author:"recipeimages/chefs/chef_02.jpg"
    },
    {
      recipename:"Lamb Cheese Burger",
      recipeimage:"recipeimages/recepies/recipeimage_5.jpg",
      Author:"recipeimages/chefs/chef_06.jpeg"
    },
    {
      recipename:"CHicken Pilav",
      recipeimage:"recipeimages/recepies/recipeimage_6.jpg",
      Author:"recipeimages/chefs/chef_04.jpg"
    },
    {
      recipename:"Mushroom Prawns Curry",
      recipeimage:"recipeimages/recepies/recipeimage_7.jpg",
      Author:"recipeimages/chefs/chef_04.jpg"
    },
    {
      recipename:"Baked Rice Casserole ",
      recipeimage:"recipeimages/recepies/recipeimage_8.jpg",
      Author:"recipeimages/chefs/chef_06.jpeg"
    },
    {
      recipename:"Goodale Farms Duck Breast",
      recipeimage:"recipeimages/recepies/recipeimage_9.jpg",
      Author:"recipeimages/chefs/chef_06.jpeg"
    },
    {
      recipename:"Greek Stuffed Eggplants",
      recipeimage:"recipeimages/recepies/recipeimage_17.jpg",
      Author:"recipeimages/chefs/chef_01.jpg"
    },
    {
      recipename:"Red & Green Chile Breakfast Burritos",
      recipeimage:"recipeimages/recepies/recipeimage_21.png",
      Author:"recipeimages/chefs/chef_02.jpg"
    },
    {
      recipename:"Baked Lasagna",
      recipeimage:"recipeimages/recepies/recipeimage_19.png",
      Author:"recipeimages/chefs/chef_03.jpg"
    },
    {
      recipename:"Chicken Chettinad",
      recipeimage:"recipeimages/recepies/recipeimage_10.jpg",
      Author:"recipeimages/chefs/chef_05.jpeg"
    },
    {
      recipename:"Braised Lamb Chops",
      recipeimage:"recipeimages/recepies/recipeimage_13.jpg",
      Author:"recipeimages/chefs/chef_06.jpeg"
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