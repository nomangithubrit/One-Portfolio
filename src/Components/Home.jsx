import React from "react";
import HeroImage from '../assets/portfolio/HeroImage.jpeg'
import { TiArrowRight } from "react-icons/ti";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">I am A React.js Developer</h1>
          <p className="text-gray-500 py-4 max-w-md">
          I am React.js Developer. I also have good hands on website development. I'm new in this portal but I'll give you quality work to my clients. I worked for so many clients with positive feedback's and have good relations with them. I would love to help you with the following technologies.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-wihite w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="hover:rotate-90 duration-300">
              <TiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
           </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
