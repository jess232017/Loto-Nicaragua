import React from 'react';

import Skeleton from 'react-loading-skeleton'
import { useMediaQuery } from 'react-responsive';

import 'react-loading-skeleton/dist/skeleton.css';

const ResultSkeleton = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 991px)'
    })

    return (
        <>
            <tr style={{ border: '1px solid #f6f7fc' }}>
                <td className="pt-3">
                    <div>
                        {isDesktopOrLaptop && (
                            <Skeleton style={{ width: '45px', height: '45px' }} circle={true}>
                            </Skeleton>
                        )}
                        <div className="pl-lg-5 pl-md-3 pl-1 text-white"><Skeleton /></div>
                    </div>
                </td>
                <td className="pt-3 text-white">
                    <Skeleton />
                </td>
                <td className="pt-3 text-white">
                    {!isDesktopOrLaptop ?
                        <Skeleton style={{ width: '60px', height: '60px' }} circle={true}>
                        </Skeleton>
                        :
                        <Skeleton />
                    }
                </td>
            </tr>
            <tr id="spacing-row">
                <td />
            </tr>
        </>
    )
}

export default ResultSkeleton;