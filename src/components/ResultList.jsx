import React from 'react';
const ResultList = ({ fecha, hora, numero }) => {
    return (
        <>
            <tr className="bg-blue">
                <td className="pt-2">
                    <section className="stage mini">
                        <figure className="ball">
                            <span className="number">{numero}</span>
                            {/*<span className="iris"></span> */}
                            <span className="ball-shadow"></span>
                        </figure>
                    </section>
                    <div className="pl-lg-5 pl-md-3 pl-1 name">{fecha}</div>
                </td>
                <td className="pt-3 mt-1">{hora}</td>
                <td className="pt-3">{numero}</td>
            </tr>
            <tr id="spacing-row">
                <td />
            </tr>
        </>
    );
}

export default ResultList;