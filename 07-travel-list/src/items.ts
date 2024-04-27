type InitialItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

export const initialItems: InitialItemType[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
