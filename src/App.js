import React, { useState, useEffect } from 'react'

import {commerce} from './lib/commerce';
import { Products, Navbar } from './Components';

//To start node server, types "npm start" in terminal
//To kill node server, in terminal press Ctrl + c
const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const data = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;
