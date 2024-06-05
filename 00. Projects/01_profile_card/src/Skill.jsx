function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: `${props.color}` }}>
      {props.skill_name}
    </div>
  );
}

export default Skill;
