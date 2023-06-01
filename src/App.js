import WebGL from './R1WebGL';
import { useState } from 'react';
import Comment from './R2Comment';
import ModalOpen from './ ModalOpen';
import Header from './Header';
import './index.css';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import store from './store';
import { useSelector } from "react-redux"
Modal.setAppElement('#root');

const LeftPanel = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedMenu, setSelectedMenu] = useState('');
	const selectedDishes = useSelector((state) => state.selectedDishes);

	const handleOpenModal = (menu) => {
	setSelectedMenu(menu);
	setIsModalOpen(true);
};

const handleCloseModal = () => {
	setIsModalOpen(false);
};

return (
	<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal('Morning')}
		>
			Morning
		</button>
		<div>Your Select Menu:</div>
		<div>
		{selectedDishes.map((dish) => (
			<div key={dish.value}>{dish.label}</div>
			))}
		</div>
		</div>

		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal('Lunch')}
		>
			Lunch
		</button>
		<div>Your Select Menu:</div>
		</div>

		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal('Dinner')}
		>
			Dinner
		</button>
		<div>Your Select Menu:</div>
		</div>

		<div style={{ flex: '1 1 20%' }}>
		<button
			className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
			onClick={() => handleOpenModal('Snack')}
		>
		Snack
		</button>
		<div>Your Select Menu:</div>
		</div>

		{isModalOpen && (
		<ModalOpen Menu={selectedMenu} closeModalFn={handleCloseModal} />
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

	const count = useSelector((state) => state.count);

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<header style={{ backgroundColor: 'lightgray', padding: '16px' }}>
				<Header />
			</header>

			<div>Countコンポーネント:{count}</div>

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
