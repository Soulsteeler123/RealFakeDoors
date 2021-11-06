import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from'./styles';

const Splash = () => {
    const classes= useStyles();
    return (
        <main className={classes.content}>
            <h1>placeholder</h1>
        </main>
    )
}

export default Splash;