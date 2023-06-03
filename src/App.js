import WebGL from './WebGL';
import { useState } from 'react';
import ModalOpen_morning from './ModalOpen_morning';
import ModalOpen_lunch from './ModalOpen_lunch';
import ModalOpen_dinner from './ModalOpen_dinner';
import ModalOpen_snack from './ModalOpen_snack';
import { foodData } from './NutriDatabase';
import { useDispatch } from 'react-redux';
import { setToChatGPT } from './actions/setToChatGPT';
import { setToWebGL } from './actions/setToWebGL';
import { setToState } from './actions/setToState';

import Header from './Header';
import './index.css';
import Modal from 'react-modal';
import { useSelector } from "react-redux";
import ChatGPT from './ChatGPT';
import morningimg from './img/toast.png'
import lunchimg from './img/humberger.png'
import dinnerimg from './img/dinner.png'
import snackimg from './img/coffee.png'

Modal.setAppElement('#root');

const App = () => {
	const [isModalOpen_morning, setIsModalOpen_morning] = useState(false);
	const selectedDishes_morning = useSelector((state) => state.selectedDishes_morning);
	const [selectedDishes, setSelectedDishes] = useState([]);

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

	const dispatch = useDispatch();

	const handleCalcNutri = (dishlist) => {
		console.log("CalcNutri in read")

		const standardValues = {
			syusyoku: { min: 5, max: 7 },
			hukusai: { min: 5, max: 6 },
			syusai: { min: 3, max: 5 },
			dairy: { min: 2, max: 2 },
			fruits: { min: 2, max: 2 }
		};

		let sum = {
			syusyoku: 0,
			hukusai: 0,
			syusai: 0,
			dairy: 0,
			fruits: 0
		};

		let ClassList = ['主食', '副菜', '主菜', '乳製品', '果物'];

		let toChatGPT = [];
		let toWebGUI = [];

		dishlist.forEach((id) => {
			const item = foodData[id.value - 1];
			sum.syusyoku += item.syusyoku;
			sum.hukusai += item.hukusai;
			sum.syusai += item.syusai;
			sum.dairy += item.dairy;
			sum.fruits += item.fruits;
		});

		const deficiencies = {};

			// 基準値と比較して不足している要素を計算し、deficienciesオブジェクトに格納する
		for (const nutrient in sum) {
			const value = sum[nutrient];
			const standard = standardValues[nutrient];
			if (value < standard.min) {
				deficiencies[nutrient] = value - standard.min;
			} else if (value > standard.max) {
				deficiencies[nutrient] = value - standard.max;
			} else {
			deficiencies[nutrient] = 0;
			}
		}

	

		toWebGUI = Object.values(deficiencies); // キーを抜いた数字のみの配列を作成

		console.log('各栄養素合計値', sum); // 合計値をコンソールに出力
		console.log('WebGUIに渡す用の配列', toWebGUI);

		for (const cls in ClassList) {
			if (toWebGUI[cls] < 0) {
			toChatGPT.push(ClassList[cls]);
			}
		}

		console.log('ChatGPTAPIに渡す用の配列', toChatGPT);
		dispatch(setToChatGPT(toChatGPT));
		dispatch(setToWebGL(toWebGUI));
	};

  	const [executeElements, setExecuteElements] = useState(false); // ボタンがクリックされたかどうかの状態

	const handleExecuteElements = () => {
		setExecuteElements(() => true);
		dispatch(setToState(true)); // ボタンがクリックされたら状態を更新して要素を実行
	};

	const toChatGPT = useSelector((state) => state.setTo_ChatGPT);
	const toWebGL = useSelector((state) => state.setTo_WebGL);
	const ButtonClassStyle ="bg-[#37AB9D] hover:bg-emerald-400 transition-all duration-500 ease-out text-[#F3F3F3] w-56 rounded-full flex items-center px-6 py-2 font-bold text-8 mx-auto my-5"
	const elementDishes = 'bg-[#37AB9D] text-[#F3F3F3] rounded-full px-4 text-center py-2 font-bold my-1 inline-block mx-1'
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<header style={{ backgroundColor: '#F3F3F3', padding: '16px' }}>
				<Header />
			</header>

		<div style={{ display: 'flex', flexDirectin: 'column', height: '100vh' }}>
			<div style={{ flex: '1', width: '50%', overflow: 'auto' }}>
				<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
					<div style={{ flex: '1 1 20%' }}>
						<button
							className={ButtonClassStyle}
							onClick={handleOpenModal_morning}
						>
							<img src={morningimg} alt="Morning" className="mr-0 w-10" />
							<p className = 'm-auto'>Morning</p>
						</button>
					{selectedDishes_morning.map((dish) => (
						<div className={elementDishes}
							key={dish.value}>{dish.label}
						</div>
					))}
					</div>
						<div style={{ flex: '1 1 20%' }}>
							<button
								className={ButtonClassStyle}
								onClick={handleOpenModal_lunch}
							>
							<img src={lunchimg} alt="Lunch" className="mr-0 w-10" />
							<p className = 'm-auto'>Lunch</p>
							</button>
						{selectedDishes_lunch.map((dish) => (
						<div  className={elementDishes}
							key={dish.value}>{dish.label}
						</div>
						))}
						</div>
						<div style={{ flex: '1 1 20%' }}>
							<button
								className={ButtonClassStyle}
								onClick={handleOpenModal_dinner}
							>
							<img src={dinnerimg} alt="dinner" className="mr-0 w-10" />
							<p className = 'm-auto'>Dinner</p>
							</button>
							
						{selectedDishes_dinner.map((dish) => (
						<div className={elementDishes}
							key={dish.value}>{dish.label}
						</div>
						))}
						</div>

						
						<div style={{ flex: '1 1 20%' }}>
							<button
								className={ButtonClassStyle}
								onClick={handleOpenModal_snack}
							>
							<img src={snackimg} alt="Snack" className="mr-0 w-10" />
							<p className = 'm-auto'>Snack</p>
							</button>
						{selectedDishes_snack.map((dish) => (
						<div className={elementDishes}
							key={dish.value}>{dish.label}</div>
						))}
						</div>

					{isModalOpen_morning && (
						<ModalOpen_morning Menu="morning" closeModalFn={handleCloseModal_morning} />
					)}

					{isModalOpen_lunch && (
						<ModalOpen_lunch Menu="lunch" closeModalFn={handleCloseModal_lunch} />
					)}

					{isModalOpen_dinner && (
						<ModalOpen_dinner Menu="dinner" closeModalFn={handleCloseModal_dinner} />
					)}

					{isModalOpen_snack && (
						<ModalOpen_snack Menu="snack" closeModalFn={handleCloseModal_snack} />
					)}
			<a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-xl font-bold w-48 text-[#258F00] border-2 border-[#BDFFC4] rounded-full hover:text-[#258F00] group hover:bg-gray-50">
			<span class="absolute left-0 block w-48 h-0 transition-all bg-[#BDFFC4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
			<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
			</span>
			<button 
				class="relative"
				onClick={() => {
					const allSelectedDishes = [
						...selectedDishes_morning,
						...selectedDishes_lunch,
						...selectedDishes_dinner,
						...selectedDishes_snack
					];
					setSelectedDishes(allSelectedDishes);
					handleCalcNutri(allSelectedDishes); 
					handleExecuteElements();
					}}
			>Submit</button>
			</a>
			</div>
			</div>
		<div style={{ flex: '1', width: '50%', overflow: 'auto' }}>
			<div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
				<div style={{ flex: '1 1 70%'}}>
					<WebGL index={toWebGL}/>
				</div>
				<div style={{ flex: '1 1 30%', border: '2px solid black', overflow: 'auto' }}>
					{executeElements && 
						<h2>その食事メニューでは{toChatGPT}が不足しています！<br/>その食事メニューに以下の料理を加えてみてはいかがですか？</h2>
						
					}
					{executeElements && <ChatGPT index={toChatGPT} />}
				</div>
			</div>	
		</div>
    </div>
</div>
);
};

export default App;
