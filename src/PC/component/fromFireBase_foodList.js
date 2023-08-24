import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import fireStoreDB from "./firebase";

function App() {
  //useState　初期設定
  const [todos, setTodos] = useState([]);

  //データ取得用配列
  const arrList = [];

  //useEffectの処理-ここから
  useEffect(() => {
    const fireStorePostData = collection(fireStoreDB, "todoposts");
    getDocs(fireStorePostData).then((snapShot) => {
      snapShot.forEach((docs) => {
        const doc = docs.data();
        arrList.push({
          id: docs.id,
          name: doc.name,
        });
      });
      setTodos(arrList);
    });
  });
  //useEffectの処理-ここまで

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>料理名：{todo.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
