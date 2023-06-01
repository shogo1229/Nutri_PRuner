import WebGL from './R1WebGL';
import { useState } from 'react';
import Comment from './R2Comment';

import ModalOpen_morning from './ModalOpen_morning';
import ModalOpen_lunch from './ModalOpen_lunch';
import ModalOpen_dinner from './ModalOpen_dinner';
import ModalOpen_snack from './ModalOpen_snack';

import Header from './Header';
import './index.css';
import Modal from 'react-modal';
import { useSelector } from "react-redux"
Modal.setAppElement('#root');

const LeftPanel = () => {
	const [isModalOpen_morning, setIsModalOpen_morning] = useState(false);
	const selectedDishes_morning = useSelector((state) => state.selectedDishes_morning);

	const handleOpenModal_morning = () => {
	setIsModalOpen_morning(true);
	};

	const handleCloseModal_morning = () => {
	setIsModalOpen_morning(false);
	};

	const [isModalOpen_lunch, setIsModalOpen_lunch] = useState(false);
	const selectedDishes_lunch = useSelector((state) => state.selectedDishes_lunch);

	const handleOpenModal_lunch = () => {
	setIsModalOpen_lunch(true);
	};

	const handleCloseModal_lunch = () => {
	setIsModalOpen_lunch(false);
	};

	

	const [isModalOpen_dinner, setIsModalOpen_dinner] = useState(false);
	const selectedDishes_dinner = useSelector((state) => state.selectedDishes_dinner);

	const handleOpenModal_dinner = () => {
	setIsModalOpen_dinner(true);
	};

	const handleCloseModal_dinner = () => {
	setIsModalOpen_dinner(false);
	};



	const [isModalOpen_snack, setIsModalOpen_snack] = useState(false);
	const selectedDishes_snack = useSelector((state) => state.selectedDishes_snack);

	const handleOpenModal_snack = () => {
	setIsModalOpen_snack(true);
	};

	const handleCloseModal_snack = () => {
	setIsModalOpen_snack(false);
	};


return (
	<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal_morning()}
		>
			Morning
		</button>
		<div>Your Select Menu:</div>
		{selectedDishes_morning.map((dish) => (
			<div key={dish.value}>{dish.label}</div>
			))}
		</div>

		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal_lunch()}
		>
			Lunch
		</button>
		<div>Your Select Menu:</div>
		{selectedDishes_lunch.map((dish) => (
			<div key={dish.value}>{dish.label}</div>
			))}
		</div>

		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal_dinner()}
		>
			Dinner
		</button>
		<div>Your Select Menu:</div>
		{selectedDishes_dinner.map((dish) => (
			<div key={dish.value}>{dish.label}</div>
			))}
		</div>

		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal_snack()}
		>
			Snack
		</button>
		<div>Your Select Menu:</div>
		{selectedDishes_snack.map((dish) => (
			<div key={dish.value}>{dish.label}</div>
			))}
		</div>

		{isModalOpen_morning && (
		<ModalOpen_morning Menu={"morning"} closeModalFn={handleCloseModal_morning} />
		)} 

		{isModalOpen_lunch && (
		<ModalOpen_lunch Menu={"lunch"} closeModalFn={handleCloseModal_lunch} />
		)} 

		{isModalOpen_dinner && (
		<ModalOpen_dinner Menu={"dinner"} closeModalFn={handleCloseModal_dinner} />
		)} 

		{isModalOpen_snack && (
		<ModalOpen_snack Menu={"snack"} closeModalFn={handleCloseModal_snack} />
		)} 

		<div style={{ flex: '1 1 20%' }}>
		<button className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2">
			Submit
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
				<Comment/>
			</div>
		</div>
	);
};


const App = ()=> {

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<header style={{ backgroundColor: 'lightgray', padding: '16px' }}>
				<Header />
			</header>

			<div style={{ display: 'flex', height: '100vh' }}>
				<div style={{ flex: '1', width: '50%', overflow: 'auto' }}>
					<LeftPanel/>
				</div>
				<div style={{ flex: '1', width: '50%', overflow: 'auto' }}>
					<RightPanel/>
				</div>
			</div>
		</div>
	);
}

export default App
