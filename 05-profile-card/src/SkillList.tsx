import { Skill } from "./Skill";
import { data } from "./skills";

export function SkillList() {
  return (
    <div className="skill-list">
      <Skill data={data} />
    </div>
  );
}
