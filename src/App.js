import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import WebGL from './WebGL';
import Comment from './Comment';
import Header from './Header';
import options from './FoodList';
import { FaUtensils } from 'react-icons/fa';
import './index.css';
import Gallery from './Gallery';

const LeftPanel = ({ setCommentData }) => {
	const [morningMenuModalIsOpen, setMorningMenuModalIsOpen] = useState(false);
	const [lunchMenuModalIsOpen, setLunchMenuModalIsOpen] = useState(false);
	const [dinnerMenuModalIsOpen, setDinnerMenuModalIsOpen] = useState(false);
	const [snackMenuModalIsOpen, setSnackMenuModalIsOpen] = useState(false);
	const [morningMenu, setMorningMenu] = useState(null);
	const [lunchMenu, setLunchMenu] = useState(null);
	const [dinnerMenu, setDinnerMenu] = useState(null);
	const [snackMenu, setSnackMenu] = useState([]);


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

	const [selectedDishes, setSelectedDishes] = useState([]);

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
				<button onClick={openMorningMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
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
				<button onClick={openLunchMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
					<FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
					<h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Lunch Menu</h3>
				</button>
			</div>
			{lunchMenu && (
				<div>
					<h4>Selected Lunch Menu: {lunchMenu.map((option) => option.label).join(', ')}</h4>
				</div>
			)}

			<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<button onClick={openDinnerMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
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
				<button onClick={openSnackMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
					<FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
					<h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Snack Menu</h3>
				</button>
			</div>
		{/* snackMenuが選択されている場合に表示 */}
		{snackMenu && (
		<div>
			<h4>Selected Snack Menu:</h4>
			<ul>
			{snackMenu.map((option) => (
			<li key={option.value}>{option.label}</li>
			))}
			</ul>
		</div>
)}


			<Modal isOpen={morningMenuModalIsOpen} onRequestClose={closeMorningMenuModal}>
				<h3>Select Your Morning Menu</h3>
				<Select options={options} isMulti onChange={handleMorningMenuChange} />
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
				<div className="container mx-auto p-4">
					<h1 className="text-2xl font-bold mb-4">Dish Gallery</h1>
					<Gallery Gallery selectedDishes={selectedDishes} setSelectedDishes={setSelectedDishes} onChange={handleSnackMenuChange} />
				</div>
			</Modal>


			<div style={{ flex: '1 1 15%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<button onClick={handleSubmit} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
					<h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Submit</h3>
				</button>
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
			</div>
		</div>
	);
}
