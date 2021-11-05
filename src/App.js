import React from 'react'
import LotoCard from './components/LotoCard';

import { useQuery } from 'react-query';

const App = () =>{
    const { isLoading, isError, error, data } = useQuery("repoData", () =>
        fetch("https://loto-nic.herokuapp.com/obtener-todos").then((res) => res.json())
    );

    console.log(data);

    return (
        <div className="container pb-4">
            <h1>Loto Nicaragua</h1>
            <h2>Loto Diaria</h2>
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
            
            <h2>Fechas</h2>
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

            <h2>Jugá 3</h2>
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

            <h2>Premia 2</h2>
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
    );
}

export default App;
