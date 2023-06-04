import React from 'react';
import unity_run from './img/Unitychan_run.gif'

const Header = () => {  
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<img src={unity_run} alt="画像の説明" />
			<p className='font-bold text-xl bg-[#F3F3F3] text-[#37AB9D]'>Nutri PRuner</p>
		</div>
		);
	};

export default Header;