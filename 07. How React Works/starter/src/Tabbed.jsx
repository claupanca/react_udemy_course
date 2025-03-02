import { useState } from "react";

import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";

export default function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {/* we have added a Key to the TabContent, so that React will know that each Component in UNIQUE and should trigger a state update */}
      {activeTab <= 2 ? (
        <TabContent key={activeTab} item={content.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}
