import React, { useState } from 'react';
import ModalOpen from './ ModalOpen';

const SelectMenu = () => {
	const array = ["Morning", "Lunch", "Dinner", "Snack"];
	const flag = [false, false, false, false]
	const [state, setState] = useState(flag)

	return (
		<>
			{array.map((value, index) => {
				return (
					<button onClick={
						() => {
							setState((prev) => {
								const ary = [false]
								ary[index] = true
								return ary
							})
						}
					}>
						button : {array[index]}
					</button>
				)
			})}
			{
				array.map((value, index) => {
					//return state[index]?<h1>{value}</h1>:<></>
					return state[index]?<h1><ModalOpen Menu={array[index]}/></h1>:<></>
				})
			}
		</>
	);
}
export default SelectMenu