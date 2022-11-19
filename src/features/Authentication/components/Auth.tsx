import React, { useState, useEffect } from "react";
import { LoginScreen, SignupScreen } from "../../../components";
import "./auth.modules.scss";

const tabData = [
  {
    tab: "Log in",
    id: 1,
    tabName: "tab1",
    component: LoginScreen,
  },
  {
    tab: "Sign up",
    id: 2,
    tabName: "tab2",
    component: SignupScreen,
  },
];

const Authentication = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);

  return (
    <div className='auth'>
      <div className='auth_tabview'>
        {tabData.map((tabs) => (
          <button
            key={tabs.id}
            onClick={() => setActiveTab(tabs.tabName)}
            className={
              activeTab === `${tabs.tabName}`
                ? "auth_tabview_active"
                : "auth_tabview_button"
            }
          >
            {tabs.tab}
          </button>
        ))}
      </div>
      <div className='auth_tabcontainer'>
        {tabData.map((content) => (
          <div key={content.id} className='auth_tabcontainer_content'>
            {activeTab === content.tabName && <content.component />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Authentication;
