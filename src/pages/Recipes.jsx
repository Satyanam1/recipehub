import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';




const Recipes = () => {

  
  
  const { data } = useContext(recipecontext);
  
  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))
  
 

  return (
    <div className=' p-10 flex flex-wrap h-screen'>
      {renderrecipes}

    </div>

    
  )
}

export default Recipes;
