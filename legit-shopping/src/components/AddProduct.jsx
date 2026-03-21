import { useState } from "react";
import { useOutletContext } from "react-router";

const AddProduct = ({ product }) => {
    const [items, setItems] = useState(1);
    const [cart, setCart] = useOutletContext();

    const handleAdd = () => {
        setCart(prev => [
            ...prev,
            { ...product, quantity: items }
        ]);
    };

    const handleChange = (e) => {
        let value = Number(e.target.value);
        if (value > 10) value = 10;
        if (value < 1) value = 1;
        setItems(value);
    };

    return (
        <div className="add-product glass">
            <button onClick={() => setItems(items - 1)} disabled={items <= 1}>−</button>
            <input
                type="number"
                value={items}
                onChange={handleChange}
                onFocus={(e) => e.target.select()}
            />
            <button onClick={() => setItems(items + 1)} disabled={items >= 10}>+</button>

            <button className="primary-btn" onClick={handleAdd}>
                Add
            </button>
        </div>
    );
};

export default AddProduct;