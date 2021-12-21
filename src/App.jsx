import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Result from './pages/Result/Result';
import Header from './components/Header';
import Footer from './components/Footer';
import NextGame from './components/NextGame';


const App = () => {
    return (
        <>
            <Header />
            <div className="page-nav bg-greyblue pt-lg--5 pb-lg--5 pb-2 pt-2">
                <NextGame />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/results/diaria" element={<Result name={"diaria"} />} />
                    <Route path="/results/fechas" element={<Result name={"fechas"} />} />
                    <Route path="/results/juga-tres" element={<Result name={"juga-tres"} />} />
                    <Route path="/results/premia-dos" element={<Result name={"premia-dos"} />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
