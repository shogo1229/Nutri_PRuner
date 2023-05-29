import React, { useState } from 'react';
import WebGL from './R1WebGL';
import Comment from './R2Comment';
import SelectMenu from './L1SlectMenu';
import Header from './Header';
import './index.css';

const LeftPanel = () => {
	return(
	<SelectMenu/>
	)
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
