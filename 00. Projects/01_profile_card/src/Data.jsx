import SkillList from "./Skill-List";

function Data(props) {
  return (
    <div className="data">
      <h1>Claudiu Panca</h1>
      <p>
        Senior Analytics Engineer and aspiring Frontend developer. Seasoned on
        Google Tag Manager, Google Analytics, Adobe Launch, Adobe Analytics and
        Tealium.{" "}
      </p>
      <SkillList skills={props.skills} />
    </div>
  );
}

export default Data;
