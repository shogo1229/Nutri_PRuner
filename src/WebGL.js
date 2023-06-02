import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useSelector } from "react-redux";

function WebGL({index}) {
	const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
		loaderUrl: "unity/build0602_webgl_3.loader.js",
		dataUrl: "unity/build0602_webgl_3.data",
		frameworkUrl: "unity/build0602_webgl_3.framework.js",
		codeUrl: "unity/build0602_webgl_3.wasm",
    });
	
	const [state, setFlag] = useState(false)
	const loadFlag = useSelector((state)=>state.setToState)
	const unityStyle = {
		width:"100%",height:"70vh",visibility: state ? 'visible':'hidden'
	}

	useEffect(() => {
		if (loadFlag) {
			sendMessage("1sou_right", "scenechange",2);
		}
	},[loadFlag]);

	const changeSize = () => {
		const sou1_right = compareValues(index[3])
		const sou1_left = compareValues(index[4])
		const sou2 = compareValues(index[2])
		const sou3 = compareValues(index[1])
		const sou4 = compareValues(index[0])

		//大きさを変更		
		sendMessage("1sou_right", "transformKoma",sou1_right)
		sendMessage("1sou_left", "transformKoma",sou1_left)
		sendMessage("2sou", "transformKoma",sou2)
		sendMessage("3sou", "transformKoma",sou3)
		sendMessage("4sou", "transformKoma",sou4)
		setFlag(() => true)
	}

	const compareValues = (value) => {
		var sou;
		if(value > 0){
			sou = 2;
		}else if(value == 0){
			sou = 1.0;
		}else{
			sou = 0.5;
		}
		return sou
	}

	return (
		<>
			<Unity unityProvider={unityProvider} style={unityStyle}/>
			<div style = {{backgroundColor:'red'}}>
				<button onClick={changeSize}>結果を見る</button>
			</div>
		</>
	);
}

export default WebGL;