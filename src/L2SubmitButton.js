import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import options from './FoodList';

const C1_Moaning = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const MenuSelectChange = (value) => {
    setSelectedMenu(value);
  };

  const sendDataToAPI = () => {
    // API送信関数の実装
    if (selectedMenu) {
      axios.post('APIのURL', selectedMenu)
        .then((response) => {
          // データ送信成功時の処理
          console.log(response.data);
        })
        .catch((error) => {
          // データ送信エラー時の処理
          console.error(error);
        });
    }
  };

  return (
    <div>
      <h3>Select Your Morning Menu</h3>
      <Select
        options={options}
        isMulti
        onChange={MenuSelectChange}
      />
      {selectedMenu && (
        <div>
          <h4>Selected Menu: {selectedMenu}</h4>
        </div>
      )}
      <button onClick={sendDataToAPI}>Submit</button>
    </div>
  );
};

export default C1_Moaning;
