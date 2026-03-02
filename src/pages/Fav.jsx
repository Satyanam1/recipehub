import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Fav = () => {
   const favourite = JSON.parse(localStorage.getItem("fav") || []);

  const renderrecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
    
  ))

  return (
    <div className='h-screen p-10 flex flex-wrap'>
     {favourite.length>0 ? renderrecipes: "No favourite Found!"}

    </div>
  )
}

export default Fav
