

function CollegeCard(props) {
    

    return (
        <div style={{padding: "20px", border: "1px solid #f3f3f3", 
                    boxShadow:"2px 10px 20px #f2f2f2", cursor: "pointer", height: "250px"}} 
            onClick={props.onCardClick}>
            <div><h2 style={{height: "150px", overflow: "hidden"}}>{props.name}</h2></div>
            <div><h3>{props.country}</h3></div>
        </div>
    )
}

export default CollegeCard;