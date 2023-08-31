//ライブラリ系---------------------------------------------------------------------------------------------------------------------------------
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//CSS---------------------------------------------------------------------------------------------------------------------------------
import "../index.css";

//料理選択画面用---------------------------------------------------------------------------------------------------------------------------------
import ModalOpen_morning from "./component/ModalOpen_morning";
import ModalOpen_lunch from "./component/ModalOpen_lunch";
import ModalOpen_dinner from "./component/ModalOpen_dinner";
import ModalOpen_snack from "./component/ModalOpen_snack";
import TutorialModal from "./component/ModalOpen_tutorial";

//右画面---------------------------------------------------------------------------------------------------------------------------------
import WebGL from "./component/WebGL";
import ChatGPT from "./component/ChatGPT";
//import showChatGPT from "./component/showChatGPT"; //未実装

//ヘッダー---------------------------------------------------------------------------------------------------------------------------------
import Header from "./component/Header";

//料理選択画面--------------------------------------------------------------------------------------------------------------------------------------

//Redux actions---------------------------------------------------------------------------------------------------------------------------------
import {
  updateSelectedDishes_dinner,
  updateSelectedDishes_lunch,
  updateSelectedDishes_morning,
  updateSelectedDishes_snack,
} from "./actions/updateSelectedDishes";
import { setToChatGPT } from "./actions/setToChatGPT";
import { setToWebGL } from "./actions/setToWebGL";
import { setToState } from "./actions/setToState";
import { useTodos } from "../FireBase/TodosProvider"; //Context API

//表示用画像---------------------------------------------------------------------------------------------------------------------------------
import morningimg from "./img/toast.png";
import lunchimg from "./img/humberger.png";
import dinnerimg from "./img/dinner.png";
import snackimg from "./img/coffee.png";
import upload from "./img/upload.png";
import upload2 from "./img/upload2.png";
import UnityNormalGIF from "./img/UnityRun_Normal.gif";
import blance_koma from "./img/balance_koma.jpg";

Modal.setAppElement("#root");

const MobileComponent = () => {
  //FireBaseから取得した料理データ---------------------------------------------------------------------------------------------------------------------------------
  const { foodData } = useTodos();

  //dispatch---------------------------------------------------------------------------------------------------------------------------------
  const dispatch = useDispatch();

  //朝食---------------------------------------------------------------------------------------------------------------------------------
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

  //昼食---------------------------------------------------------------------------------------------------------------------------------
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

  //夕食---------------------------------------------------------------------------------------------------------------------------------
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

  //間食---------------------------------------------------------------------------------------------------------------------------------
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

  //選択された料理を元にバランスを計算する---------------------------------------------------------------------------------------------------------------------------------
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
    dishlist.forEach((item) => {
      //dishlistは各Modalで選択された料理を格納してある
      sum.syusai += item.syusai;
      sum.syusyoku += item.syusyoku;
      sum.hukusai += item.hukusai;
      sum.fruits += item.fruits;
      sum.dairy += item.dairy;
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
  //Submitbutton用---------------------------------------------------------------------------------------------------------------------------------
  const [executeElements, setExecuteElements] = useState(false); // ボタンがクリックされたかどうかの状態
  const handleExecuteElements = () => {
    setExecuteElements(() => true);
    dispatch(setToState(true)); // ボタンがクリックされたら状態を更新して要素を実行
  };

  //初回読み込みモーダル表示---------------------------------------------------------------------------------------------------------------------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true); // ページがロードされた後にモーダルを表示
  }, []);
  const closeModalFn = () => {
    setIsModalOpen(false);
  };

  //ChatGPT,WebGLを定義---------------------------------------------------------------------------------------------------------------------------------
  const toChatGPT = useSelector((state) => state.setTo_ChatGPT);
  const toWebGL = useSelector((state) => state.setTo_WebGL);

  //style定義---------------------------------------------------------------------------------------------------------------------------------
  const ButtonClassStyle =
    "bg-[#37AB9D] hover:bg-emerald-600 transition-all duration-500 ease-out text-[#F3F3F3] w-72 rounded-md flex items-center px-2 py-2 font-bold text-32 mx-auto my-5";

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
      <div style={{ display: "flex" }}>
        <TutorialModal />
      </div>
      <header style={{ backgroundColor: "#F3F3F3", padding: "16px" }}>
        <Header />
      </header>
      <div className="bg-red-200">
        <div className="flex justify-center space-x-2 mx-5">
          <button
            className={ButtonClassStyle}
            onClick={handleOpenModal_morning}
          >
            <img src={morningimg} alt="Morning" />
          </button>
          <button className={ButtonClassStyle} onClick={handleOpenModal_lunch}>
            <img src={lunchimg} alt="Lunch" />
          </button>
          <button className={ButtonClassStyle} onClick={handleOpenModal_dinner}>
            <img src={dinnerimg} alt="dinner" />
          </button>
          <button className={ButtonClassStyle} onClick={handleOpenModal_snack}>
            <img src={snackimg} alt="Snack" />
          </button>
          <button
            className="bg-red-400 hover:bg-orange-400 transition-all duration-500 ease-out text-[#F3F3F3] w-64 rounded-md flex items-center px-2 py-2 font-bold text-32 mx-auto my-5"
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
            <img src={upload2} alt="upload2" />
          </button>
        </div>

        {isModalOpen_morning && (
          // eslint-disable-next-line react/jsx-pascal-case
          <ModalOpen_morning
            Menu="morning"
            closeModalFn={handleCloseModal_morning}
          />
        )}
        {isModalOpen_lunch && (
          // eslint-disable-next-line react/jsx-pascal-case
          <ModalOpen_lunch Menu="lunch" closeModalFn={handleCloseModal_lunch} />
        )}
        {isModalOpen_dinner && (
          // eslint-disable-next-line react/jsx-pascal-case
          <ModalOpen_dinner
            Menu="dinner"
            closeModalFn={handleCloseModal_dinner}
          />
        )}
        {isModalOpen_snack && (
          // eslint-disable-next-line react/jsx-pascal-case
          <ModalOpen_snack Menu="snack" closeModalFn={handleCloseModal_snack} />
        )}

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
    </>
  );
};

export default MobileComponent;
