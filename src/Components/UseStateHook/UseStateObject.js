import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({ myName: "Sagar", age: 27, company: "Accenture" });

    const changeOnject = () => {
        // let val = myObject;
        // console.log(val)
        // if (val === { myName: "Sagar", age: 27, company: "Accenture" }) {
        //     setMyObject({ ...myObject, myName: "kisan" })
        // } else {
        //     setMyObject({ ...val, myName: "Sagar", age: 27, company: "Accenture" })
        // }
        setMyObject({ ...myObject, myName: 'Kisan' })

    }
    return (
        <div>
            <h1 className='h1style'>Name:{myObject.myName} & Age: {myObject.age} & Company:{myObject.company}</h1>
            <button className='btn' onClick={changeOnject}>Update</button>
        </div>
    )
}

export default UseStateObject
