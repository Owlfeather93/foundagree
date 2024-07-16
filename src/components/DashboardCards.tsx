import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Dashboard.css";
import { RiContractFill } from "react-icons/ri";
import { SiAwssecretsmanager } from "react-icons/si";

const DashboardCards = () => {
  const navigate = useNavigate();

  const optionsList = [
    {
      title: "New contract",
      icon: (
        <RiContractFill
          className="dashboard-card-icon"
          size={50}
          color={"#ccc"}
        />
      ),
      onClickPath: "/new-contract",
    },
    {
      title: "My contracts",
      icon: (
        <SiAwssecretsmanager
          className="dashboard-card-icon"
          size={50}
          color={"#ccc"}
        />
      ),
      onClickPath: "/my-contracts",
    },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <ul className="dashboard-cards-container">
      {optionsList.map((option, index) => (
        <div
          onClick={(e) => handleNavigation(e, option.onClickPath)}
          key={index}
          className="dashboard-card flex-center"
        >
          <div>
            {option.icon}
            <li className="text-center">{option.title}</li>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default DashboardCards;
