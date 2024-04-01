import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
function Recepies() {
  return <>
    <PreviousSearches/>
    <div className="recepies-container">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
    </div>
  </>
}

export default Recepies