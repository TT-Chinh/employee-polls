import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Poll = ({ poll }) => {
    const navigate = useNavigate();

    const handleShow = (e) => {
        e.preventDefault();
        navigate(`/poll/${poll.id}`);
    }

    return (
        <div className="card">
            <div className="card-part">
                <label>{poll.author}</label>
                <div className="time">{formatDate(poll.timestamp)}</div>
            </div>
            <div className="card-part">
                <button className="card-btn" onClick={handleShow}>Show</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({questions}, {id}) => ({ poll: questions[id] });

export default connect(mapStateToProps)(Poll);