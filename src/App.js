import { useState } from "react";
import "./App.css";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <div className="title">
          <h3
            onClick={() => setView("basic")}
            style={{ color: view === "basic" ? "#fff" : "", cursor: "pointer" }}
          >
            Basic
          </h3>
          <h3
            onClick={() => setView("advanced")}
            style={{
              color: view === "advanced" ? "#fff" : "",
              cursor: "pointer",
            }}
          >
            Advanced
          </h3>
        </div>
        {view === "basic" ? <BasicForm /> : <AdvancedForm />}
      </nav>
    </div>
  );
}

export default App;
