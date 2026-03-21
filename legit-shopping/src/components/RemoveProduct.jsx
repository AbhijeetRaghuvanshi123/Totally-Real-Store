import { useOutletContext } from "react-router";

const RemoveProduct = ({ product }) => {
    const [cart, setCart] = useOutletContext();

    const updateQuantity = (value) => {
        if (value > 10) value = 10;
        if (value < 1) value = 1;

        setCart(prev =>
            prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity: value }
                    : item
            )
        );
    };

    const handleDelete = () => {
        setCart(prev => prev.filter(item => item.id !== product.id));
    };

    return (
        <div className="remove-wrapper">
            <div className="remove-product glass">
                <button onClick={() => updateQuantity(product.quantity - 1)} disabled={product.quantity <= 1}>−</button>

                <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(Number(e.target.value))}
                />

                <button onClick={() => updateQuantity(product.quantity + 1)} disabled={product.quantity >= 10}>+</button>
            </div>

            <button className="danger-btn" onClick={handleDelete}>
                Remove
            </button>
        </div>
    );
};

export default RemoveProduct;