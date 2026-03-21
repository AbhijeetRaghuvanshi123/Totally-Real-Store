import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar glass">
            <h2 className="logo">MyStore</h2>

            <ul>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active link" : "link"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shop" className={location.pathname === "/shop" ? "active link" : "link"}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className={location.pathname === "/cart" ? "active link" : "link"}>
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;