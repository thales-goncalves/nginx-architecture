import { useState } from "react";

function App() {
  const [state, setState] = useState();

  const handleFetch = () => {
    fetch("/api/server")
      .then((response) => response.json())
      .then((data) => {
        setState(data.message);
      })
      .catch((error) => {
        console.error(error)
      });
  };

  return (
    <div>
      <h1>GET Data from API running at port: 3001</h1>
      <button onClick={handleFetch}>Fetch Data</button>
      <p>{state}</p>
    </div>
  );
}

export default App;
