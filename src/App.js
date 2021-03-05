import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header title="ConnerCharlebois.com JS" />
                <img src={logo} className="App-logo" alt="logo" />
                <p>This content is coming soon.</p>
            </header>
        </div>
    );
}

export default App;
