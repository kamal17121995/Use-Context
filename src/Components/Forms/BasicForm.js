import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { id: new Date().getTime().toString(), email: email, password: password }

        setAllEntry([...allEntry, newEntry])
        console.log(allEntry)
        console.log(newEntry.id)
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <form action='' onSubmit={submitForm}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Login</button>
            </form>
            <div>
                {
                    allEntry.map((currElm) => {
                        return (
                            <div className='showDetails' key={currElm.id}>
                                <p>{currElm.email}</p>
                                <p>{currElm.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasicForm
