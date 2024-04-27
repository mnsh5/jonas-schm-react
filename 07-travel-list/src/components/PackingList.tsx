import { Item } from "./Item";

import { InitialItemType } from "../items";

interface Props {
  items: InitialItemType[];
}

export function PackingList({ items }: Props) {
  function onToggleItem() {}
  function onDeleteItem() {}

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
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
