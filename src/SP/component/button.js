import React from "react";

class RectangleComponent extends React.Component {
  handleButton1Click = () => {
    console.log("ボタン1がクリックされました");
    // ここにボタン1の処理を記述
  };

  handleButton2Click = () => {
    console.log("ボタン2がクリックされました");
    // ここにボタン2の処理を記述
  };

  handleButton3Click = () => {
    console.log("ボタン3がクリックされました");
    // ここにボタン3の処理を記述
  };

  handleButton4Click = () => {
    console.log("ボタン4がクリックされました");
    // ここにボタン4の処理を記述
  };

  render() {
    return (
      <div className="rectangle-component">
        <button onClick={this.handleButton1Click}>ボタン1</button>
        <button onClick={this.handleButton2Click}>ボタン2</button>
        <button onClick={this.handleButton3Click}>ボタン3</button>
        <button onClick={this.handleButton4Click}>ボタン4</button>
      </div>
    );
  }
}

export default RectangleComponent;
