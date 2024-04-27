import { useState } from "react";

import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

import { InitialItemType } from "./items";

function App() {
  const [items, setItems] = useState<InitialItemType[]>([]);

  function handleAddItems(item: InitialItemType) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </>
  );
}

export default App;
