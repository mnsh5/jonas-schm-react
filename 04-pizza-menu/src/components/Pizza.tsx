type Pizza = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

export function Pizza({ data }: { data: Pizza[] }) {
  return (
    <>
      {data.map((pizza, index) => (
        <li key={index} className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
          <img src={pizza.photoName} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.soldOut ? "SOLD OUT" : `$${pizza.price}`}</span>
          </div>
        </li>
      ))}
    </>
  );
}
