import { useEffect, useState } from "react";
import axios from "axios";

import { Message } from "./Message";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <Message id={advice.id} advice={advice.advice} />
      <button onClick={getAdvice}>Obtener nuevo consejo</button>
    </div>
  );
}

export default App;
