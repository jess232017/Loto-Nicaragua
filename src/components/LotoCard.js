import React from 'react'

const LotoCard = ({color, dia, hora, numero}) => {
    return ( 
        <div className="col">
            <div className={`card mb-2 radius-15 bg-${color}`}>
                <div className="card-body text-center">
                    <div className="p-4 radius-15">
                        
                        <section className="stage">
                            <figure className="ball">
                                <span className="number">{numero}</span>
                                <span className="ball-shadow"></span>
                            </figure>
                        </section>

                        <h2 className="font-xs fw-700 mt-3 mb-3 text-white">{dia}</h2>
                        <p className="mb-0 text-white fw-600">
                            {hora}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LotoCard;