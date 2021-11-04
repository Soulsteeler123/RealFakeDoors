import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';

const AddressForm = () => {
    //Gets methods used to generate and functionally use the form from 'react-hook-form'
    const methods = useForm();

    return (
        <>
            <Typography varaint = "h6" gutterBottom>Shipping Address</Typography>
            {/* Spreads out the methods grabbed from 'react-hook-form' to be used within this tag */}
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3} xs={12} alignItems="center" justifyContent="space-evenly">
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lastName' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='zip' label='ZIP / Postal code' />
                    </Grid>
                </form>

            </FormProvider>
        </>
    )
}

export default AddressForm;
