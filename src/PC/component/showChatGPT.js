/* eslint-disable react-hooks/rules-of-hooks */
// CustomComponent.js
import ChatGPT from "./ChatGPT";
import React from "react";
import { setToState } from "../actions/setToState";
import { useState } from "react";
import { useDispatch } from "react-redux";

const showChatGPT = ({ toChatGPT }) => {
  const dispatch = useDispatch();
  const [executeElements, setExecuteElements] = useState(false); // ボタンがクリックされたかどうかの状態
  const handleExecuteElements = () => {
    setExecuteElements(() => true);
    dispatch(setToState(true)); // ボタンがクリックされたら状態を更新して要素を実行
  };

  return (
    <>
      <h1>確認用テキスト</h1>
      <div
        style={{
          flex: "1 1 40%",
          border: "8px solid #37AB9D",
          borderRadius: "15px",
          overflow: "auto",
          maxHeight: executeElements ? "none" : "300px", // 適切な高さを設定
        }}
      >
        {executeElements && (
          <>
            {toChatGPT.length > 0 && (
              <h2 className="mt-3 mx-3 font-bold">
                その食事メニューでは{toChatGPT}が不足しています！
                <br />
                その食事メニューに以下の料理を加えてみてはいかがですか？
              </h2>
            )}
            {toChatGPT.length > 0 && <ChatGPT index={toChatGPT} />}

            {toChatGPT.length === 0 && (
              <h2 className="mt-3 mx-3 font-bold">
                不足ではありませんが、もしかして食べすぎてませんか？
                コマの表示を見てどの栄養素が摂りすぎか確認しましょう！！
              </h2>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default showChatGPT;
