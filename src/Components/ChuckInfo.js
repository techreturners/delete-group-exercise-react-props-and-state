function ChuckInfo(props) {

    return (
        <>
            <p>Number of Whales Saved: {props.whales}</p>

            <p>Number of Round House Kicks (in the last day): {props.kicks}</p>
        </>
    )
}

export default ChuckInfo;