import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header'
import Hero from './components/Hero'
import Assetbuttons from './components/Assetbuttons'

function App() {
    return (
        <>
        <Header/>
        <Hero/>
        <Assetbuttons/>
        <main className="mx-3">
            <Outlet />
        </main>
        </>
    );
}

export default App;