import React from 'react'
import LotoCard from './components/LotoCard';
import Header from './components/Header';
import Footer from './components/Footer';

import { useQuery } from 'react-query';

const App = () =>{
    const { isLoading, isError, error, data } = useQuery("repoData", () =>
        fetch("https://loto-nic.herokuapp.com/obtener-todos").then((res) => res.json())
    );

    return (
        <>
            <Header/>
            <div className="container content">
                <h1>Loto Nicaragua</h1>
                <h2 id="diaria">Loto Diaria</h2>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    { isLoading ?
                        <p>Cargando...</p>
                    : isError ?
                        <p>{JSON.stringify(error)}</p>
                    :
                        data?.resultado[0].map( value => (
                            <LotoCard key={value?.Hora}
                                dia={value?.Día}
                                hora={value?.Hora}
                                numero={value?.["Número Ganador"]}
                                color="primary"
                            />
                        ))
                    }
                </div>
                
                <h2 id="fecha">Fechas</h2>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    { isLoading ?
                        <p>Cargando...</p>
                    : isError ?
                        <p>{JSON.stringify(error)}</p>
                    :
                        data?.resultado[1].map( value => (
                            <LotoCard key={value?.Hora}
                                dia={value?.Día}
                                hora={value?.Hora}
                                numero={value?.["Número Ganador"]}
                                color="danger"
                            />
                        ))
                    }
                </div>

                <h2 id="juga">Jugá 3</h2>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    { isLoading ?
                        <p>Cargando...</p>
                    : isError ?
                        <p>{JSON.stringify(error)}</p>
                    :
                        data?.resultado[2].map( value => (
                            <LotoCard key={value?.Hora}
                                dia={value?.Día}
                                hora={value?.Hora}
                                numero={value?.["Número Ganador"]}
                                color="warning"
                            />
                        ))
                    }
                </div>

                <h2 id="premia">Premia 2</h2>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    { isLoading ?
                        <p>Cargando...</p>
                    : isError ?
                        <p>{JSON.stringify(error)}</p>
                    :
                        data?.resultado[3].map( value => (
                            <LotoCard key={value?.Hora}
                                dia={value?.Día}
                                hora={value?.Hora}
                                numero={value?.["Número Ganador"]}
                                color="info"
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
