import React from 'react';
import { Outlet } from 'react-router-dom';
// import Nav from './components/NavBar';
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
    return (
        <>
        <Header/>
        <Hero/>
        <main className="mx-3">
            <Outlet />
        </main>
        </>
    );
}

export default App;