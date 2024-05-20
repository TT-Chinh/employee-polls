import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { calculatePercentage, checkVotedPoll } from "../utils/helpers";

const PollOption = (props) => {
    const { option, question, dispatch, user } = props;

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(handleAnswerQuestion(user.id, question.id, option));
    }

    const answered = checkVotedPoll(question,user.id);

    const votes = option === "optionOne" ? question.optionOne.votes.length : question.optionTwo.votes.length;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const percen = calculatePercentage(votes,totalVotes);

    let classPollOption = answered === true && user.answers[question.id] === option ? "poll-option answered" : "poll-option";

    return (
        <div className={classPollOption}>
            <div className="poll-option-text">{question[option].text}</div>
            {answered === false && <div className="answer-poll-btn" onClick={handleClick}>Click</div>}
            {
                answered === true && 
                <div className="poll-option-text" data-testid="poll-option-info">
                    <span>{votes} votes | {percen}%</span>
                </div>
            }
        </div>
    )
}

const mapStateToProps = ({ authedUser, users }) => ({ user: users[authedUser] });

export default connect(mapStateToProps)(PollOption);