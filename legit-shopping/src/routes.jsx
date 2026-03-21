import App from "./App";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const routes = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'shop',
                element: <Shop />
            }
        ]
    },
]

export default routes;