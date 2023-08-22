import React from "react";
import { foodData } from "../NutriDatabase";
import { useDispatch } from "react-redux";
import { setToChatGPT } from "../actions/setToChatGPT";
import { setToWebGL } from "../actions/setToWebGL";
import ChatGPT from "./ChatGPT";

const CalcNutri = ({ dishlist }) => {
  console.log("ClacNutri in read");
  const dispatch = useDispatch();
  const standardValues = {
    syusyoku: { min: 5, max: 7 },
    hukusai: { min: 5, max: 6 },
    syusai: { min: 3, max: 5 },
    dairy: { min: 2, max: 2 },
    fruits: { min: 2, max: 2 },
  };

  let sum = {
    syusyoku: 0,
    hukusai: 0,
    syusai: 0,
    dairy: 0,
    fruits: 0,
  };

  let ClassList = ["主食", "副菜", "主菜", "乳製品", "果物"];

  let toChatGPT = [];
  let toWebGUI = [];

  dishlist.forEach((id) => {
    const item = foodData[id.value - 1];
    sum.syusyoku += item.syusyoku;
    sum.hukusai += item.hukusai;
    sum.syusai += item.syusai;
    sum.dairy += item.dairy;
    sum.fruits += item.fruits;
  });

  const deficiencies = {};

  // 基準値と比較して不足している要素を計算し、deficienciesオブジェクトに格納する
  for (const nutrient in sum) {
    const value = sum[nutrient];
    const standard = standardValues[nutrient];
    if (value < standard.min) {
      deficiencies[nutrient] = value - standard.min;
    } else if (value > standard.max) {
      deficiencies[nutrient] = value - standard.max;
    } else {
      deficiencies[nutrient] = 0;
    }
  }

  toWebGUI = Object.values(deficiencies); // キーを抜いた数字のみの配列を作成

  console.log("各栄養素合計値", sum); // 合計値をコンソールに出力
  console.log("WebGUIに渡す用の配列", toWebGUI);

  for (const cls in ClassList) {
    if (toWebGUI[cls] < 0) {
      toChatGPT.push(ClassList[cls]);
    }
  }

  console.log("ChatGPTAPIに渡す用の配列", toChatGPT);
  dispatch(setToChatGPT(toChatGPT));
  dispatch(setToWebGL(toWebGUI));
};

export default CalcNutri;
