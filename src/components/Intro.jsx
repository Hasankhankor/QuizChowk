import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute w-80 h-80 bg-btnPrimary rounded-full opacity-20 blur-3xl -top-10 -left-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-btnText rounded-full opacity-30 blur-3xl -bottom-10 -right-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 bg-btnText bg-opacity-10 backdrop-blur-lg px-10 py-12 rounded-3xl shadow-lg max-w-lg">
        <h1 className="text-5xl font-bold text-btnText tracking-wide animate-fade-in">
          Quiz<span className="">Chowk</span>
        </h1>
        <p className="text-lg text-btnText font-light text-center animate-fade-in">
          Your journey from curious to genius starts here.
        </p>

        {/* Start Quiz Button */}
        <Link
          to="/questions"
          className="bg-btnPrimary text-btnText font-bold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Intro;
