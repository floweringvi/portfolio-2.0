import React from 'react';
import { Outlet } from 'react-router-dom';
// import Nav from './components/NavBar';
import Header from './components/Header'

function App() {
    return (
        <>
        <Header/>
        <main className="mx-3">
            <Outlet />
        </main>
        </>
    );
}

export default App;