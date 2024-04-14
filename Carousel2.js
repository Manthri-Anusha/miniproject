import React, { useState, useEffect } from "react";
import "../components/Carousel1.css";
// import image from "../components/Data";

function Carousel2({ images = [] }) {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoPlay] = useState(true);

    useEffect(() => {
        let timeout;
        if (autoplay) {
            timeout = setTimeout(() => {
                slideRight();
            }, 2500);
        }

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeout);
    }, [current, autoplay]); // Add dependencies to the array to avoid infinite loop

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="Carousel" 
             onMouseEnter={() => setAutoPlay(false)}
             onMouseLeave={() => setAutoPlay(true)}>
            <div className="Carousel_wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={
                            index === current ? "Carousel_card Carousel_card-active" : "Carousel_card"
                        }
                        style={{
                            backgroundImage: `url(${image.image})`,
                            backgroundSize: 'cover',
                            opacity: index === current ? 1 : 0,
                            pointerEvents: index === current ? 'auto' : 'none',
                            transform: index === current ? 'scale(1)' : 'scale(0.8)',
                            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                        }}
                    >
                        <img className="Card_image" src={image.image} alt="carousel slide" />
                        <div className="Card_overlay">
                            <h2 className="Card_title">{image.title}</h2>
                        </div>
                    </div>
                ))}
                <div className="Carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
                <div className="Carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>
            </div>
            <div className="Carousel_pagination">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel2;
