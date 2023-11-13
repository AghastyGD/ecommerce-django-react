import React from 'react';
import Layout from '../hocs/Layout';
import { Link } from 'react-router-dom';

import Processors from '../assets/images/cpu_ryzen.jpg';

const home = () => (
    <Layout
        title='Home'
        content=''

    >
        <h1 className='display-4 mt-5'>Mini Shop</h1>
        <h2 className='fs-4 fw-light fst-italic mt-3'>
            Where you can buy the worlds greatest PCs hardwares...
        </h2>
        <div className='mt-5 bb-light p-5 rounded shadow'>
            <h3 className='display-6'>Check out our unreal Ryzen 5 CPUs Set</h3>
            <p className='lead mt-3 mb-4'>
                One of the best CPUs on the market, with the most advanced integrated graphics that can
                play all type of games in medium or high-end graphics quality!
            </p>
            <Link className='btn btn-info shadow-sm' to='/checkout'>
                I WANT THESE CPUs!
            </Link>
        </div>
        <div className='row mt-5 mb-5'>
            <div className='col-3'>
                <img
                    className='img-fluid'
                    src={Processors}
                    alt='Mini Shop CPUs'
                />
            </div>
            <div className='offset-2 col-7'>
                <ul className='list-group list-group-flush mt-5'>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>CPU Cores:</span> 6
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Threads:</span> 12
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Default TDP:</span> 65W
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Base Clock:</span> 3.9GHz
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Max Boost Clock:</span> Up to 4.4GHz
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>CPU Socket:</span> AM4
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Max Operating Temperature:</span> 95°C
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Launch Date:</span> 4/13/2021
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>L2 Cache:</span> 3MB
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>L3 Cache:</span> 16MB
                    </li>

                </ul>

            </div>
        </div>
    </Layout>
);

export default home;