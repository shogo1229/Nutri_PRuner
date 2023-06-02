import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function WebGL() {
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
// import React from 'react';
// import { Unity, useUnityContext } from "react-unity-webgl";

// const WebGL = () => {

// 	const {unityProvider} = useUnityContext({
// 		loaderUrl: "unity/build0602webgl.loader.js",
// 		dataUrl: "unity/build0602webgl.data",
// 		frameworkUrl: "unity/build0602webgl.framework.js",
// 		codeUrl: "unity/build0602webgl.wasm",
// 	});
// 	function sizeUp(){
// 		unityProvider.Send("2nd","transformKoma",2.0);
// 	}
// 	function sizeDown(){
// 		unityProvider.Send("2nd","transformKoma",0.5);
// 	}
// 	return(
// 		<>
// 			<Unity unityProvider={unityProvider} style={{height: "70vh",width: "100%"}}/>
// 			<button onClick={sizeUp}>MoveRight</button>
// 			<button onClick={sizeDown}>MoveLeft</button>
// 		</>
// 	)
// }

	// const { unityProvider } = useUnityContext({
	// 	loaderUrl: "unity/build0602webgl.loader.js",
	// 	dataUrl: "unity/build0602webgl.data",
	// 	frameworkUrl: "unity/build0602webgl.framework.js",
	// 	codeUrl: "unity/build0602webgl.wasm",
	// });

	// return <Unity unityProvider={unityProvider} style={{width:"100%",height:"70vh"}}/>;

// export default WebGL;