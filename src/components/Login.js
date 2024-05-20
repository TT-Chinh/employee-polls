import { useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, users }) => {
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(id));
        setId("");
    }

    return (
        <div className="container">
            <h2 className="center">Employee Polls</h2>
            <div className="box-center"><div className="login-avatar"></div></div>
            <h3 className="center">Login</h3>
            <form onSubmit={handleSubmit}>
                <label className="center">User</label>
                <select defaultValue={id} onChange={e => setId(e.target.value)} >
                    <option value="" disabled>Choose a user</option>
                    {
                        Object.keys(users).map(id => (
                            <option key={id} value={id}>{users[id].name}</option>
                        ))
                    }
                </select>
                <div className="box-center">
                    <button type="submit" className="btn center" disabled={id === ""}>Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Login);