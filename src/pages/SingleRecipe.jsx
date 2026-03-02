import React, { useContext, useState } from 'react'
import { recipecontext } from '../context/RecipeContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {

  const navigate = useNavigate();

  const { data, setData } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: recipe?.image,
      title: recipe?.title,
      chef: recipe?.chef,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      category: recipe?.category,
      desc: recipe?.desc,
    },
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data]
    copydata[index] = { ...copydata[index], ...recipe }
    localStorage.setItem("recipes", JSON.stringify(copydata))
    setData(copydata)
    toast.success("Recipe Updated")
  }

  const DeleteHandler = () => {
    const filterData = data.filter((r) => r.id != params.id)
    localStorage.setItem("recipes", JSON.stringify(filterData))
    setData(filterData)
    toast.success("recipe deleted")
    navigate("/recipes")
  }

  const [favourite,setfavourite] =useState(
   JSON.parse(localStorage.getItem("fav")) || []
  ) ;

  const FavouriteHandler = () => {
    let copyfav=[...favourite]
    copyfav.push(recipe)
    setfavourite(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav))
    toast.success("Added to Favourite")
  }

  const UnFavHandler = () => {
    const filterfav = favourite.filter((f) => f.id != recipe?.id);
    setfavourite(filterfav)
    localStorage.setItem("fav", JSON.stringify(filterfav))
    toast.error("Removed from Favourite")
  }

  return recipe ?
    <div className='p-15 w-full flex'>

      <div className='p-10 w-1/1 relative'>

        {favourite.find((f) => f.id == recipe.id) ? (
          <i onClick={UnFavHandler} className="absolute right-[5%] ri-poker-hearts-fill text-4xl text-red-400  "></i>
        ) :
          <i onClick={FavouriteHandler} className="absolute right-[5%] ri-poker-hearts-line text-4xl text-red-400"></i>
        }


        <h2 className='text-5xl font-black mb-5 font-thin '>{recipe.title}</h2>
        <img className='h-[35vh] rounded ' src={recipe.image} alt="" />
        <h2 className='mt-5 mb-5 text-red-400 font-bold'>{recipe.chef}</h2>
        <p className='text-2xl '>{recipe.desc}</p>
      

      </div>

      <form className='w-1/2 p-2 ml-30' onSubmit={handleSubmit(SubmitHandler)}>

        <input type="url" {...register("image")} placeholder='Enter image url' className='border-b p-2 outline-0 block' />
        <input type="text" {...register("title")} placeholder='Recipe title' className='border-b p-2 outline-0 block' />
        <input type="text"{...register("chef")} placeholder='Chef Name' className='border-b p-2 outline-0 block' />
        <textarea className='block border-b outline-0 p-2 '
          {...register("desc")}

          placeholder='// write description from here'>
        </textarea>

        <textarea className='block border-b outline-0 p-2'
          {...register("ingr")}

          placeholder='//write ingredients seperated by comma' ></textarea>

        <textarea className='block border-b outline-0 p-2'
          {...register("inst")}

          placeholder='//write instructions seperated by comma' ></textarea>

        <select className='block border-b outline-0 text-white '
          {...register("category")}>

          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Diner</option>
        </select>

        <button className='mt-5 block px-4 py-2 bg-green-500 hover:scale-105 duration-150 rounded '>Update Recipe</button>
        <button className='mt-5 block px-4 py-2 bg-red-500 hover:scale-105 duration-150 rounded ' onClick={DeleteHandler} >Delete Recipe</button>
      </form>
    </div> : "Loading..."
}

export default SingleRecipe
