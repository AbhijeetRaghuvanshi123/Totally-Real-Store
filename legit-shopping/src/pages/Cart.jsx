import { useOutletContext } from "react-router";
import RemoveProduct from "../components/RemoveProduct";

const Cart = () => {
    const [cart, setCart] = useOutletContext();

    const handleCheckout = () => {
        alert('thanks for purchase');
        setCart([]);
    }

    return (
        <>
            <div className="products">
                {
                    cart.length > 0 ? (
                        cart.map(product => {
                            return (

                                <div key={product.id} className="product-card">
                                    <img src={product.images[0]} alt="product" className="product-img" />
                                    <h1>{product.title}</h1>
                                    <h1>{product.quantity}</h1>
                                    <RemoveProduct product={product} />
                                </div>

                            )
                        })
                    ) : (<h1>Cart is empty</h1>)
                }
            </div>
            <div className="checkout">
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </>
    )
}

export default Cart;