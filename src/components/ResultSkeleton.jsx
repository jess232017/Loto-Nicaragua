import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ResultSkeleton = () => {
    return (
        <>
            <tr style={{ border: '1px solid #f6f7fc' }}>
                <td className="pt-2">
                    <Skeleton style={{ width: '45px', height: '45px' }} circle={true}>
                    </Skeleton>
                    <div className="pl-lg-5 pl-md-3 pl-1 name"><Skeleton /></div>
                </td>
                <td className="pt-3 mt-1"><Skeleton /></td>
                <td className="pt-3"><Skeleton /></td>
            </tr>
            <tr id="spacing-row">
                <td />
            </tr>
        </>
    );
}

export default ResultSkeleton;