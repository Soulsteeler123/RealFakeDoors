import React from 'react';
import { Grid } from '@material-ui/core';

import Product from'./Product/Product';
import useStyles from'./styles';
const products = [
    {id: 1, name: 'Wooden door', description: 'Wood', panel: 6, size: 24, price: '$80', image: 'https://cdn.etodoors.com/media/catalog/product/cache/1/image/1000x700/9df78eab33525d08d6e5fb8d27136e95/a/b/abf66_1.jpg'},
    {id: 2, name: 'Metal door', description: 'Metal', panel: 0, size: 30, price: '$100', image: 'https://prod-trudoor-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/04/21112338/flush-hollow-metal-door-2.jpg'}
];

const Products = () => {
    const classes= useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
             <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    //xs={12} takes up full space on mobile devices
                    //sm={6} takes up 6 out of twelve for small devices
                    //md and lg are just different sizes that the products will appear depending
                    //on size of devices
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product ={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;