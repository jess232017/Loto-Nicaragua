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

const ResultList = ({ fecha, hora, numero, name }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 991px)'
    })

    return (
        <>
            <tr className={`bg-${name} mini-card`}>
                <td className="pt-3">
                    <div>
                        {isDesktopOrLaptop && (
                            <SmallBall number={numero} />
                        )}
                        <div className="pl-lg-5 pl-md-3 pl-1 text-white">{fecha}</div>
                    </div>
                </td>
                <td className="pt-3 text-white">
                    {hora}
                </td>
                <td className="pt-3 text-white">
                    {!isDesktopOrLaptop ?
                        <SmallBall number={numero} />
                        :
                        numero
                    }
                </td>
            </tr>
            <tr id="spacing-row">
                <td />
            </tr>
        </>
    );
}

export default ResultList;