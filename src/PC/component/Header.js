import React, { useState } from "react";
import TutorialModal from "./ModalOpen_tutorial";
import unity_run from "../img/Unitychan_run.gif";
import info_icon from "../img/info.png";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={unity_run}
          alt="UnityChanAnimation"
          style={{ width: "75px", height: "75px" }}
        />
        <p
          className="font-bold text-3xl bg-[#F3F3F3] text-[#37AB9D]"
          style={{ marginTop: "10px", marginLeft: "10px" }}
        >
          Nutri PRuner
        </p>
      </div>
      <img
        src={info_icon}
        alt="Infomaiton Icon"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
        onClick={handleInfoClick}
      />
      {showInfo && <TutorialModal />}
    </div>
  );
};

export default Header;
