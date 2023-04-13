//clean up function

import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth = () => {
        setWidthCount(window.innerWidth)
        // console.log('object')
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth)
        return () => {
            window.removeEventListener("resize", actualWidth)

        }
    });

    return (
        <div>
            <h2>Actual size of the Window</h2>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
