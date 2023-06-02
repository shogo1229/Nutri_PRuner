import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function WebGL({index}) {
	const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
		loaderUrl: "unity/build0602_webgl_2.loader.js",
		dataUrl: "unity/build0602_webgl_2.data",
		frameworkUrl: "unity/build0602_webgl_2.framework.js",
		codeUrl: "unity/build0602_webgl_2.wasm",
    });
	function handleClick() {
		//sendMessage("3sou", "transformKoma", 0.5);
		sendMessage("3sou", "scenechange",1)
		// sendMessage("3rd", "transformKoma", 2.0);
		// sendMessage("1st_left", "transformKoma", 2.0);
		// sendMessage("2nd", "transformKoma", 2.0);
		// sendMessage("4th", "transformKoma", 2.0);
		// sendMessage("1st_right", "transformKoma", 2.0);

	}

	return (
		<Fragment>
			<Unity unityProvider={unityProvider} style={{width:"100%",height:"70vh"}}/>
			<button onClick={handleClick}>Spawn Enemies</button>
		</Fragment>
	);
}

export default WebGL;
// const WebGL = ({index}) => {  
// 	return (
// 		<>
// 		<p>Fuck Web WebGL</p>
// 		<h1>{index}</h1>
// 		</>

// 		);
// 	};

// export default WebGL;