import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import WebGL from './WebGL';
import Comment from './Comment';
import Header from './Header';
import options from './FoodList';
import { FaUtensils } from 'react-icons/fa';
import './index.css';

const LeftPanel = ({ setCommentData }) => {
const [morningMenuModalIsOpen, setMorningMenuModalIsOpen] = useState(false);
const [lunchMenuModalIsOpen, setLunchMenuModalIsOpen] = useState(false);
const [dinnerMenuModalIsOpen, setDinnerMenuModalIsOpen] = useState(false);
const [snackMenuModalIsOpen, setSnackMenuModalIsOpen] = useState(false);
const [morningMenu, setMorningMenu] = useState(null);
const [lunchMenu, setLunchMenu] = useState(null);
const [dinnerMenu, setDinnerMenu] = useState(null);
const [snackMenu, setSnackMenu] = useState(null);

const openMorningMenuModal = () => {
	setMorningMenuModalIsOpen(true);
};

const openLunchMenuModal = () => {
	setLunchMenuModalIsOpen(true);
};

const openDinnerMenuModal = () => {
	setDinnerMenuModalIsOpen(true);
};

const openSnackMenuModal = () => {
	setSnackMenuModalIsOpen(true);
};

const closeMorningMenuModal = () => {
	setMorningMenuModalIsOpen(false);
};

const closeLunchMenuModal = () => {
	setLunchMenuModalIsOpen(false);
};

const closeDinnerMenuModal = () => {
	setDinnerMenuModalIsOpen(false);
};

const closeSnackMenuModal = () => {
	setSnackMenuModalIsOpen(false);
};

const handleMorningMenuChange = (selectedOptions) => {
	setMorningMenu(selectedOptions);
};

const handleLunchMenuChange = (selectedOptions) => {
	setLunchMenu(selectedOptions);
};

const handleDinnerMenuChange = (selectedOptions) => {
	setDinnerMenu(selectedOptions);
};

const handleSnackMenuChange = (selectedOptions) => {
	setSnackMenu(selectedOptions);
};

const handleSubmit = () => {
	const commentData = {
	morningMenu,
	lunchMenu,
	dinnerMenu,
	snackMenu,
	};
	setCommentData(commentData);
};

return (
<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <button onClick={openMorningMenuModal} style={{ width: '80%', height: '80%', borderRadius: '9999px', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5em', flexDirection: 'row' }}>
    <FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
    <h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Morning Menu</h3>
  </button>
</div>
{morningMenu && (
  <div>
    <h4>Selected Morning Menu: {morningMenu.map((option) => option.label).join(', ')}</h4>
  </div>
)}
	
<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <button onClick={openLunchMenuModal} style={{ width: '80%', height: '80%', borderRadius: '9999px', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5em', flexDirection: 'row' }}>
    <FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
    <h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Dinner Menu</h3>
  </button>
</div>
{lunchMenu && (
  <div>
    <h4>Selected Lunch Menu: {lunchMenu.map((option) => option.label).join(', ')}</h4>
  </div>
)}

<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <button onClick={openDinnerMenuModal} style={{ width: '80%', height: '80%', borderRadius: '9999px', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5em', flexDirection: 'row' }}>
    <FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
    <h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Snack Menu</h3>
  </button>
</div>
{dinnerMenu && (
  <div>
    <h4>Selected Dinner Menu: {dinnerMenu.map((option) => option.label).join(', ')}</h4>
  </div>
)}

<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <button onClick={openSnackMenuModal} style={{ width: '80%', height: '80%', borderRadius: '9999px', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5em', flexDirection: 'row' }}>
    <FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
    <h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Snack Menu</h3>
  </button>
</div>
{snackMenu && (
  <div>
    <h4>Selected Snack Menu: {snackMenu.map((option) => option.label).join(', ')}</h4>
  </div>
)}

	<Modal isOpen={morningMenuModalIsOpen} onRequestClose={closeMorningMenuModal}>
		<h3>Select Your Morning Menu</h3>
		<Select options={options} isMulti onChange={handleMorningMenuChange}/>
	</Modal>

	<Modal isOpen={lunchMenuModalIsOpen} onRequestClose={closeLunchMenuModal}>
		<h3>Select Your Lunch Menu</h3>
		<Select options={options} isMulti onChange={handleLunchMenuChange} />
	</Modal>

	<Modal isOpen={dinnerMenuModalIsOpen} onRequestClose={closeDinnerMenuModal}>
		<h3>Select Your Dinner Menu</h3>
		<Select options={options} isMulti onChange={handleDinnerMenuChange} />
	</Modal>

	<Modal isOpen={snackMenuModalIsOpen} onRequestClose={closeSnackMenuModal}>
		<h3>Select Your Snack Menu</h3>
		<Select options={options} isMulti onChange={handleSnackMenuChange} />
	</Modal>

	<div style={{ flex: '1 1 15%', border: '2px solid black' }}>
		<button onClick={handleSubmit}>Submit</button>
	</div>
	</div>
	);
};

const RightPanel = ({ commentData }) => {
	return (
	<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
		<div style={{ flex: '1 1 70%', border: '2px solid black' }}>
			<WebGL />
		</div>
		<div style={{ flex: '1 1 30%', border: '2px solid black' }}>
			<Comment commentData={commentData} />
		</div>
	</div>
	);
};

export default function App() {
const [commentData, setCommentData] = useState(null);

return (
	<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
	<header style={{ backgroundColor: 'lightgray', padding: '16px' }}>
		<Header />
	</header>

	<div style={{ display: 'flex', height: '100vh' }}>
		<div style={{ flex: '1', width: '50%', overflow: 'auto' }}>
		<LeftPanel setCommentData={setCommentData} />
		</div>
		<div style={{ flex: '1', width: '50%', overflow: 'auto' }}>
		<RightPanel commentData={commentData} />
		</div>
		<button className="px-6 py-2 bg-green-300">OK</button>
	</div>
	</div>
);
}
/*
import React, { useState } from 'react';
import { chat } from './chat';// chat.js のインポート
 
const App = () => {
// メッセージの状態管理用
const [ message, setMessage ] = useState( '' );
// 回答の状態管理用
const [ answer, setAnswer ] = useState( '' );
 
// メッセージの格納
const handleMessageChange = ( event )=> {
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
	<div>
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
 
export default App;
*/