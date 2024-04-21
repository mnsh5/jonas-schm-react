export function Skill({
  skill,
  emoji,
  color,
}: {
  skill: string;
  emoji: string;
  color: string;
}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}
