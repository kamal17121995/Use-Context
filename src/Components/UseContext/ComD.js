import React from 'react'
import { firstName, lastName } from './ComA'

function ComD() {
    return (
        <div>
            <firstName.Consumer>
                {(fName) => {
                    return (
                        <lastName.Consumer>
                            {(lName) => {
                                return (
                                    <h1>Hello {fName} {lName}</h1>
                                )
                            }}

                        </lastName.Consumer>
                    )
                }}
            </firstName.Consumer>
        </div>
    )
}

export default ComD
// under context Api there are three process to pass data
// createcontext
// provider
// consumer
// consumer part so lenghty in case of more than 1 data that why we will use useContext that is in ComC components