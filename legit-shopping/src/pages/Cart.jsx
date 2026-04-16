import RemoveProduct from "../components/RemoveProduct";
import { useContext , useMemo } from "react";
import { ShopContext } from "../App";

const Cart = () => {
    const { cart, setCart } = useContext(ShopContext);

    let total = useMemo(() => {
        return cart.map(item =>
        (item.price * (100 - item.discountPercentage) / 100 * item.quantity).toFixed(2)
    ).reduce((sum, current) => sum + parseFloat(current), 0);
    },[cart])

    const handleCheckout = () => {
        alert('Thanks for your purchase!');
        setCart([]);
    };

    return (
        <>
            <div className="products">
                {cart.length > 0 ? (
                    cart.map(product => (
                        <div key={product.id} className="product-card glass">
                            <div className="img-wrap">
                                <img src={product.images[0]} alt={product.title} className="product-img" />
                            </div>
                            <div className="card-body">
                                <h2>{product.title}</h2>
                                <div className="price-row">
                                    <span className="price-original">{product.price}</span>
                                    <span className="price-sale">
                                        ${((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}
                                    </span>
                                </div>
                                <p className="cart-total-line">
                                    Subtotal: <span>${((product.price * (100 - product.discountPercentage)) / 100 * product.quantity).toFixed(2)}</span>
                                </p>
                                <RemoveProduct product={product} />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">
                        <h1>Your cart is empty</h1>
                        <p>Head to the shop to find something you love.</p>
                    </div>
                )}
            </div>

            {cart.length > 0 && (
                <div className="checkout">
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <button className="primary-btn" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            )}
        </>
    );
};

export default Cart;