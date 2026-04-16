import './App.css'
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { useState, useEffect, createContext } from 'react';

export const ShopContext = createContext({
    cart: [],
    setCart: () => { },
    products: []
  })

function App() {
  const [cart, setCart] = useState([]);
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
    <div className='container'>
      <ShopContext value={{cart , setCart, products}}>
        <Navbar />
        <Outlet />
      </ShopContext>
    </div>
  )
}

export default App;
