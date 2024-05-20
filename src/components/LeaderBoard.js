import { connect } from "react-redux";

const LeaderBoard = ({ userIds, users }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Users</th>
                    <th>Answered</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
            {
                userIds.map(id => (
                    <tr key={id}>
                        <td className="d-flex">
                            <img className="avatar" alt="avatar" src={users[id].avatarURL} />
                            <div>
                                <div><strong>{users[id].name}</strong></div>
                                <div className="time">{id}</div>
                            </div>
                        </td>
                        <td>{Object.keys(users[id].answers).length}</td>
                        <td>{users[id].questions.length}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

const mapStateToProps = ({ users }) => ({
    userIds: Object.keys(users).sort(
        (a,b) => {
            const n = users[b].questions.length - users[a].questions.length;
            if(n === 0){
                return Object.keys(users[b].answers).length - Object.keys(users[a].answers).length;
            }
            return n;
        }
    ),
    users,
})

export default connect(mapStateToProps)(LeaderBoard);