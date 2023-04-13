import React, { useContext } from 'react'
import ComD from './ComD'
import { firstName, lastName } from './ComA'


function ComC() {
    const fName = useContext(firstName);
    const lName = useContext(lastName);

    return (
        <div>
            <h1>Hello {fName} {lName}</h1>
        </div>
        
    )
}

export default ComC
