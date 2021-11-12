import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LotoSkeleton = () => {
    return ( 
        <div className="col">
            <div className="card mb-2 radius-15">
                <div className="card-body text-center">
                    <div className="p-4 radius-15">
                        <section className="stage mb-2">
                            <Skeleton style={{height: '100%'}} circle={true}>
                            </Skeleton>
                        </section>

                        <h2 className="font-xs fw-700 mt-3 mb-3 text-white"><Skeleton /> </h2>
                        <p className="mb-0 text-white fw-600"><Skeleton /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LotoSkeleton;