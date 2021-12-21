import React from 'react';

import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import LotoCard from '../components/LotoCard';
import LotoSkeleton from '../components/LotoSkeleton';

const URL = "https://loto-nic.herokuapp.com";

const Home = () => {
    const { isLoading, isError, error, data } = useQuery("repoData", () =>
        fetch(URL + "/obtener-todos").then((res) => res.json())
    );

    return (
        <>
            <div id="diaria" className="container text-center mt-4 pt-4">
                <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Diaria</b></h1>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    {isLoading ?
                        <>
                            <LotoSkeleton />
                            <LotoSkeleton />
                            <LotoSkeleton />
                        </>
                        : isError ?
                            <p>{JSON.stringify(error)}</p>
                            :
                            data?.resultado[0].map(value => (
                                <LotoCard key={value?.Hora}
                                    dia={value?.Día}
                                    hora={value?.Hora}
                                    numero={value?.["Número Ganador"]}
                                    color="success"
                                />
                            ))
                    }
                </div>
                <Link to="results/diaria" className="bg-success p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w400 text-center font-xsss ls-3 bg-current">
                    RESULTADOS ANTERIORES
                </Link>
            </div>

            <div id="fecha" className="container text-center mt-4 pt-4">
                <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Fechas</b></h1>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    {isLoading ?
                        <>
                            <LotoSkeleton />
                            <LotoSkeleton />
                            <LotoSkeleton />
                        </>
                        : isError ?
                            <p>{JSON.stringify(error)}</p>
                            :
                            data?.resultado[1].map(value => (
                                <LotoCard key={value?.Hora}
                                    dia={value?.Día}
                                    hora={value?.Hora}
                                    numero={value?.["Número Ganador"]}
                                    color="danger"
                                />
                            ))
                    }
                </div>
                <Link to="results/fechas" className="bg-danger p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w400 text-center font-xsss ls-3 bg-current">
                    RESULTADOS ANTERIORES
                </Link>
            </div>

            <div id="juga3" className="container text-center mt-4 pt-4">
                <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Jugá 3</b></h1>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    {isLoading ?
                        <>
                            <LotoSkeleton />
                            <LotoSkeleton />
                            <LotoSkeleton />
                        </>
                        : isError ?
                            <p>{JSON.stringify(error)}</p>
                            :
                            data?.resultado[2].map(value => (
                                <LotoCard key={value?.Hora}
                                    dia={value?.Día}
                                    hora={value?.Hora}
                                    numero={value?.["Número Ganador"]}
                                    color="secondary"
                                />
                            ))
                    }
                </div>
                <Link to="results/juga-tres" className="bg-secondary p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w400 text-center font-xsss ls-3 bg-current">
                    RESULTADOS ANTERIORES
                </Link>
            </div>

            <div id="premia2" className="container text-center mt-4 pt-4">
                <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>Premia 2</b></h1>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    {isLoading ?
                        <>
                            <LotoSkeleton />
                            <LotoSkeleton />
                            <LotoSkeleton />
                        </>
                        : isError ?
                            <p>{JSON.stringify(error)}</p>
                            :
                            data?.resultado[3].map(value => (
                                <LotoCard key={value?.Hora}
                                    dia={value?.Día}
                                    hora={value?.Hora}
                                    numero={value?.["Número Ganador"]}
                                    color="info"
                                />
                            ))
                    }
                </div>
                <Link to="results/premia-dos" className="bg-info p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w400 text-center font-xsss ls-3 bg-current">
                    RESULTADOS ANTERIORES
                </Link>
            </div>
        </>
    );
}

export default Home;