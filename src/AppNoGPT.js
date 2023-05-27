import React, { useState } from 'react';
import WebGL from './WebGL';
import Comment from './Comment';
import Header from './Header';
import Select from 'react-select';
import options from './FoodList';

const LeftPanel = ({ setCommentData }) => {
  const [morningMenu, setMorningMenu] = useState(null);
  const [lunchMenu, setLunchMenu] = useState(null);
  const [dinnerMenu, setDinnerMenu] = useState(null);
  const [snackMenu, setSnackMenu] = useState(null);

  const handleMorningMenuChange = (selectedOption) => {
    setMorningMenu(selectedOption);
  };

  const handleLunchMenuChange = (selectedOption) => {
    setLunchMenu(selectedOption);
  };

  const handleDinnerMenuChange = (selectedOption) => {
    setDinnerMenu(selectedOption);
  };

  const handleSnackMenuChange = (selectedOption) => {
    setSnackMenu(selectedOption);
  };

  const handleSubmit = () => {
    const commentData = {
      morningMenu,
      lunchMenu,
      dinnerMenu,
      snackMenu,
    };
    setCommentData(commentData);
  };

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ flex: '1 1 25%', border: '2px solid black' }}>
        <h3>Select Your Morning Menu</h3>
        <Select options={options} isMulti onChange={handleMorningMenuChange} />
        {morningMenu && (
          <div>
            <h4>Selected Menu: {morningMenu.map((option) => option.label).join(', ')}</h4>
          </div>
        )}
      </div>

      <div style={{ flex: '1 1 25%', border: '2px solid black' }}>
        <h3>Select Your Lunch Menu</h3>
        <Select options={options} isMulti onChange={handleLunchMenuChange} />
        {lunchMenu && (
          <div>
            <h4>Selected Menu: {lunchMenu.map((option) => option.label).join(', ')}</h4>
          </div>
        )}
      </div>

      <div style={{ flex: '1 1 25%', border: '2px solid black' }}>
        <h3>Select Your Dinner Menu</h3>
        <Select options={options} isMulti onChange={handleDinnerMenuChange} />
        {dinnerMenu && (
          <div>
            <h4>Selected Menu: {dinnerMenu.map((option) => option.label).join(', ')}</h4>
          </div>
        )}
      </div>

      <div style={{ flex: '1 1 25%', border: '2px solid black' }}>
        <h3>Select Your Snack Menu</h3>
        <Select options={options} isMulti onChange={handleSnackMenuChange} />
        {snackMenu && (
          <div>
            <h4>Selected Menu: {snackMenu.map((option) => option.label).join(', ')}</h4>
          </div>
        )}
      </div>

      <button onClick={handleSubmit}>Submit</button>
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
