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
           Aqui você pode comprar as melhores peças para montagem do seu futuro PC GAMER...
        </h2>
        <div className='mt-5 bb-light p-5 rounded shadow'>
            <h3 className='display-6'>Veja este incrível CPU Ryzen 5 5600G</h3>
            <p className='lead mt-3 mb-4'>
                Um dos melhores processadores com gráficos integrados do mundo inteiro, com ele você pode rodar
                vários jogos recentes e ferramentas de edição gráfica na qualidade média ou alta hehe!
            </p>
            <Link className='btn btn-info shadow-sm' to='/checkout'>
                EU QUERO ESTE PROCESSADOR!
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
                        <span className='fs-4 fw-normal'>TDP Padrão:</span> 65W
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
                        <span className='fs-4 fw-normal'>Temperatura Máxima:</span> 95°C
                    </li>
                    <li className='list-group-item fs-4 lead'>
                        <span className='fs-4 fw-normal'>Data de Lançamento:</span> 4/13/2021
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