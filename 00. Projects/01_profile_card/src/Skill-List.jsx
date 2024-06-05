import Skill from "./Skill";

function SkillList(props) {
  const skills = props.skills;

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skill} skill_name={skill.skill} color={skill.color} />
      ))}
    </div>
  );
}

export default SkillList;
