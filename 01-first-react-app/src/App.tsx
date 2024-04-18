import { useEffect, useState } from "react";
import { Message } from "./Message";

function App() {
  const [advice, setAdive] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdive(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get advice</button>
        <Message count={count}/>
      </div>
    </>
  );
}

export default App;
