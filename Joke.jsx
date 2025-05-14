import React from "react"

export default function Joke(props) {

    const [status, changeStatus] = React.useState("false")

    function isShown() {
        changeStatus(prevStatus => !prevStatus )
    }
    return (
        <>
         <article className="joke-card">
            <h4> A "joke" for learning props, state and conditional rendering </h4>
        <div> 
            {props.question && <h3>{props.question}</h3>} 
            {status ? null : <p>{props.punchline}</p> }
            <hr />
        </div>
        <button onClick={isShown}>{status ? "Show" : "Hide"} punchline</button>
        </article>
        </>
    )
}