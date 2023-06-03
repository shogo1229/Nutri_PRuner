import React, { useState, useEffect } from 'react';
import { chat } from './Chat';  // chat.js のインポート
import { useSelector } from "react-redux";

const ChatGPT = ({index}) => {
	// メッセージの状態管理用
	const [ message, setMessage ] = useState( '' );
	// 回答の状態管理用
	const [ answer, setAnswer ] = useState( '' );
	const chatFlag = useSelector((state) => state.setToState);

	useEffect(async () => {
		if(chatFlag) {
			const message_body = index[0];
			setMessage(message_body);
			const responseText = await chat (message);
			console.log(responseText)
			setAnswer(responseText);
		}
	},[chatFlag]);

	


	// // メッセージの格納
	// const handleMessageChange = ( event )  => {
	// 	setMessage( event.target.value );
	// }

	// // 「質問」ボタンを押したときの処理
	// const handleSubmit = async ( event ) => {
	// 	event.preventDefault();

	// 	// chat.js にメッセージを渡して API から回答を取得
	// 	const responseText = await chat( message );

	// 	// 回答の格納
	// 	setAnswer( responseText );
	// }

	// チャットフォームの表示
	return (
		<div className="overflow-y-auto">
			<h1>{index}</h1>
			{ answer && (
				<div>
					<h2>回答:</h2>
					<p>{ answer }</p>
				</div>
			)}
		</div>
	);
}

// const ChatGPT = ({index}) => {  
// 	return (
// 		<>
// 		<p>Fuck Web WebGL</p>
// 		<h1>{index}</h1>
// 		</>

// 		);
// 	};

export default ChatGPT;