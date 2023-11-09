import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Checkout from './containers/Checkout';
import ThankYou from './containers/ThankYou';

const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
    </Router>
);

export default App;
