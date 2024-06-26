import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PollOption from "./PollOption";
import withRouter from "../router/withRouter";

const PollPage = (props) => {
    const { user, question, authedUser } = props;

    if(!user || !question || !authedUser){
        return <Navigate to="*"/>
    }

    return (
        <div className="container">
            <h2 className="center">Poll by {user.name}</h2>
            <div className="box-center"><img alt={user.id} src={user.avatarURL} className="poll-author-avatar" /></div>
            <h2 className="center">Would You Rather</h2>
            <div className="poll-option-container">
                <PollOption 
                    option="optionOne"
                    question={question}
                />
                <PollOption 
                    option="optionTwo"
                    question={question}
                />
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
    try{
        const { id } = props.router.params;
        return {
            user: users[questions[id].author],
            question: questions[id],
            authedUser,
        }
    }
    catch(e) {
        return <Navigate to="" />
    }
}

export default withRouter(connect(mapStateToProps)(PollPage));