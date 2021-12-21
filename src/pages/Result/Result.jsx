import React, { useEffect } from 'react';

import { useQuery } from 'react-query';
import ResultList from '../../components/ResultList';
import ResultSkeleton from '../../components/ResultSkeleton';

const URL = "https://loto-nic.herokuapp.com";

const Result = ({ name }) => {
    const { isLoading, isError, error, data } = useQuery("results-" + name, () =>
        fetch(URL + "/results/" + name).then((res) => res.json())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container rounded mt-5 bg-white p-md-5">

            <h1 className="fw-400 font-lg mb-4 pb-4">Loto <b>{name}</b></h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Numero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ?
                            <>
                                <ResultSkeleton />
                                <ResultSkeleton />
                                <ResultSkeleton />
                                <ResultSkeleton />
                                <ResultSkeleton />
                                <ResultSkeleton />
                            </> : isError ?
                                <p>{JSON.stringify(error)}</p>
                                : data?.resultado.map(value => (
                                    <ResultList
                                        name={name}
                                        key={`${value?.fecha} ${value?.hora}`}
                                        {...value}
                                    />
                                ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Result;