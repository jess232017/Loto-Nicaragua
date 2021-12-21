import React from 'react'
const NumberCard = ({color, dia, hora, numero}) => {
    return ( 
        <div className="col">
            <div className={`card border-0 mb-4 bg-white shadow-xss shadow-xss rounded-lg bg-${color}`}>
                <div className={`card-body p-5 -border-top-lg -border-size-lg -border-${color}`}>
                    <section className="stage">
                        <figure className="ball">
                            <span className="number">{numero}</span>
                            <span className="ball-shadow"></span>
                        </figure>
                    </section>
                    <h2 className="font-xs fw-700 mt-3 mb-3 text-white">{dia}</h2>
                    <span className={`font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-${color}`}>{hora}</span>
                </div>
            </div>
        </div>
    );
}
 
export default NumberCard;