import React from 'react';
import { useMediaQuery } from 'react-responsive';

const SmallBall = ({ number }) => (
    <section className="stage mini">
        <figure className="ball">
            <span className="number">{number}</span>
            {/*<span className="iris"></span> */}
            <span className="ball-shadow"></span>
        </figure>
    </section>
);

const ResultList = ({ fecha, hora, numero }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 991px)'
    })

    return (
        <>
            <tr className="bg-blue">
                <td className="pt-3">
                    {isDesktopOrLaptop && (
                        <SmallBall number={numero} />
                    )}
                    <div className="pl-lg-5 pl-md-3 pl-1">{fecha}</div>
                </td>
                <td className="pt-3">{hora}</td>
                <td className="pt-3">{!isDesktopOrLaptop ?
                    <SmallBall number={numero} />
                    :
                    numero
                }</td>
            </tr>
            <tr id="spacing-row">
                <td />
            </tr>
        </>
    );
}

export default ResultList;