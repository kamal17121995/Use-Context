
import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            id: 0,
            myName: 'Sagar',
            myAge: 27
        },
        {
            id: 1,
            myName: 'Das',
            myAge: 28
        },
        {
            id: 2,
            myName: 'Das',
            myAge: 28
        }
    ]

    const [myArray, setMyArray] = useState(bioData)

    const clearArray = () => {
        setMyArray([])
    }
    const removeElem = (id) => {
        // console.log(id)
        const myNewArray = myArray.filter((currElem) => {
            return currElem.id !== id;
        })
        setMyArray(myNewArray);
    }

    return (
        <div>
            {
                myArray.map((currElm) => {
                    return (
                        <h1 className='h1style' key={currElm.id}>
                            name: {currElm.myName} and age: {currElm.myAge}
                            <button className='btnInner' onClick={() => removeElem(currElm.id)}>remove</button>
                        </h1>
                    )
                })
            }
            <button className='btn' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UseStateArray
