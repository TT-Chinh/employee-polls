import Poll from "./Poll";

const ListQuestion = ({ qids, title }) => {
    return (
        
        <section className="section">
            <h2 className="center">{title}</h2>
            <div className="card-container">
            {
                qids.length > 0 ? 
                qids.map(id => <Poll key={id} id={id} />) :
                <div className="message-no-data">There are no question.</div>
            }
            </div>
        </section>
    )
}

export default ListQuestion;