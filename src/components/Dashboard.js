import { connect } from "react-redux";
import { checkVotedPoll } from "../utils/helpers";
import ListQuestion from "./ListQuestion";

function Dashboard({ qnews, qdones }) {
    return (
        <div>
            <ListQuestion qids={qnews} title="New Questions" />
            <ListQuestion qids={qdones} title="Done" />
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions }) => {
    let qnews = Object.keys(questions)
                    .filter(q => !checkVotedPoll(questions[q],authedUser))
                    .sort(
                        (a, b) => questions[b].timestamp - questions[a].timestamp
                    );
    let qdones = Object.keys(questions)
                    .filter(q => checkVotedPoll(questions[q],authedUser))
                    .sort(
                        (a, b) => questions[b].timestamp - questions[a].timestamp
                    );
    return {
        qnews,
        qdones,
    }
}

export default connect(mapStateToProps)(Dashboard);