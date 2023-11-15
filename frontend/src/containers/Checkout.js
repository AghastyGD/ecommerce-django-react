import React, { useState, useEffect, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../hocs/Layout';
import DropIn from 'braintree-web-drop-in-react';
import { Oval } from 'react-loader-spinner';
import Processors from '../assets/images/cpu_ryzen.jpg';


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
    
    const [clientToken, setClientToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderAttempted, setOrderAttempted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({
        instance: {}
    })

    const {
        first_name,
        email,
        street_address,
        city,
        country,
        state_province,
        postal_zip_code,
    } = formData;

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                
                headers: {
                    'Accept': 'application/json',
                }
            }
            try {
                const res = await axios.get('http://localhost:8000/api/payment/generate-token', config);

                if (res.status === 200) {
                    setClientToken(res.data.token);
                    setLoading(false);
                    setProcessingOrder(false);
                }
            } catch(err) {
               
            }
        };

        fetchData();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\ /g, '') });
    const onAddressChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const formStyling = orderAttempted ? 'needs-validation was-validated' : 'needs-validation';

    const buy = async e => {
        e.preventDefault();

        if (
            first_name !== '' &&
            email !== '' &&
            street_address !== '' &&
            city !== '' &&
            country !== '' &&
            state_province !== '' &&
            postal_zip_code !== ''
        ) {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            };

            let { nonce } = await data.instance.requestPaymentMethod();

            setProcessingOrder(true);

            const body = JSON.stringify({
                first_name,
                email,
                street_address,
                city,
                country,
                state_province,
                postal_zip_code,
                nonce
            });

            try {
                const res = await axios.post('http://localhost:8000/api/payment/process-payment', body, config);

                if (res.status === 201)
                    setSuccess(true);
            } catch(err) {

            }

            setProcessingOrder(false);
        }

    };

    if (success)
        return <Navigate to='/thank-you' />;

    return (
        <Layout
            title='Checkout'
            content=''

        >
            <h1 className='display-4 mt-5 mb-5'>Finalização da Compra</h1>
            <div className='row mb-5'>
                <div className='col-5'>
                    <form className={formStyling} noValidate onSubmit={buy}>
                        <h3 className='mb-5 display-6'>Suas Informações</h3>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='first_name'>
                                Primeiro Nome*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='first_name'
                                placeholder='Primeiro nome'
                                onChange={onChange}
                                value={first_name}
                                required
                            />
                            <div className='invalid-feedback'>
                                Por favor digite o seu primeiro nome
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
                                placeholder='Seu email'
                                onChange={onChange}
                                value={email}
                                required
                            />
                            <div className='invalid-feedback'>
                                Por favor digite o seu email
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='street_address'>
                                Endereço*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='street_address'
                                placeholder='Endereço*'
                                onChange={onAddressChange}
                                value={street_address}
                                required
                            />
                            <div className='invalid-feedback'>
                                Por favor informe um endereço
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='city'>
                                Cidade*
                            </label>
                            <input
                                className='form-control'
                                type='text'
                                name='city'
                                placeholder='Cidade'
                                onChange={onAddressChange}
                                value={city}
                                required
                            />
                            <div className='invalid-feedback'>
                                Por favor informe a sua cidade
                            </div>
                        </div>
                        <div className='row mb-5 mt-3'>
                            <div className='col-5'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='city'>
                                        País*
                                    </label>
                                    <select
                                        className='form-select'
                                        name='country'
                                        onChange={onAddressChange}
                                        value={country}
                                        required

                                    >
                                        <option value=''>Selecionar...</option>
                                        <option value='mozambique'>Moçambique</option>
                                        <option value='brazil'>Brasil</option>
                                        <option value='united_states'>Estados Unidos</option>
                                    </select>
                                    <div className='invalid-feedback'>
                                        Por favor selecione o seu país
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='state_province'>
                                        Estado/Província*
                                    </label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='state_province'
                                        placeholder='Estado/Província*'
                                        onChange={onAddressChange}
                                        value={state_province}
                                        required
                                    />
                                    <div className='invalid-feedback'>
                                        Por favor informe a sua provincia
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='form-group mb-3'>
                                    <label className='form-label' htmlFor='postal_zip_code'>
                                        Código Postal*
                                    </label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='postal_zip_code'
                                        placeholder='Código Postal*'
                                        onChange={onAddressChange}
                                        value={postal_zip_code}
                                        required
                                    />
                                    <div className='invalid-feedback'>
                                        Por favor digite o seu código postal
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h3 className='mb-5 display-6'>Informações do Pagamento</h3>
                        {
                            loading || clientToken === null ? (
                                <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                                    <Oval
                                        type='Oval'
                                        color='#00bfff'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ) : (
                                <DropIn
                                    options={{
                                        authorization: clientToken,
                                        paypal: {
                                            flow: 'vault'
                                        }
                                    }}
                                    onInstance={ instance => setData({ instance: instance })}
                                />
                            )
                        }
                        {
                            processingOrder ? (
                                <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                                    <Oval
                                        type='Oval'
                                        color='#00bfff'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ) : (
                                <div>
                                    {
                                        loading ? (
                                            <Fragment></Fragment>
                                        ) : (
                                            <button 
                                                className='btn btn-success btn-lg mt-5 shadow'
                                                onClick={() => setOrderAttempted(true)}
                                                type='submit'
                                            
                                            >
                                                FAZER PEDIDO
                                            </button>

                                        )
                                    }
                                </div>
                            )
                        }
                    
                    </form>

                </div>
                <div className='offset-1 col-6'>
                    <h3 className='display-6 mb-5'>Informações do Pedido:</h3>
                    <div className='row'>
                        <div className='col-4'>
                            <img 
                                className='img-fluid'
                                src={Processors}
                                alt='Mini Shop CPUs'
                            />
                        </div>
                        <div className='offset-1 col-7 mt-3'>
                            <p className='fs-5 lead'>
                                Item:  Ryzen 5 5600G
                            </p>
                            <p className='lead fs-3'>
                                <strong>Total do Pedido: $101.24 </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Checkout;