import React from 'react';
import { Grid, Toolbar, AppBar } from '@material-ui/core';
import Product from'./Product/Product';
import useStyles from'./styles';
import { Sortbar, Sidebar } from '../../Components';

const Products = ({ products, onAddToCart }) => {
    const classes= useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div style={{paddingBottom: 0}}>
            <Sortbar />
            </div>
            <Grid container direction='row'style={{alignItems: "flex-start", flexWrap: 'nowrap'}}>
                <Grid item>
                    <Sidebar/>
                </Grid>
                <Grid item style={{marginTop: 10}}>
                    <Grid container justifyContent="center" spacing={4}>
                        <div className={classes.root} />
                        {products.map((product) => (
                            //xs={12} takes up full space on mobile devices
                            //sm={6} takes up 6 out of twelve for small devices
                            //md and lg are just different sizes that the products will appear depending
                            //on size of devices
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

export default Products;