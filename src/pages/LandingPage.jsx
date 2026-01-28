import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LHS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2
            className="font-bold text-5xl md:text-4xl md:text-6xl mb-8 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            ReactRev
          </h2>

          <h1 className="font-semibold text-xl md:text-6xl mb-3">
            Welcome!
          </h1>

          <h3 className="text-lg md:text-xl max-w-md">
            This is my revision project.
            <br />
            Here you will find all the important revision concepts of React.js
          </h3>

          <button
            className="mt-6 px-6 py-2 bg-black text-white rounded-md border border-black hover:bg-white hover:text-black transition"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>

        {/* RHS */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img
              src="/react.svg"
              className="h-24 w-24 md:h-52 md:w-52"
              alt="reactLogo"
            />
            <h5 className="text-black mt-2">React.js</h5>
          </div>

          <span className="text-3xl font-bold">+</span>

          <div className="flex flex-col items-center">
            <img
              src="/vite.svg"
              className="h-24 w-24 md:h-52 md:w-52"
              alt="viteLogo"
            />
            <h5 className="text-black mt-2">Vite</h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
