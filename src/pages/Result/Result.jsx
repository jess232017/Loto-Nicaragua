import React from 'react';
import { Key } from 'react-feather';

import { useQuery } from 'react-query';
import ResultList from '../../components/ResultList';

const URL = "https://loto-nic.herokuapp.com";

const Result = ({ name }) => {
    const { isLoading, isError, error, data } = useQuery("results-diaria", () =>
        fetch(URL + "/results/" + name).then((res) => res.json())
    );

    console.log(data)

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
                        {data?.resultado.map(value => (
                            <ResultList
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