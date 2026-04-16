import { useContext } from "react";
import { ShopContext } from "../App";
import Carousel from "../components/Carousel";

const Home = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className="home">
            <Carousel products={products} />
            <h1>Discover Amazing Products</h1>
        </div>
    );
};

export default Home;