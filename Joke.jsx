export const Joke = (props) => (
    <article className="joke-card">
        <h1>A "Joke" for the purposes of learning use of props in gym journal repo</h1>
        <h2>{props.question}</h2>
        <h3>{props.answer}</h3>
    </article>

)