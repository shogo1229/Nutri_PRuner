// TodosProvider.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import fireStoreDB from "./firebase.js";

const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fireStorePostData = collection(fireStoreDB, "FoodDatabase"); //sheqel:NutriDataBase Recruit:FoodDatabase
        const querySnapshot = await getDocs(fireStorePostData);
        const arrList = querySnapshot.docs.map((doc, index) => {
          const data = doc.data();
          return {
            id: doc.id,
            value: index + 1,
            name: data.name,
            syusai: data.syusai,
            syusyoku: data.syusyoku,
            hukusai: data.hukusai,
            fruits: data.fruits,
            dairy: data.dairy,
          };
        });
        setTodos(arrList);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);
  console.log(
    "---------------------------Load Fire Base---------------------------"
  );
  return (
    <TodosContext.Provider value={{ todos }}>{children}</TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
}
