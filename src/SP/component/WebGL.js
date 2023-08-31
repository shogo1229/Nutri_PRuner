import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useSelector } from "react-redux";

function WebGL({ index }) {
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "unity/Hakkason_webGL2_build.loader.js",
      dataUrl: "unity/Hakkason_webGL2_build.data",
      frameworkUrl: "unity/Hakkason_webGL2_build.framework.js",
      codeUrl: "unity/Hakkason_webGL2_build.wasm",
    });

  const [state, setFlag] = useState(false);
  const [buttonState, setButtonFlag] = useState(true);
  const loadFlag = useSelector((state) => state.setToState);
  const unityStyle = {
    width: "100%",
    height: "70vh",
    //visibility: state ? "visible" : "hidden",
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

  if (sum === 0) {
    Unity_scene = 0;
  } else if (1 < sum && sum < 3) {
    Unity_scene = 1;
  } else if (3 < sum && sum < 6) {
    Unity_scene = 2;
  } else if (6 < sum && sum < 8) {
    Unity_scene = 3;
  } else if (8 < sum && sum < 10) {
    Unity_scene = 4;
  } else if (sum > 10) {
    Unity_scene = 5;
  }

  console.log("Use Scene", Unity_scene);
  useEffect(() => {
    if (loadFlag) {
      sendMessage("1sou_right", "scenechange", Unity_scene);
    }
  }, [loadFlag]);

  const changeSize = () => {
    const sou1_right = compareValues(org_index[3]);
    const sou1_left = compareValues(org_index[4]);
    const sou2 = compareValues(org_index[2]);
    const sou3 = compareValues(org_index[1]);
    const sou4 = compareValues(org_index[0]);

    //大きさを変更
    sendMessage("1sou_right", "transformKoma", sou1_right);
    sendMessage("1sou_left", "transformKoma", sou1_left);
    sendMessage("2sou", "transformKoma", sou2);
    sendMessage("3sou", "transformKoma", sou3);
    sendMessage("4sou", "transformKoma", sou4);
    setFlag(() => true);
  };

  console.log(Unity_scene);

  const compareValues = (value) => {
    if (value === 0) {
      console.log("just");
      return 1;
    } else if (value < 0) {
      let normalized_minus_value = Math.abs(value) / (Math.abs(value) + 1);
      let converted_minus_value = 0.4 + normalized_minus_value * 0.6;
      console.log("WebGL_Plus", value, converted_minus_value);
      return converted_minus_value;
    } else if (value > 0) {
      let normalized_plus_value = value / (value + 0.6);
      let converted_plus_value = 0.6 + normalized_plus_value;
      console.log("WebGL_Minus", value, converted_plus_value);
      return converted_plus_value;
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Unity unityProvider={unityProvider} style={unityStyle} />
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
                changeSize();
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
