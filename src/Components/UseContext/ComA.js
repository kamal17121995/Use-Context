import React, { createContext } from 'react'
import ComB from './ComB'

const firstName = createContext();
const lastName = createContext();

function ComA() {
    return (
        <div>
            <firstName.Provider value={"Sagar"}>
                <lastName.Provider value={"Das"}>
                    <ComB />
                </lastName.Provider>
            </firstName.Provider>

        </div>
    )
}

export default ComA
export { firstName, lastName };

