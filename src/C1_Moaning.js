import Select from 'react-select'
import options from './FoodList';
import { useState } from 'react';

const C1_Moaning = () => {  
	const [selectedMenu, setSelectedMenu] = useState(null);

	const handleMenuSelectChange = (selectedOption) => {
		setSelectedMenu(selectedOption);
	};

	return (
		<div>
			<h3>Select Your Morning Menu</h3>
			<Select 
				options={options}
				isMulti  
				onChange={handleMenuSelectChange}
			/>
			{selectedMenu && (
				<div>
					<h4>Selected Menu: {selectedMenu.map(option => option.label).join(', ')}</h4>
				</div>
			)}
		</div>
	);
}

export default C1_Moaning;
