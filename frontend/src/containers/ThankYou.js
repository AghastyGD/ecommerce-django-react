import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../hocs/Layout';


const thankYou = () => (
    <Layout
        title='Thank You'
        content=''
    
    >
        <h1 className='display-2 mt-5 text-center'>Muito Obrigado</h1>
        <p className='fs-5 mt-5 mb-5 text-muted text-center'>
            O seu pedido foi confirmado com sucesso, aguarde e logo você será notificado de quando o produto
            estiver a caminho :D
        </p>
        <div className='d-flex justify-content-center align-items-center'>
            <Link className='btn btn-primary btn-lg' to='/'>
                VOLTAR PARA PÁGINA INICIAL
            </Link>
        </div>
    </Layout>
);

export default thankYou;