import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function WebGL({index}) {
	const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
		loaderUrl: "unity/build0602_webgl_3.loader.js",
		dataUrl: "unity/build0602_webgl_3.data",
		frameworkUrl: "unity/build0602_webgl_3.framework.js",
		codeUrl: "unity/build0602_webgl_3.wasm",
    });
	function changeSize() {
		let sou1_right = 1.0;
		let sou1_left = 1.0;
		let sou2 = 1.0;
		let sou3 = 1.0;
		let sou4 = 1.0;
		//4層
		if(index[0] > 0){
			sou4 = 2.0;
		}else if(index[0] == 0){
			sou4 = 1.0;
		}else{
			sou4 = 0.5;
		}
		//3層
		if(index[1] > 0){
			sou3 = 2.0;
		}else if(index[1] == 0){
			sou3 = 1.0;
		}else{
			sou3 = 0.5;
		}
		//2層
		if(index[2] > 0){
			sou2 = 2.0;
		}else if(index[2] == 0){
			sou2 = 1.0;
		}else{
			sou2 = 0.5;
		}
		//1層左乳製品
		if(index[3] > 0){
			sou1_left = 2.0;
		}else if(index[3] == 0){
			sou1_left = 1.0;
		}else{
			sou1_left = 0.5;
		}
		//1層右果物
		if(index[4] > 0){
			sou1_right = 2.0;
		}else if(index[4] == 0){
			sou1_right = 1.0;
		}else{
			sou1_right = 0.5;
		}
		
		//大きさ変更
		sendMessage("1sou_right", "transformKoma",sou1_right)
		sendMessage("1sou_left", "transformKoma",sou1_left)
		sendMessage("2sou", "transformKoma",sou2)
		sendMessage("3sou", "transformKoma",sou3)
		sendMessage("4sou", "transformKoma",sou4)
		
	}
	function changeAnime() {
		sendMessage("1sou_right", "scenechange",1)
		// if(index[0] === 0 && index[1] === 0 && index[2] === 0 && index[3] === 0 && index[4] === 0){
			
		// 	sendMessage("1sou_right", "scenechange",1)
		// }else{
		// 	sendMessage("1sou_right", "scenechange",2)
		// }
	}

	return (
		<Fragment>
			<Unity unityProvider={unityProvider} style={{width:"100%",height:"70vh"}}/>
			<button onClick={changeSize}>size</button>
			<button onClick={changeAnime}>anime</button>
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