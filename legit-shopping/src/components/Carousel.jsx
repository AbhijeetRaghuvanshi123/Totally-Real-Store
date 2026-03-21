import { useEffect, useState } from "react";

const Carousel = () => {
    const images = [
        "https://picsum.photos/1200/400?1",
        "https://picsum.photos/1200/400?2",
        "https://picsum.photos/1200/400?3"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel glass">
            <img src={images[index]} alt="banner" />
        </div>
    );
};

export default Carousel;