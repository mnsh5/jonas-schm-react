type Props = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
  onToggleItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

export function Item({
  id,
  description,
  quantity,
  packed,
  onToggleItem,
  onDeleteItem,
}: Props) {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggleItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
