import React from 'react'
import LotoCard from './components/LotoCard';

import { useQuery } from 'react-query';

const App = () =>{
    const { isLoading, isError, error, data, isFetching } = useQuery("repoData", () =>
        fetch("http://localhost:4001/obtener-todos").then((res) => res.json())
    );

    console.log(data);

    return (
        <div className="container pb-4">
            <h1>Loto Nicaragua</h1>
            <h2>Loto Diaria de hoy</h2>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                { isLoading ?
                    <p>Cargando...</p>
                : isError ?
                    <p>{JSON.stringify(error)}</p>
                :
                    <>
                        <LotoCard
                            color="primary"
                        />
                        <LotoCard
                            color="danger"
                        />
                        <LotoCard
                            color="warning"
                        />
                        <LotoCard
                            color="info"
                        />
                    </>     
                }
            </div>
            
            <h2>Fechas</h2>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                <LotoCard
                    color="primary"
                />
                <LotoCard
                    color="danger"
                />
                <LotoCard
                    color="warning"
                />
                <LotoCard
                    color="info"
                />
            </div>

            <h2>Jugá 3</h2>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                <LotoCard
                    color="primary"
                />
                <LotoCard
                    color="danger"
                />
                <LotoCard
                    color="warning"
                />
                <LotoCard
                    color="info"
                />
            </div>

            <h2>Premia2</h2>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                <LotoCard
                    color="primary"
                />
                <LotoCard
                    color="danger"
                />
                <LotoCard
                    color="warning"
                />
                <LotoCard
                    color="info"
                />
            </div>
        </div>
    );
}

export default App;
