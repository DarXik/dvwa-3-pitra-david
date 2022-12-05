import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card, { CardBlue } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CardBlue />
      <Card data="Cus" />
      <Card data="Ahoj" />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
