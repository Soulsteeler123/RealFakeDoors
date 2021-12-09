import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { commerce } from '../../lib/commerce';
import { OpacityOutlined } from '@material-ui/icons';
import {Link} from 'react-router-dom';


const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    //Gets methods used to generate and functionally use the form from 'react-hook-form'
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((shippingOption) => ({ id: shippingOption.id, label: `${shippingOption.description} - (${shippingOption.price.formatted_with_symbol})`}));

    const fetchShippingCountries = async(checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        console.log(countries);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(() => {  
        if(shippingCountry) fetchShippingOptions(checkoutToken.id, shippingCountry);
    }, [shippingCountry])
    
    const fetchShippingOptions = async (checkoutTokenId, country) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country });

        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    return (
        <>
            <Typography varaint = "h6" gutterBottom>Shipping Address</Typography>
            {/* Spreads out the methods grabbed from 'react-hook-form' to be used within this tag */}
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingOption }))}>
                    <Grid container spacing={3} xs={12} alignItems="center" justifyContent="space-evenly">
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lastName' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='zip' label='ZIP / Postal code' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(event) => setShippingCountry(event.target.value)}> 
                            {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(event) => setShippingOption(event.target.value)}> 
                            {options.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.label}
                            </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" varaint="outlined">Back to Cart</Button>
                        <Button type="submit" varaint="contained" color="primary">Next</Button>
                    </div>
                </form>

            </FormProvider>
        </>
    )
}

export default AddressForm;
