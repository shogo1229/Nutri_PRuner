import React, { useState } from 'react';
import Modal from 'react-modal';
import WebGL from './WebGL';
import Comment from './Comment';
import Header from './Header';

import { FaUtensils } from 'react-icons/fa';
import './index.css';
import Gallery from './Gallery';

const LeftPanel = ({ setCommentData }) => {
	const [morningMenuModalIsOpen, setMorningMenuModalIsOpen] = useState(false);
	const [lunchMenuModalIsOpen, setLunchMenuModalIsOpen] = useState(false);
	const [dinnerMenuModalIsOpen, setDinnerMenuModalIsOpen] = useState(false);
	const [snackMenuModalIsOpen, setSnackMenuModalIsOpen] = useState(false);

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


	const [selectedDishes, setSelectedDishes] = useState([]);

	const handleSnackMenuChange = (selectedDishes) => {
		setSelectedDishes(selectedDishes);
		console.log(selectedDishes)
	};

	const handleSubmit = () => {
		const commentData = {
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


			<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<button onClick={openLunchMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
					<FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
					<h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Lunch Menu</h3>
				</button>
			</div>

			<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<button onClick={openDinnerMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
					<FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
					<h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Snack Menu</h3>
				</button>
			</div>

			<div style={{ flex: '1 1 20%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<button onClick={openSnackMenuModal} className="rounded-full bg-green-500 flex items-center justify-center p-2 flex-row">
					<FaUtensils style={{ fontSize: '4em', marginRight: '0.5em' }} />
					<h3 style={{ color: 'white', textAlign: 'center', fontSize: '3em', margin: '0' }}>Select Your Snack Menu</h3>
				</button>
			</div>

			<Modal isOpen={morningMenuModalIsOpen} onRequestClose={closeMorningMenuModal}className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white">
			<div className="modal-content h-full overflow-y-auto">
					<h3 className="text-center">Select Your Morning Menu</h3>
						<div className="container mx-auto p-4">
							<h1 className="text-2xl font-bold mb-4">Dish Gallery</h1>
							<Gallery selectedDishes={selectedDishes} setSelectedDishes={handleSnackMenuChange} />
						</div>
					</div>
			</Modal>

			<Modal isOpen={lunchMenuModalIsOpen} onRequestClose={closeLunchMenuModal}className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white">
			<div className="modal-content h-full overflow-y-auto">
					<h3 className="text-center">Select Your Lunch Menu</h3>
						<div className="container mx-auto p-4">
							<h1 className="text-2xl font-bold mb-4">Dish Gallery</h1>
							<Gallery selectedDishes={selectedDishes} setSelectedDishes={setSelectedDishes} onChange={handleSnackMenuChange} />
						</div>
					</div>
			</Modal>

			<Modal isOpen={dinnerMenuModalIsOpen} onRequestClose={closeDinnerMenuModal}className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white">
			<div className="modal-content h-full overflow-y-auto">
					<h3 className="text-center">Select Your Dinner Menu</h3>
						<div className="container mx-auto p-4">
							<h1 className="text-2xl font-bold mb-4">Dish Gallery</h1>
							<Gallery selectedDishes={selectedDishes} setSelectedDishes={setSelectedDishes} onChange={handleSnackMenuChange} />
						</div>
					</div>
			</Modal>

			<Modal isOpen={snackMenuModalIsOpen} onRequestClose={closeSnackMenuModal} className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white">
				<div className="modal-content h-full overflow-y-auto">
					<h3 className="text-center">Select Your Snack Menu</h3>
						<div className="container mx-auto p-4">
							<h1 className="text-2xl font-bold mb-4">Dish Gallery</h1>
							<Gallery selectedDishes={selectedDishes} setSelectedDishes={setSelectedDishes} onChange={handleSnackMenuChange} />
						</div>
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
