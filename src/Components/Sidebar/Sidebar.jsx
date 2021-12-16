import React from 'react';
import useStyles from'./styles';
import { Card, RadioGroup, FormControl, FormLabel, Radio, FormControlLabel, Grid  } from '@material-ui/core';
const Sortbar = () => {
    const classes = useStyles();
    return (
        <>
            <Card style={{marginTop: 10,marginRight: 10, minWidth: 150}}>
                <div style={{marginTop: 10, marginLeft: 10}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Door Size</FormLabel>
                        <RadioGroup aria-label="Door Size">
                            <FormControlLabel value='24" x 80"' control={<Radio />} label='24" x 80"' />
                            <FormControlLabel value='30" x 80"' control={<Radio />} label='30" x 80"' />
                            <FormControlLabel value='36" x 80"' control={<Radio />} label='36" x 80"' />
                        </RadioGroup>
                        <FormLabel component="legend">Panels</FormLabel>
                        <RadioGroup aria-label="Panels">
                            <FormControlLabel value='1 Panel' control={<Radio />} label='1 Panel' />
                            <FormControlLabel value='2 Panel' control={<Radio />} label='2 Panel' />
                            <FormControlLabel value='6 Panel' control={<Radio />} label='6 Panel' />
                            <FormControlLabel value='None' control={<Radio />} label='None' />
                        </RadioGroup>
                        <FormLabel component="legend">Core</FormLabel>
                        <RadioGroup aria-label="Core">
                            <FormControlLabel value='Hollow' control={<Radio />} label='Hollow' />
                            <FormControlLabel value='Solid' control={<Radio />} label='Solid' />
                        </RadioGroup>
                    </FormControl>
                </div>
            </Card>
        </>
    )
}

export default Sortbar
