import React, { useState } from 'react'

const ShortCircuitEvaluation = () => {

    const [demo, setDemo] = useState("abc")
    console.log(setDemo)
    return (
        <div>
            <h1 className='h1style'>{demo || "Das"}</h1>
            <h1 className='h1style'>{"Das" || demo}</h1>
            <h1 className='h1style'>{demo && "Sagar"}</h1>
        </div>
    )
}

export default ShortCircuitEvaluation
