import React from "react"

export default function Joke(props) {

    const [status, changeStatus] = React.useState("false")

    function isShown() {
        changeStatus(prevStatus => !prevStatus )
    }
    return (
         <article className="joke-card">
            <h1>"Jokes" for learning props and conditional formating</h1>
        <div> 
            {props.setup && <h3>{props.setup}</h3>} 
            {status ? null : <p>{props.punchline}</p> }
            <button onClick={isShown}>{status ? "Show" : "Hide"} punchline</button>
            <hr />
        </div>
        </article>
    )
}