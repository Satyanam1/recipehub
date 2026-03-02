import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate();

    const { data, setData } = useContext(recipecontext);

    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        const copydata = [...data]
        copydata.push(recipe)
        setData(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("Recipe created")
        reset();
        navigate("/recipes");

    }

    return (
        // <div className='min-h-screen flex justify-center items-center '>
        //     <div className='w-full max-w-xl bg-[#1e293b] p-8 rounded-2xl shadow-2xl'> 
        //     <form  onSubmit={handleSubmit(SubmitHandler)}>

        //         <input type="url" {...register("image")} placeholder='Enter image url' className='border-b p-2 outline-0 block' />
        //         <input type="text" {...register("title")} placeholder='Recipe title' className='border-b p-2 outline-0 block' />
        //         <input type="text"{...register("chef")} placeholder='Chef Name' className='border-b p-2 outline-0 block' />
        //         <textarea className='block border-b outline-0 p-2 '
        //             {...register("desc")}
        //             placeholder='// write description from here'>
        //         </textarea>

        //         <textarea className='block border-b outline-0 p-2'
        //             {...register("ingr")}
        //             placeholder='//write ingredients seperated by comma' ></textarea>

        //         <textarea className='block border-b outline-0 p-2'
        //             {...register("inst")}
        //             placeholder='//write instructions seperated by comma' ></textarea>

        //         <select className='block border-b outline-0 text-white '
        //             {...register("category")}>
        //             <option value="breakfast">Breakfast</option>
        //             <option value="lunch">Lunch</option>
        //             <option value="dinner">Diner</option>
        //         </select>

        //         <button className='mt-5 block px-4 py-2 bg-gray-900 hover:scale-105 duration-150 rounded '>Save Recipe</button>

        //     </form>
        //     </div>
        // </div>

        <div className="min-h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-xl bg-[#1e293b] p-8 rounded-2xl shadow-2xl">

                <h2 className="text-3xl font-bold mb-6 text-center text-pink-400">
                    Create New Recipe
                </h2>

                <form
                    onSubmit={handleSubmit(SubmitHandler)}
                    className="space-y-5"
                >

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Image URL
                        </label>
                        <input
                            type="url"
                            {...register("image")}
                            placeholder="Enter image url"
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition"
                        />
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Recipe Title
                        </label>
                        <input
                            type="text"
                            {...register("title")}
                            placeholder="Recipe title"
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition"
                        />
                    </div>

                    {/* Chef */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Chef Name
                        </label>
                        <input
                            type="text"
                            {...register("chef")}
                            placeholder="Chef name"
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Description
                        </label>
                        <textarea
                            {...register("desc")}
                            rows="3"
                            placeholder="Write description here..."
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition resize-none"
                        />
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Ingredients (comma separated)
                        </label>
                        <textarea
                            {...register("ingr")}
                            rows="3"
                            placeholder="Salt, Sugar, Oil..."
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition resize-none"
                        />
                    </div>

                    {/* Instructions */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Instructions (comma separated)
                        </label>
                        <textarea
                            {...register("inst")}
                            rows="3"
                            placeholder="Step 1, Step 2, Step 3..."
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition resize-none"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-1 text-sm text-gray-400">
                            Category
                        </label>
                        <select
                            {...register("category")}
                            className="w-full bg-transparent border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition"
                        >
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        className="w-full mt-4 bg-pink-500 hover:bg-pink-600 transition duration-300 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-pink-500/30 hover:scale-102"
                    >
                        Save Recipe
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Create
