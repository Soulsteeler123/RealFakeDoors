import React from 'react';
import { IconButton, Icon, Grid, Typography, Tooltip } from '@material-ui/core';
//import Carousel from 'react-material-ui-carousel'
import useStyles from'./styles';
import Specials from './Specials';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Box from '@material-ui/core/Box';
import { Link, useLocation } from 'react-router-dom';
import { flexbox } from '@material-ui/system';
import { BorderHorizontal } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
const Splash = () => {
    const classes= useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Specials/>
            </div>
            <Typography variant='h3' style={{textAlign: 'center', paddingTop: 18}}>Top Picks</Typography>
            <div style={{paddingTop: 50}}></div>
            <Grid container className={classes.flexContainer}>
                <Grid item>
                    <Typography style={{fontSize:'24px'}}>Gifts For Him</Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit" className={classes.flexItem}>
                            <LoyaltyIcon className={classes.topPicks}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize:'24px'}}>Gifts For Her</Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit" className={classes.flexItem}>
                            <LoyaltyIcon className={classes.topPicks}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize:'24px'}}>Blue Light Special</Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit" className={classes.flexItem}>
                            <LoyaltyIcon className={classes.topPicks}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize:'24px'}}>Daily Deals</Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit" className={classes.flexItem}>
                            <LoyaltyIcon className={classes.topPicks}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize:'24px'}}>Real Fake Door NFTs</Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit" className={classes.flexItem}>
                            <LoyaltyIcon className={classes.topPicks}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography style={{fontSize:'24px'}}>Merch</Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit" className={classes.flexItem}>
                            <LoyaltyIcon className={classes.topPicks}/>
                    </IconButton>
                </Grid>
            </Grid>
            <div style={{display:'flex', marginTop:50}}>
            <div className={classes.grow}/>
            <Tooltip title="Please don't">
            <Typography>Contact us</Typography> 
            </Tooltip>
            <div className={classes.grow}/>
            <Typography>About us</Typography> 
            <div className={classes.grow}/>
            </div>
        </main>
    )
}

export default Splash;

