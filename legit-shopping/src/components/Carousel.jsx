import { useEffect, useState, useRef } from "react";

const Carousel = ({ products }) => {
    const randomIndexes = [...Array(products.length).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    const images = products
        .filter((_, index) => randomIndexes.includes(index))
        .map(product => product.images[0]);

    const [index, setIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);

    const goTo = (i) => {
        setFading(true);
        setTimeout(() => {
            setIndex(i);
            setFading(false);
        }, 300);
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setIndex(prev => {
                    const next = (prev + 1) % images.length;
                    return next;
                });
                setFading(false);
            }, 300);
        }, 3500);

        return () => clearInterval(timerRef.current);
    }, [images.length]);

    if (!images.length) return null;

    return (
        <div className="carousel glass">
            <img
                src={images[index]}
                alt="banner"
                className="banner-img"
                style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease' }}
            />
            <div className="carousel-dots">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`dot${i === index ? ' dot-active' : ''}`}
                        onClick={() => {
                            clearInterval(timerRef.current);
                            goTo(i);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;