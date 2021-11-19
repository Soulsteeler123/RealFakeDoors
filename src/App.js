import React, { useState, useEffect } from 'react'

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout, Splash } from './Components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//To start node server, types "npm start" in terminal
//To kill node server, in terminal press Ctrl + c
const App = () => {
    const theme = createTheme({
        palette: {
          type: 'dark',
        },
      });

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        //console.log(data);
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Splash />
                    </Route>
                    <Route exact path="/shopping">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
             </div>
        </Router>
        </ThemeProvider>
    )
}

export default App;
