import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
function Recepies() {
  const recipes = [
    {
      title:"noodles",
      image:"images/recepies/image_1.jpg",
      Author:"images/chefs/chef_01.jpg"
    },
    {
      title:"chicken pan pizza",
      image:"images/recepies/image_2.jpg",
      Author:"images/chefs/chef_01.jpg"
    },
    {
      title:"Chicken kebab",
      image:"images/recepies/image_3.jpg",
      Author:"images/chefs/chef_05.jpeg"
    },
    {
      title:"Sushi",
      image:"images/recepies/image_4.jpg",
      Author:"images/chefs/chef_02.jpg"
    },
    {
      title:"Lamb Cheese Burger",
      image:"images/recepies/image_5.jpg",
      Author:"images/chefs/chef_06.jpeg"
    },
    {
      title:"CHicken Pilav",
      image:"images/recepies/image_6.jpg",
      Author:"images/chefs/chef_04.jpg"
    },
    {
      title:"Mushroom Prawns Curry",
      image:"images/recepies/image_7.jpg",
      Author:"images/chefs/chef_04.jpg"
    },
    {
      title:"Baked Rice Casserole ",
      image:"images/recepies/image_8.jpg",
      Author:"images/chefs/chef_06.jpeg"
    },
    {
      title:"Goodale Farms Duck Breast",
      image:"images/recepies/image_9.jpg",
      Author:"images/chefs/chef_06.jpeg"
    },
    {
      title:"Greek Stuffed Eggplants",
      image:"images/recepies/image_17.jpg",
      Author:"images/chefs/chef_01.jpg"
    },
    {
      title:"Red & Green Chile Breakfast Burritos",
      image:"images/recepies/image_21.png",
      Author:"images/chefs/chef_02.jpg"
    },
    {
      title:"Baked Lasagna",
      image:"images/recepies/image_19.png",
      Author:"images/chefs/chef_03.jpg"
    },
    {
      title:"Chicken Chettinad",
      image:"images/recepies/image_10.jpg",
      Author:"images/chefs/chef_05.jpeg"
    },
    {
      title:"Braised Lamb Chops",
      image:"images/recepies/image_13.jpg",
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