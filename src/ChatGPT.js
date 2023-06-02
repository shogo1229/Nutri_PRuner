import React, { useState } from 'react';
import { chat } from './Chat';  // chat.js のインポート

const ChatGPT = ({index}) => {
	// メッセージの状態管理用
	const [ message, setMessage ] = useState( '' );
	// 回答の状態管理用
	const [ answer, setAnswer ] = useState( '' );

	// メッセージの格納
	const handleMessageChange = ( event )  => {
		setMessage( event.target.value );
	}

	// 「質問」ボタンを押したときの処理
	const handleSubmit = async ( event ) => {
		event.preventDefault();

		// chat.js にメッセージを渡して API から回答を取得
		const responseText = await chat( message );

		// 回答の格納
		setAnswer( responseText );
	}

	// チャットフォームの表示
	return (
		<div className="overflow-y-auto">
			<h1>{index}</h1>
			<form onSubmit={ handleSubmit }>
				<label>
					<textarea
						rows='5'
						cols='50'
						value={ message }
						onChange={ handleMessageChange }
					/>
				</label>
				<div>
					<button type="submit">質問する</button>
				</div>
			</form>
				{ answer && (
					<div>
						<h2>回答:</h2>
						<p>{ answer }</p>
					</div>
				) }
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