import { useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin({ id, password }));
        setId("");
        setPassword("");
    }

    return (
        <div className="container">
            <h2 className="center">Employee Polls</h2>
            <div className="box-center"><div className="login-avatar"></div></div>
            <h3 className="center">Login</h3>
            <form onSubmit={handleSubmit}>
                <label className="center">User</label>
                <input type="text" value={id} placeholder="User" onChange={e => setId(e.target.value)} />
                <label className="center">Password</label>
                <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <div className="box-center">
                    <button type="submit" className="btn center" disabled={id === "" || password === ""}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default connect()(Login);