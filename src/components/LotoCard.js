import React from 'react'

const LotoCard = ({color}) => {
    return ( 
        <div className="col">
            <div className={`card radius-15 bg-${color}`}>
                <div className="card-body text-center">
                    <div className="p-4 radius-15">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="1" width={110} height={110} className="rounded-circle shadow p-1 bg-white"/>
                        <h5 className="mb-0 mt-5 text-white">
                            Pauline I. Bird
                        </h5>
                        <p className="mb-3 text-white">
                            Webdeveloper
                        </p>
                        <div className="list-inline contacts-social mt-3 mb-3"> 
                            <a href="#" className="list-inline-item border-0"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="list-inline-item border-0"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="list-inline-item border-0"><i className="bx bxl-linkedin" /></a>
                        </div>
                        <div className="d-grid">
                            <a href="#" className="btn btn-white radius-15">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LotoCard;