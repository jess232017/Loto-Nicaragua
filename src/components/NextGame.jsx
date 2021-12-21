import React from 'react'
import CountDown from './CountDown';

const NextGame = () => {
    return ( 
        <div className="container">
            <div className="card rounded-xxl p-lg--5 border-0 bg-no-repeat" style={{ backgroundColor: "#e4f7fe" }}>
                <div className="card-body w-100 p-4 d-flex flex-column align-items-center">
                    <h1 className="text-grey-800 fw-700 display2-size display4-md-size mb-3 ls-0">El siguiente juego sera en</h1>
                    <CountDown/>
                </div>
            </div>
        </div>
    );
}
 
export default NextGame;