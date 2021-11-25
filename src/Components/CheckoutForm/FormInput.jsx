import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();

    return (
        <div>
            <Grid item xs={6} sm={12}>
            <Controller
            control={control}
            name={name}
            render = {()=> (
                <TextField
                    fullWidth
                    label={label}
                    required={required}
                />
            )}
         />
            </Grid>
        </div>
    );
}

export default FormInput;
