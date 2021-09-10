import React from "react";
import "./styles/navbar.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

//landing components on the page top to bottom
import LandingOne from "./landingComponents/LandingOne";
import LandingTwo from "./landingComponents/LandingTwo";
import LandingThree from "./landingComponents/LandingThree";
import LandingFour from "./landingComponents/LandingFour";
import LandingFive from "./landingComponents/LandingFive";

function Landing(props) {
  return (
      <div className="bg-gray-100">
        {/* Navigation Component */}
        <Navigation />

        {/* Dummy macbook and app info section */}
        <LandingOne />

        {/* How It Works Section*/}
        <h1 id="how-it-works" className="mt-48 text-center sm:text-2xl md:text-4xl xl:mt-96 text-black-600 font-bold mb-10">
          How it works
        </h1>

        {/* Sign up */}
        <LandingTwo />

        {/* Notes  */}
        <LandingThree />

        {/* Todos */}
        <LandingFour />

        {/* Sign up today section */}
        <LandingFive />

        {/* Footer Component */}
        <Footer />
      </div>
  );
}

export default Landing;
