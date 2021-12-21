import React from 'react';

import {useReactCountdown} from "use-react-countdown";
import { useMediaMatch } from "rooks";
import { DateTime } from "luxon";



const CountDown = () => {
    const dt = DateTime.local(DateTime.DATETIME_FULL);
    
    //Verificar la hora del siguiente sorteo
    const hour = dt.hour < 11 ? 11 : dt.hour < 15 ? 15 : dt.hour < 21 ? 21 : 11;
    //Agregar un dia si ya pasaron todas los sorteos del dia
    const plus = dt.hour < 21 ? 0 : 1; 
    dt.plus({days: plus})

    const date = `${dt.monthLong} ${dt.day + plus}, ${dt.year} ${hour}:00:00`;
    const { days, hours, minutes, seconds } = useReactCountdown(date);

    const isNarrowWidth = useMediaMatch("(min-width: 600px)");

    return ( 
        <div className={`timer ${isNarrowWidth && "bg-white mt-2 mb-0 w350 rounded-lg"}`}>
            <div className="timer">
                <div className="time-count">
                    <span className="text-time d-flex">{days.toString().padStart(2, "0")}</span>
                    <span className="text-day">Dias</span>
                </div>
                <div className="time-count">
                    <span className="text-time d-flex">{hours.toString().padStart(2, "0")}</span>
                    <span className="text-day">Horas</span>
                </div>
                <div className="time-count">
                    <span className="text-time d-flex">{minutes.toString().padStart(2, "0")}</span>
                    <span className="text-day">Min</span>
                </div>
                <div className="time-count">
                    <span className="text-time d-flex">{seconds.toString().padStart(2, "0")}</span>
                    <span className="text-day">Seg</span>
                </div>
            </div>
        </div>
    );
}
 
export default CountDown;