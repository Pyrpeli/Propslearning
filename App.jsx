
import { Joke } from "./Joke";

const App = () => (
        <div className="jokes">
            <Joke
            question="How did the hacker escape the police?"
            answer="He just ransomware!"
            />
             <Joke
            question="Why do bees stay in the hive in the winter?"
            answer="Swarm"
            />
             <Joke
            question="What's the best thing about Switzerland?"
            answer="I don't know, but the flag is a big plus!"
            />                  
        </div>
    )

export default App