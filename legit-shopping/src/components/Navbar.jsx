import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar glass">
            <h2 className="logo">MyStore</h2>
            <ul>
                {[['/', 'Home'], ['/shop', 'Shop'], ['/cart', 'Cart']].map(([to, label]) => (
                    <li key={to}>
                        <Link to={to} className={location.pathname === to ? 'active link' : 'link'}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;