import { connect } from "react-redux";
import { useState } from "react";
import { checkVotedPoll } from "../utils/helpers";
import ListQuestion from "./ListQuestion";

function Dashboard({ qnews, qdones }) {
    const [tab,setTab] = useState("new");

    const classNewTab = tab === "new" ? "tab tab-left active" : "tab tab-left";
    const classDoneTab = tab === "done" ? "tab tab-right active" : "tab tab-right";

    return (
        <div>
            <h1 data-testid="hearder">Dashboard</h1>
            <div className="section">
                <div className="tab-container">
                    <div className={classNewTab} 
                        onClick={e => { e.preventDefault(); setTab("new");}}>
                        New Questions
                    </div>
                    <div className={classDoneTab}
                        onClick={e => { e.preventDefault(); setTab("done");}}>
                        Done
                    </div>
                </div>
                { tab === "new" && <ListQuestion qids={qnews} /> }
                { tab === "done" && <ListQuestion qids={qdones} /> }
            </div>
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