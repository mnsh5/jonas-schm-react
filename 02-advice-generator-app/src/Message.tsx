export function Message({ id, advice }: { id: number; advice: string }) {
  return (
    <>
      <h1>{id}</h1>
      <p>{advice}</p>;
    </>
  );
}
