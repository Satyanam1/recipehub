import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-x-10 font-bold text-sm pt-10'>
      <NavLink className={(e)=>e.isActive ? "text-pink-400 hover:scale-110 duration-150" : ""} to='/'>Home</NavLink> 
      <NavLink className={(e)=>e.isActive ? "text-pink-400 hover:scale-110 duration-150" : ""} to='/recipes'>Recipes</NavLink> 
      <NavLink className={(e)=>e.isActive ? "text-pink-400 hover:scale-110 duration-150" : ""} to='/create-recipes'>Create Recipes</NavLink>
      <NavLink className={(e)=>e.isActive ? "text-pink-400 hover:scale-110 duration-150" : ""} to='/about'>About</NavLink> 
      <NavLink className={(e)=>e.isActive ? "text-pink-400 hover:scale-110 duration-150" : ""} to='/fav'>Favourite</NavLink> 
    </div>
  )
}

export default Nav;
