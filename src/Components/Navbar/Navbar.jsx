import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import { Link, useLocation } from 'react-router-dom';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from '../../assets/realfakedoors.png';
import useStyles from'./styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position = "fixed" className={mergeClasses.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" color="inherit" >
                        <img src={logo} alt="Real Fake Doors!" height="25px" className={classes.largeIcon} />
                    </Typography>
                    <IconButton component={Link} to="/shopping" aria-label="Go To Our Shop" color="inherit">
                            <LocalMallIcon className={classes.largeIcon} />
                        </IconButton>
                    <div className={classes.grow} />
                    <Typography component="h1">The one and only real real fake door wholesale site</Typography>
                    <div className={classes.grow} />
                    <AccountCircleIcon className={classes.largeIcon} />
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" >
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCart className={classes.largeIcon}/>
                            </Badge>
                        </IconButton>
                       
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
