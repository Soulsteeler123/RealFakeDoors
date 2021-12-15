import React from 'react';
import { FilterList, FormatListNumbered, GridOn, SortByAlpha } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import useStyles from'./styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { TableRows } from '@mui/icons-material';
const Sortbar = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
            <AppBar position = "static" className={mergeClasses.toolbar} color="inherit">
                <Toolbar>
                    <SortByAlpha className={classes.smallIcon} />
                    <FilterList className={classes.smallIcon} />
                    <FormatListNumbered className={classes.smallIcon} />
                    <div className={classes.grow} />
                    <TableRows className={classes.smallIcon} />
                    <GridOn className={classes.smallIcon} />
                </Toolbar>
            </AppBar> 
            </div>
        </>
    )
}

export default Sortbar
