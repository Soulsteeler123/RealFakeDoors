import React from 'react';
import { Grid } from '@material-ui/core';
//import Carousel from 'react-material-ui-carousel'
import useStyles from'./styles';
import Specials from './Specials';

const Splash = () => {
    const classes= useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Specials/>
            </div>
        </main>
    )
}

export default Splash;