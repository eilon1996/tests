import React, { useState } from 'react';
import axios from 'axios';

const Registrate = (props) => {

    const [user, setUser] = useState();
    const [submitName, setSubmitName] = useState("")


    function handleSubmit(event) {
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (email && email.length > 0 && password && password.length > 0) {
            axios.post('/'+submitName, { // login or signup
                body: {"email": email, "password": password}
            }).then(response => {
                if (response.data) {
                    setUser(response.data)
                    alert("you " + submitName + " successfuly")
                }
                else {
                    alert("you couldn't " + submitName)
                }
            })
        }
        else {
            alert("you need to fill all fields")
        }
        event.preventDefault();
    }

    return (
        <div>
            <h1>Page1</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h3>my user: {user ? user.email: "no one is loged in"}</h3>
                <input name="email" placeholder="Email" />
                <input name="password" placeholder="password" />
                <button type="submit" onClick={() => setSubmitName("login")} name="login">login</button>
                <button type="submit" onClick={() => setSubmitName("signup")} name="signup">sign up</button>
            </form>
        </div>
    );
}

export default Registrate;