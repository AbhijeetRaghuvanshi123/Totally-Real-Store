import { useEffect, useState } from "react"
import AddProduct from "../components/AddProduct";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                let response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error(`ERROR! Status: ${response.status}`);
                }
                response = await response.json();
                console.log(response);
                setProducts(response.products);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [])

    if (loading) return <h1>Loading...</h1>

    if (error) return <h1>Error occurred. Status: {error.message}</h1>

    return (
        <div className="products">
            {
                products.map(product => {
                    return (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]} alt="Product Image" className="product-img"/>
                            <h2>{product.title}</h2>
                            <h3>{product.brand}</h3>
                            <p>{product.description}</p>
                            <AddProduct product={product} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shop;