import React, { useState } from 'react'

const UseState = () => {
    const [name, setUpdateName] = useState("I'm Sagar Das");
    const ChangeName = () => {
        let val = name;
        // if (val === "I'm Sagar Das") {
        //     setUpdateName("People calls me Kisan")
        // } else {
        //     setUpdateName("I'm Sagar Das")
        // }
        //ternary operator
        (val === "I'm Sagar Das") ? setUpdateName("People calls me Kisan") : setUpdateName("I'm Sagar Das")

    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={ChangeName}>Subscribe</button>
        </div>
    )
}

export default UseState
