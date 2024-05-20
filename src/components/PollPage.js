import { connect } from "react-redux";
import PollOption from "./PollOption";
import withRouter from "../router/withRouter";
import { checkVotedPoll } from "../utils/helpers";

const PollPage = (props) => {
    const { user, question, authedUser } = props;

    const answered = checkVotedPoll(question,authedUser);

    return (
        <div className="container">
            <h2 className="center">Poll by {user.name}</h2>
            <div className="box-center"><img alt={user.id} src={user.avatarURL} className="poll-author-avatar" /></div>
            <h2 className="center">Would You Rather</h2>
            <div className="poll-option-container">
                <PollOption 
                    option="optionOne"
                    answered={answered}
                    question={question}
                />
                <PollOption 
                    option="optionTwo"
                    answered={answered}
                    question={question}
                />
            </div>
        </div>
    )
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
    const { id } = props.router.params;
    return {
        user: users[questions[id].author],
        question: questions[id],
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(PollPage));