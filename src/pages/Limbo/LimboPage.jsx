import {useState} from "react";
import reactLogo from "../../assets/react.svg";
import CardGrid from "../../components/CardBox/CardBox.jsx";

function LimboPage() {
    const [count, setCount] = useState(0)

    return (
        <div className="LimboPage">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <h1>LIMBO</h1>
            <h2>{"<3 Vite + React <3"}</h2>
            <div className="card">
                <p>
                    Quick State Test
                </p>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit any file under <code>/src</code> and save to test HMR
                </p>
            </div>

            <CardGrid artOnly={true}/>
        </div>
    )
}

export default LimboPage;