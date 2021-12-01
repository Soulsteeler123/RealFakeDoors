import React from 'react';
import { IconButton, Icon, Grid } from '@material-ui/core';
//import Carousel from 'react-material-ui-carousel'
import useStyles from'./styles';
import Specials from './Specials';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link, useLocation } from 'react-router-dom';
const Splash = () => {
    const classes= useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Specials/>
            </div>
            <Grid container direction={'row'} spacing={8}  justifyContent="center">
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
                <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                    <LocalMallIcon className={classes.topPicks}/>
                </IconButton>
            </Grid>
        </main>
    )
}

export default Splash;