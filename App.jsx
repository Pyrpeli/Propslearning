
import Joke from "./Joke"
import jokes from "./JokesData"

const App = () => {
    const jokeElements = jokes.map(joke => {
        return <Joke question={joke.question} punchline={joke.punchline} />
    })
    return (
        <main className="jokes">
            {jokeElements}
        </main>
    )
}

export default App
