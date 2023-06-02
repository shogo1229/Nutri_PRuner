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

import morningimg from './img/toast.png'
import lunchimg from './img/humberger.png'
import dinnerimg from './img/dinner.png'
import snackimg from './img/coffee.png'
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
	
		<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ flex: '1 1 20%' }}>
					<button
						className="bg-[#37AB9D] hover:bg-emerald-400 transition-all w-96 duration-500 ease-out text-[#F3F3F3] rounded-full flex items-center px-4 py-2 font-bold text-64 mx-auto my-5"
						onClick={() => handleOpenModal_morning()}
					>
						<img src={morningimg} alt="Morning" className="mr-0" />
						Morning
					</button>
				</div>
			
		<div>
			<div style={{ display: 'flex'}}>
					{selectedDishes_morning.map((dish) => (
						<div className='bg-[#37AB9D] text-[#F3F3F3] rounded-full px-4 text-center py-2 font-bold my-1 inline-block mx-1'
								key={dish.value}>{dish.label}
						</div>
					))}
			</div>
		</div>
		<div style={{ flex: '1 1 20%' }}>
			<button
				className="bg-[#37AB9D] hover:bg-emerald-400 transition-all duration-500 ease-out text-[#F3F3F3] w-96 rounded-full flex items-center px-6 py-2 font-bold text-64 mx-auto my-5"
				onClick={() => handleOpenModal_lunch()}
			>
			<img src={lunchimg} alt="Lunch" className="mr-4" />
				Lunch
			</button>
				<div style={{ display:'flex' }}></div>
					{selectedDishes_lunch.map((dish) => (
						<div className='bg-[#37AB9D] text-[#F3F3F3] rounded-full px-4 text-center py-2 font-bold my-1 inline-block mx-1'
						key={dish.value}>{dish.label}
						</div>
					))}
		</div>

			<div style={{ flex: '1 1 20%' }}>
			<button
				className="bg-[#37AB9D] hover:bg-emerald-400 transition-all duration-500 ease-out text-[#F3F3F3] w-96 rounded-full flex items-center px-8 py-3 font-bold text-64 mx-auto my-5"
				onClick={() => handleOpenModal_dinner()}
			>
			<img src={dinnerimg} alt="Dinner" className="mr-4" />
				Dinner
			</button>
			<div style={{ display:'flex' }}></div>
				{selectedDishes_dinner.map((dish) => (
					<div 
						className='bg-[#37AB9D] text-[#F3F3F3] rounded-full px-4 text-center py-2 font-bold my-1 inline-block mx-1'
						key={dish.value}>
							{dish.label}
					</div>
					))}
			</div>

			<div style={{ flex: '1 1 20%' }}>
			<button
				className="bg-[#37AB9D] hover:bg-emerald-400 transition-all duration-500 ease-out text-[#F3F3F3] rounded-full w-96 flex items-center px-4 py-2 font-bold text-64 mx-auto my-5"
				onClick={() => handleOpenModal_snack()}
			>
			<img src={snackimg} alt="Snack" className="mr-2" />
				Snack
			</button>
				<div style={{ display:'flex' }}></div>
					{selectedDishes_snack.map((dish) => (
						<div className='bg-[#37AB9D] text-[#F3F3F3] rounded-full px-4 text-center py-2 font-bold my-1 inline-block mx-1'key={dish.value}>{dish.label}
						</div>
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

<a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Submit</span>
</a>
				<div style={{ flex: '1 1 20%' }}>
					<button className="bg-[#BDFFC4] transition-all duration-500 ease-out hover:bg-emerald-400 text-[#258F00] rounded-full px-4 py-2 font-bold text-xl mx-auto">
						Submit
					</button>
				</div>

		</div>
  );
};

function RightPanel({ commentData }) {
	return (
		<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
			<div style={{ flex: '1 1 70%', border: '2px solid black' }}>
				<WebGL />
			</div>
			<div style={{ flex: '1 1 30%', border: '2px solid black' }}>
				<Comment />
			</div>
		</div>
	);
}


const App = ()=> {

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<header style={{ backgroundColor: '#F3F3F3', padding: '16px' , borderBottom: '7px solid #37AB9D'}}>
				<Header />
			</header>

			<div style={{ display: 'flex', height: '100vh' , backgroundColor: '#F3F3F3'}}>
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
