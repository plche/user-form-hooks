import React, {useRef, useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usernameInputEl = useRef(null);

    const createUser = e => {
        e.preventDefault();
        const newUser = {username, email, password};
        console.log("Welcome", newUser);
        // cleaning
        setPassword("");
        setEmail("");
        setUsername("");
        // giving focus on first input after cleaning, have to use useRef hook
        usernameInputEl.current.focus();
    };

    return(
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} ref={usernameInputEl} autoFocus />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;