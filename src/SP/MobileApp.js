import WebGL from "./component/WebGL";
import { useState, useEffect } from "react";
import ModalOpen_morning from "./component/ModalOpen_morning";
import ModalOpen_lunch from "./component/ModalOpen_lunch";
import ModalOpen_dinner from "./component/ModalOpen_dinner";
import ModalOpen_snack from "./component/ModalOpen_snack";
import ModalOpen from "./component/ModalOpen";
import {
  updateSelectedDishes_dinner,
  updateSelectedDishes_lunch,
  updateSelectedDishes_morning,
  updateSelectedDishes_snack,
} from "./actions/updateSelectedDishes";

import { foodData } from "./component/NutriDatabase";
import { useDispatch } from "react-redux";
import { setToChatGPT } from "./actions/setToChatGPT";
import { setToWebGL } from "./actions/setToWebGL";
import { setToState } from "./actions/setToState";
import { RectangleComponent } from "./component/button";

import Header from "./component/Header";
import "../index.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import ChatGPT from "./component/ChatGPT";
import morningimg from "./img/toast.png";
import lunchimg from "./img/humberger.png";
import dinnerimg from "./img/dinner.png";
import upload from "./img/upload.png";
import snackimg from "./img/coffee.png";
import UnityNormalGIF from "./img/UnityRun_Normal.gif";
import blance_koma from "./img/balance_koma.jpg";

Modal.setAppElement("#root");

const MobileComponent = () => {
  const [isModalOpen_morning, setIsModalOpen_morning] = useState(false);
  const selectedDishes_morning = useSelector(
    (state) => state.selectedDishes_morning
  );
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleOpenModal_morning = () => {
    setIsModalOpen_morning(true);
  };

  const handleCloseModal_morning = () => {
    setIsModalOpen_morning(false);
  };

  const [isModalOpen_lunch, setIsModalOpen_lunch] = useState(false);
  const selectedDishes_lunch = useSelector(
    (state) => state.selectedDishes_lunch
  );

  const handleOpenModal_lunch = () => {
    setIsModalOpen_lunch(true);
  };

  const handleCloseModal_lunch = () => {
    setIsModalOpen_lunch(false);
  };

  const [isModalOpen_dinner, setIsModalOpen_dinner] = useState(false);
  const selectedDishes_dinner = useSelector(
    (state) => state.selectedDishes_dinner
  );

  const handleOpenModal_dinner = () => {
    setIsModalOpen_dinner(true);
  };

  const handleCloseModal_dinner = () => {
    setIsModalOpen_dinner(false);
  };

  const [isModalOpen_snack, setIsModalOpen_snack] = useState(false);
  const selectedDishes_snack = useSelector(
    (state) => state.selectedDishes_snack
  );

  const handleOpenModal_snack = () => {
    setIsModalOpen_snack(true);
  };

  const handleCloseModal_snack = () => {
    setIsModalOpen_snack(false);
  };

  const dispatch = useDispatch();

  const handleCalcNutri = (dishlist) => {
    console.log("CalcNutri in read");

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
    let toWebGL = [];

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

    toWebGL = Object.values(deficiencies); // キーを抜いた数字のみの配列を作成

    console.log("各栄養素合計値", sum); // 合計値をコンソールに出力

    for (const cls in ClassList) {
      if (toWebGL[cls] < 0) {
        toChatGPT.push(ClassList[cls]);
      }
    }

    console.log("ChatGPTAPIに渡す用の配列", toChatGPT);
    dispatch(setToChatGPT(toChatGPT));
    console.log("WebGUIに渡す用の配列", toWebGL);
    dispatch(setToWebGL(toWebGL));
  };

  const [executeElements, setExecuteElements] = useState(false); // ボタンがクリックされたかどうかの状態

  const handleExecuteElements = () => {
    setExecuteElements(() => true);
    dispatch(setToState(true)); // ボタンがクリックされたら状態を更新して要素を実行
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true); // ページがロードされた後にモーダルを表示
  }, []);

  const closeModalFn = () => {
    setIsModalOpen(false);
  };
  const toChatGPT = useSelector((state) => state.setTo_ChatGPT);
  const toWebGL = useSelector((state) => state.setTo_WebGL);
  const ButtonClassStyle = "bg-[#37AB9D] hover:bg-emerald-400";
  const elementDishes =
    "bg-amber-200 text-[#374151] rounded-full px-4 text-center py-2 font-bold my-1 inline-block mx-1";

  const rectangleStyle = {
    width: "300px",
    height: "200px",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  console.log("tochatGPT length", toChatGPT.length);
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <header style={{ backgroundColor: "#F3F3F3", padding: "16px" }}>
          <Header />
        </header>

        <div className="flex h-screen">
          <div className="w-1/5 bg-primary bg-red-200">
            {/*画面分割　左*/}
            <div className="flex h-screen">
              <div className="m-auto flex flex-col items-center space-y-4">
                <button
                  className={ButtonClassStyle}
                  onClick={handleOpenModal_morning}
                >
                  <img src={morningimg} alt="Morning" className="w-10" />
                </button>
                <button
                  className={ButtonClassStyle}
                  onClick={handleOpenModal_lunch}
                >
                  <img src={lunchimg} alt="Lunch" className="w-10" />
                </button>
                <button
                  className={ButtonClassStyle}
                  onClick={handleOpenModal_dinner}
                >
                  <img src={dinnerimg} alt="dinner" className="w-10" />
                </button>
                <button
                  className={ButtonClassStyle}
                  onClick={handleOpenModal_snack}
                >
                  <img src={snackimg} alt="Snack" className="w-10" />
                </button>
                <button
                  className={ButtonClassStyle}
                  onClick={() => {
                    const allSelectedDishes = [
                      ...selectedDishes_morning,
                      ...selectedDishes_lunch,
                      ...selectedDishes_dinner,
                      ...selectedDishes_snack,
                    ];
                    setSelectedDishes(allSelectedDishes);
                    handleCalcNutri(allSelectedDishes);
                    handleExecuteElements();
                  }}
                >
                  <img src={upload} alt="upload" className="w-10" />
                </button>
              </div>
            </div>

            {isModalOpen_morning && (
              <ModalOpen_morning
                Menu="morning"
                closeModalFn={handleCloseModal_morning}
              />
            )}
            {isModalOpen_lunch && (
              <ModalOpen_lunch
                Menu="lunch"
                closeModalFn={handleCloseModal_lunch}
              />
            )}
            {isModalOpen_dinner && (
              <ModalOpen_dinner
                Menu="dinner"
                closeModalFn={handleCloseModal_dinner}
              />
            )}
            {isModalOpen_snack && (
              <ModalOpen_snack
                Menu="snack"
                closeModalFn={handleCloseModal_snack}
              />
            )}
          </div>
          <div className="w-4/5 bg-secondary bg-red-100">
            {/*画面分割　右*/}
            <WebGL index={toWebGL} />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileComponent;
