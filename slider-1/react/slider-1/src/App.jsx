import { useState, useEffect } from "react";
import "./App.css";
import Image_1 from "../src/assets/bg-1.jpg";
import Image_2 from "../src/assets/bg-2.jpg";
import Image_3 from "../src/assets/bg-3.jpg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const images = [Image_1, Image_2, Image_3];
  const texts = ["Let's Start Here", "Develop By Siam Pathan", "Another One"];

  return (
    <>
      <div className="wrap">
        <div className="banner">
          <div className="slider">
            <img src={images[currentSlide]} alt="" id="sliderImg" />
          </div>
          <div className="overlay">
            <div className="navbar">
              <div className="title-text pointer">
                <h2>SIAM</h2>
              </div>
              <div className="option-text">
                <p className="pointer">Home</p>
                <p className="pointer">Service</p>
                <p className="pointer">About</p>
              </div>
            </div>
            <div className="content">
              <h2 id="change-text">{texts[currentSlide]}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
