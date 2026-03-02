import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { id, title, image, desc, chef } = props.recipe;

  return (

    <Link to={`/recipes/details/${id}`} className='group block transition  duration-300 mr-4 block w-[28vw] overflow-hidden rounded-xl shadow-md hover:shadow-xl'>
      <img className='object-cover w-full h-[40vh]' src={image} alt="" />
      <h1 className='font-black mt-2 px-2'>{title}</h1>
      <small className='text-red-400 px-2'>{chef}</small>
      
     

      <p className='px-2 '>
        {desc.slice(0, 100)}...{""}
        <small className='text-blue-400'>more</small>
      </p>

    </Link>

  )
}

export default RecipeCard;
