export type SkillType = {
  id: number;
  skill: string;
  emoji: string;
  color: string;
};

export const data: SkillType[] = [
  {
    id: 1,
    skill: "React",
    emoji: "💪",
    color: "blue",
  },
  {
    id: 2,
    skill: "HTML+CSS",
    emoji: "💪",
    color: "orange",
  },
  {
    id: 3,
    skill: "JavaScript",
    emoji: "💪",
    color: "yellow",
  },
  {
    id: 4,
    skill: "Svelte",
    emoji: "👶",
    color: "orangered",
  },
];
