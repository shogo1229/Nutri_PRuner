import React, { useState } from 'react';
import ModalOpen from './ ModalOpen';



const SelectMenu = () => {
	const array = ["Morning", "Lunch", "Dinner", "Snack"];
	const flag = [false, false, false, false]
	const [state, setState] = useState(flag)

	return (
		<>
		<div style={{ display: 'flex', height:'25%' , flexDirection: 'column' }}>
			{array.map((value, index) => {
			return (
			<>
			<button
				class="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2"
				onClick={() => {
				setState((prev) => {
					const ary = [false];
					ary[index] = true;
					return ary;
				});
			}}
			>
			{array[index]}
			</button>
			text
			</>
			);
			})}
		</div>
		<>

		</>
			{
				array.map((value, index) => {
					return state[index]?<ModalOpen Menu={array[index]} index={index}/>:<></>
				})
			}
		</>
	);
}

export default SelectMenu