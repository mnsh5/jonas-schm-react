import { Item } from "./Item";

import { initialItems } from "../items";

export function PackingList() {
  function onToggleItem() {}
  function onDeleteItem() {}

  return (
    <div className="list">
      <ul>
        {initialItems.map(({ id, description, quantity, packed }) => (
          <Item
            key={id}
            id={id}
            description={description}
            quantity={quantity}
            packed={packed}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}
