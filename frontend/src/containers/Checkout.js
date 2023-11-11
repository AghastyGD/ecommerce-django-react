import React, { useState } from 'react';
import Layout from '../hocs/Layout';

const Checkout = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        street_address: '',
        city: '',
        country: '',
        state_province: '',
        postal_zip_code: '',
    });

    const [orderAttempted, setOrderAttempted] = useState(false);

    const {
        first_name,
        email,
        street_address,
        city,
        country,
        state_province,
        postal_zip_code,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\ /g, '') });
    const onAddressChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const formStyling = orderAttempted ? 'needs-validation was-validated' : 'needs-validation';

    const buy = e => {
        e.preventDefault();

    };

    return (
        <Layout
            title='Checkout'
            content=''

        >
            <h1 className='display-4 mt-5 mb-5'>Checkout Page</h1>
            <div className='row mb-5'>
                <div className='col-5'>
                    <form className={formStyling} noValidate onSubmit={buy}>
                        <h3 className='mb-5 display-6'>Your Information</h3>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='first_name'>
                                FIrst Name*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='first_name'
                                placeholder='First Name*'
                                onChange={onChange}
                                value={first_name}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Enter Your First Name
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='email'>
                                Email*
                            </label>
                            <input
                                className='form-control'
                                type='email'
                                name='email'
                                placeholder='Your Email*'
                                onChange={onChange}
                                value={email}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Enter Your Email
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='street_address'>
                                Street Address*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='street_address'
                                placeholder='Street Address*'
                                onChange={onAddressChange}
                                value={street_address}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Provide Address
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='city'>
                                City*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='city'
                                placeholder='City*'
                                onChange={onAddressChange}
                                value={city}
                                required
                            />
                            <div className='invalid-feedback'>
                                Please Provide City
                            </div>
                        </div>
                        <div className='row mb-5 mt-3'>
                            <div className='col-5'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='city'>
                                        Country*
                                    </label>
                                    <select
                                        className='form-select'
                                        name='country'
                                        onChange={onAddressChange}
                                        value={country}
                                        required

                                    >
                                        <option value=''>Choose...</option>
                                        <option value='mozambique'>Mozambique</option>
                                        <option value='brazil'>Brazil</option>
                                        <option value='united_states'>United States</option>
                                    </select>
                                    <div className='invalid-feedback'>
                                        Please Provide Country
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='state_province'>
                                        State/Province*
                                    </label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='state_province'
                                        placeholder='State/Province*'
                                        onChange={onAddressChange}
                                        value={state_province}
                                        required
                                    />
                                    <div className='invalid-feedback'>
                                        Please Provide State/Province
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='postal_zip_code'>
                                        Zip Code*
                                    </label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='postal_zip_code'
                                        placeholder='Zip Code*'
                                        onChange={onAddressChange}
                                        value={postal_zip_code}
                                        required
                                    />
                                    <div className='invalid-feedback'>
                                        Please Provide Postal/Zip Code
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h3 className='mb-5 display-6'>Payment Information</h3>
                        <button 
                            className='btn btn-success btn-lg mt-5 shadow'
                            onClick={() => setOrderAttempted(true)}
                            type='submit'
                        
                        >
                            Place Order
                        </button>
                    </form>

                </div>
                <div className='offset-1 col-6'>
                    ORDER DETAILS
                </div>
            </div>
        </Layout>
    );
}
export default Checkout;