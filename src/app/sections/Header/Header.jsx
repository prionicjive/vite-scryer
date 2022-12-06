import reactLogo from "../../../assets/react.svg";
import "./Header.css";

function Header() {
    return (
        <header className="Header">
            <div className="Header-slot">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
            </div>
            <div className="Header-slot">
                <div className="Header-title">
                    Scryer
                </div>
            </div>
            <div className="Header-slot">
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
        </header>
    );
}

export default Header;