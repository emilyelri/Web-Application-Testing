import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  useEffect(() => {
    if (strikes === 3 || balls === 4) {
      setStrikes(0);
      setBalls(0);
      alert("Batter up!");
    }
  }, [strikes, balls]);

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
    </div>
  );
}

export default App;
