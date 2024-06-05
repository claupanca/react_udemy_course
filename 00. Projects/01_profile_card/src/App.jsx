import Avatar from "./Avatar";
import Data from "./Data";
import SkillList from "./Skill-List";

import { useState } from "react";

import "./styles.css";

const SKILLS = [
  { skill: "Javascript", color: "aqua" },
  { skill: "HTML+CSS", color: "bisque" },
  { skill: "TypeScript", color: "brown" },
  { skill: "GTM", color: "blue" },
  { skill: "TealiumIQ", color: "coral" },
  { skill: "Adobe Launch", color: "darkcyan" },
  { skill: "React", color: "darkgreen" },
];

function App() {
  const [skills, setSkills] = useState(SKILLS);

  return (
    <div className="card">
      <Avatar />
      <Data skills={skills} />
    </div>
  );
}

export default App;
