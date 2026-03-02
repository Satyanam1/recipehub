import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useContext(recipecontext);
  const navigate = useNavigate();

  return (
    <div className="w-full mt-5">

      {/* HERO SECTION */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://as1.ftcdn.net/v2/jpg/19/21/86/20/1000_F_1921862012_GiTHueY2Qdsp9DaotzCZ1Kk0HyQvekkM.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f172a]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-8xl font-extrabold text-white">
            RecipeHub 🍳
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
            Discover, create and save your favorite recipes in one beautiful place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/recipes")}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl text-white font-semibold transition hover:scale-105"
            >
              Explore Recipes
            </button>

            <button
              onClick={() => navigate("/create-recipes")}
              className="px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 rounded-xl text-white transition"
            >
              Create Recipe
            </button>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-[#0f172a] py-16 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-bold text-pink-400">{data.length}</h2>
            <p className="mt-2 text-gray-400">Total Recipes</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-400">
              {[...new Set(data.map(r => r.category))].length}
            </h2>
            <p className="mt-2 text-gray-400">Categories</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-400">
              {JSON.parse(localStorage.getItem("fav"))?.length || 0}
            </h2>
            <p className="mt-2 text-gray-400">Favourites</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;