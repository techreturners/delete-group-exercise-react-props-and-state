function ChuckCard(props) {

    const chuckSoStylish = {
        width: "900px", 
        border: "10px solid green",
    }

    return (
        <>
            <h2>{props.chuckGreet}</h2>

            <img src={props.chuckImg}
                alt="Chuck Norris riding a killer whale" 
                style={chuckSoStylish}/>
        </>
    )
}

export default ChuckCard;