import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useSelector } from "react-redux";

function WebGL({index}) {
	const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
		loaderUrl: "unity/WebGL.loader.js",
		dataUrl: "unity/WebGL.data",
		frameworkUrl: "unity/WebGL.framework.js",
		codeUrl: "unity/WebGL.wasm",
    });
	
	const [state, setFlag] = useState(false)
	const loadFlag = useSelector((state)=>state.setToState)
	const unityStyle = {
		width:"100%",height:"70vh",visibility: state ? 'visible':'hidden'
	}


	index.forEach(function (value, id) {
		index[id]=Math.abs(index[id])
	});

	let sum = index.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	
	let Unity_scene = 0

	if (sum === 0){
		Unity_scene = 1
	}
	else if(1<sum&&sum<10){
		Unity_scene = 2
	}
	else if(sum>10){
		Unity_scene = 3
	}
	console.log("Use Scene",Unity_scene)
	useEffect(() => {
		if (loadFlag) {
			sendMessage("1sou_right", "scenechange",Unity_scene);
		}
	},[loadFlag]);

	const changeSize = () => {
		const sou1_right = compareValues(index[3],2)
		const sou1_left = compareValues(index[4],2)
		const sou2 = compareValues(index[2],4)
		const sou3 = compareValues(index[1],5.5)
		const sou4 = compareValues(index[0],6)

		//大きさを変更		
		sendMessage("1sou_right", "transformKoma",sou1_right)
		sendMessage("1sou_left", "transformKoma",sou1_left)
		sendMessage("2sou", "transformKoma",sou2)
		sendMessage("3sou", "transformKoma",sou3)
		sendMessage("4sou", "transformKoma",sou4)
		setFlag(() => true)
	}

	const compareValues = (value,origin) => {
		console.log(0.5+(value/origin)*2)
		return (0.5+(value/origin)*2)
	}

	// const changeSize = () => {
	// 	const sou1_right = compareValues(index[3])
	// 	const sou1_left = compareValues(index[4])
	// 	const sou2 = compareValues(index[2])
	// 	const sou3 = compareValues(index[1])
	// 	const sou4 = compareValues(index[0])

	// 	//大きさを変更		
	// 	sendMessage("1sou_right", "transformKoma",sou1_right)
	// 	sendMessage("1sou_left", "transformKoma",sou1_left)
	// 	sendMessage("2sou", "transformKoma",sou2)
	// 	sendMessage("3sou", "transformKoma",sou3)
	// 	sendMessage("4sou", "transformKoma",sou4)
	// 	setFlag(() => true)
	// }

	// const compareValues = (value) => {
	// 	var sou;
	// 	if(value > 0){
	// 		sou = 2;
	// 	}else if(value == 0){
	// 		sou = 1.0;
	// 	}else{
	// 		sou = 0.5;
	// 	}
	// 	return sou
	// }

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