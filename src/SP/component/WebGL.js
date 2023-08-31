/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useSelector } from "react-redux";

import UnityNormalGIF from "../img/UnityRun_Normal.gif";
import UnityfalldownGIF from "../img/UnityRun_falldown.gif";
import UnityguraguraGIF from "../img/UnityRun_guragura.gif";

function WebGL({ index }) {
  const [state, setFlag] = useState(false);
  const [buttonState, setButtonFlag] = useState(true);
  const unityStyle = {
    width: "100%",
    height: "100%",
    visibility: state ? "visible" : "hidden",
  };

  let org_index = index.slice();
  console.log("bef", org_index);

  index.forEach(function (value, id) {
    index[id] = Math.abs(index[id]);
  });
  console.log("aft", org_index);
  let sum = index.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let Unity_scene = 0;

  // if (sum === 0) {
  //   Unity_scene = 0;
  // } else if (1 < sum && sum < 3) {
  //   Unity_scene = 1;
  // } else if (3 < sum && sum < 6) {
  //   Unity_scene = 2;
  // } else if (6 < sum && sum < 8) {
  //   Unity_scene = 3;
  // } else if (8 < sum && sum < 10) {
  //   Unity_scene = 4;
  // } else if (sum > 10) {
  //   Unity_scene = 5;
  // }

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={
            [
              UnityNormalGIF,
              UnityfalldownGIF,
              UnityguraguraGIF,
              UnityNormalGIF,
              UnityNormalGIF,
            ][Unity_scene]
          }
          style={unityStyle}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="unity"
        >
          <a
            href="#_"
            className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#37AB9D] rounded-full hover:bg-white group"
            style={{ visibility: buttonState ? "visible" : "hidden" }}
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <button
              className="relative w-full text-left font-bold text-32 text-white transition-colors duration-200 ease-in-out group-hover:text-[#37AB9D]"
              onClick={() => {
                setButtonFlag(() => false);
                setFlag(() => true);
              }}
            >
              Result
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default WebGL;
