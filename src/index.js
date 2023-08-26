import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { TodosProvider } from "./FireBase/TodosProvider"; // TodosProviderのインポート

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <TodosProvider>
      <App />
    </TodosProvider>
  </Provider>
);
