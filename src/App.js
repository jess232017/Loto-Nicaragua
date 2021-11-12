import React from 'react'
import LotoCard from './components/LotoCard';
import Header from './components/Header';
import Footer from './components/Footer';

import { useQuery } from 'react-query';
import NextGame from './components/NextGame';
import LotoSkeleton from './components/LotoSkeleton';

const URL = "https://loto-nic.herokuapp.com";

const App = () =>{
    const { isLoading, isError, error, data } = useQuery("repoData", () =>
        fetch(URL + "/obtener-todos").then((res) => res.json())
    );

    return (
        <>
            <Header/>

            <div className="page-nav bg-greyblue pt-lg--5 pb-lg--5 pb-2 pt-2">
                <NextGame/>

                <div id="diaria" className="container text-center mt-4 pt-4">
                    <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Diaria</b></h1>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        { isLoading ?
                            <>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                            </>
                        : isError ?
                            <p>{JSON.stringify(error)}</p>
                        :
                            data?.resultado[0].map( value => (
                                <LotoCard key={value?.Hora}
                                    dia={value?.Día}
                                    hora={value?.Hora}
                                    numero={value?.["Número Ganador"]}
                                    color="success"
                                />
                            ))
                        }
                    </div>
                </div>

                <div id="fecha" className="container text-center mt-4 pt-4">
                    <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Fechas</b></h1>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        { isLoading ?
                            <>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                            </>
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
                </div>

                <div id="juga3" className="container text-center mt-4 pt-4">
                    <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Jugá 3</b></h1>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        { isLoading ?
                            <>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                            </>
                        : isError ?
                            <p>{JSON.stringify(error)}</p>
                        :
                            data?.resultado[2].map( value => (
                                <LotoCard key={value?.Hora}
                                    dia={value?.Día}
                                    hora={value?.Hora}
                                    numero={value?.["Número Ganador"]}
                                    color="secondary"
                                />
                            ))
                        }
                    </div>
                </div>

                <div id="premia2" className="container text-center mt-4 pt-4">
                    <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Premia 2</b></h1>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        { isLoading ?
                            <>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                                <LotoSkeleton/>
                            </>
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
            </div>
            <Footer/>
        </>
    );
}

export default App;
