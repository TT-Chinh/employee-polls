import Poll from "./Poll";

const ListQuestion = ({ qids }) => {
    return (
        <div className="card-container">
        {
            qids.length > 0 ? 
            qids.map(id => <Poll key={id} id={id} />) :
            <div className="message-no-data">There are no question.</div>
        }
        </div>
    )
}

export default ListQuestion;