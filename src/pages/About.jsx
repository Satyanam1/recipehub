import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-pink-400">
          About RecipeHub 🍳
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A modern recipe management application built using React.
          Create, update, delete and favorite your own delicious recipes.
        </p>
      </div>

      {/* Project Info Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {/* About Project */}
        <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">
             About The Project
          </h2>
          <p className="text-gray-300 leading-relaxed">
            RecipeHub is a CRUD-based React application where users can
            create their own recipes, update them, delete them and mark
            their favorites. The data is stored using localStorage for
            persistence and managed globally using React Context API.
          </p>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">
            ⚙️ Technologies Used
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>• React JS</li>
            <li>• React Router DOM</li>
            <li>• React Hook Form</li>
            <li>• Context API</li>
            <li>• Tailwind CSS</li>
            <li>• React Toastify</li>
          </ul>
        </div>

        {/* What I Learned */}
        <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">
            What I Learned
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Through building this project, I improved my understanding of:
            global state management, routing, reusable components,
            form handling, UI design, and clean project structuring.
          </p>
        </div>

        {/* Future Improvements */}
        <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">
             Future Improvements
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Add authentication system</li>
            <li>• Add backend with database</li>
            <li>• Add rating & comments system</li>
            <li>• Add dark/light theme toggle</li>
          </ul>
        </div>

      </div>

      {/* Developer Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">
          👨‍💻 About The Developer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I built this project to strengthen my React skills and improve
          my frontend development capabilities. I'm continuously learning
          and building projects to grow as a developer.
        </p>
      </div>

    </div>
  );
};

export default About;