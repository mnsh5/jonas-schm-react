import { SkillType } from "./skills";

export function Skill({ data }: { data: SkillType[] }) {
  return (
    <>
      {data.map((skill) => (
        <div
          className="skill"
          style={{ backgroundColor: skill.color }}
          key={skill.id}
        >
          <span>{skill.skill}</span>
          <span>{skill.emoji}</span>
        </div>
      ))}
    </>
  );
}
