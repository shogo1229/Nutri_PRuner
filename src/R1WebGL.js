import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

const WebGL = ({index}) => {  
	const { unityProvider } = useUnityContext({
		loaderUrl: "unity/buildwebGL.loader.js",
		dataUrl: "unity/buildwebGL.data",
		frameworkUrl: "unity/buildwebGL.framework.js",
		codeUrl: "unity/buildwebGL.wasm",
	});

	return <Unity unityProvider={unityProvider} style={{width:"100%",height:"70vh"}}/>;
}

export default WebGL;