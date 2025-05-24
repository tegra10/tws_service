import React, { useState, useEffect } from "react";
import { textDescription } from "../utils/utils";

export default function Descriptions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % textDescription.length
        );
        setIsAnimating(false);
      }, 600); // Durée de l'animation de sortie légèrement plus longue
    }, 6000); // Augmentation du temps d'affichage à 6 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="descriptions">
      <div className="descriptions__content">
        <h1
          className={`descriptions__title ${
            isAnimating ? "fade-out" : "fade-in"
          }`}
        >
          {textDescription[currentIndex].enTete}
        </h1>
        <p
          className={`descriptions__text ${
            isAnimating ? "fade-out" : "fade-in"
          }`}
        >
          {textDescription[currentIndex].desc}
        </p>
      </div>
      <div className="descriptions__image">
        <img
          src="./imgs/mainpic.jpeg" // Remplacez par l'URL de votre image
          alt="Description"
          className="img-fluid"
        />
      </div>
    </div>
  );
}
