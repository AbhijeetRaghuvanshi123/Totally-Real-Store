import AddProduct from "../components/AddProduct";
import { useContext } from "react";
import { ShopContext } from "../App";

const Shop = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className="products">
            {products.map(product => (
                <div key={product.id} className="product-card glass">
                    <div className="img-wrap">
                        <img src={product.images[0]} alt={product.title} className="product-img" />
                    </div>
                    <div className="card-body">
                        <h2>{product.title}</h2>
                        <h3 className="brand">{product.brand}</h3>
                        <p className="desc">{product.description}</p>
                        <div className="spacer" />
                        <div className="price-row">
                            <span className="price-original">{product.price}</span>
                            <span className="price-sale">
                                ${((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}
                            </span>
                            <span className="badge-discount">{product.discountPercentage}% off</span>
                        </div>
                        <AddProduct product={product} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;