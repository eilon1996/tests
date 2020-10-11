import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

const Registrate = (props) => {

    const [user, setUser] = useState();
    const [submitName, setSubmitName] = useState("")

    useEffect(() => {
        const token = cookie.load('auth');
        axios.post('/login-token', { token }).then(res => {
            if (res.data) {
                setUser(res.data.user);
                cookie.save('auth', token, { path: '/', maxAge: 3600 * 24 * 30 });
            }
        })
            .catch((err) => console.log(err));
    }, [])


    function handleSubmit(event) {
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (email && email.length > 0 && password && password.length > 0) {
            axios.post('/' + submitName,  // login or signup
                { "email": email, "password": password }
            ).then(res => {
                if (res.data) {
                    console.log("res.data.user", res.data.user);
                    setUser(res.data.user);
                    cookie.save('auth', res.data.user.token, { path: '/', maxAge: 3600 * 24 * 30 });
                    alert("you " + submitName + " successfuly")
                }
                else {
                    alert("you couldn't " + submitName)
                }
            })
                .catch((err) => console.log(err))
        }
        else {
            alert("you need to fill all fields")
        }
        event.preventDefault();
    }

    return (
        <div className="route-page">
            <h1>login - sign up</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h3 className="form-title">my user: {user ? user.email : "no one is loged in"}</h3>
                <input name="email" placeholder="Email" />
                <input name="password" placeholder="password" />
                <div className="buttons">
                    <button type="submit" className="login" onClick={() => setSubmitName("login-name")} name="login">login</button>
                    <button type="submit" className="sign-up" onClick={() => setSubmitName("signup")} name="signup">sign up</button>
                </div>
            </form>
        </div>
    );
}

export default Registrate;