import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import UnityNormalGIF from "../img/UnityRun_Normal.gif";
import UnityfalldownGIF from "../img/UnityRun_falldown.gif";
import UnityguraguraGIF from "../img/UnityRun_guragura.gif";
import blance_koma from "../img/balance_koma.jpg";

function TutorialModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("tab1"); // Initialize with a default tab

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const getImageForTab = () => {
    if (selectedTab === "tab1") {
      return UnityNormalGIF;
    } else if (selectedTab === "tab2") {
      return UnityguraguraGIF; // Use your alternate image source here
    } else if (selectedTab === "tab3") {
      return UnityfalldownGIF;
    }
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // This will close the modal when clicking outside
        shouldCloseOnOverlayClick={true}
        className="flex mx-auto my-20 h-5/6 w-3/4 bg-white bg-opacity-100 rounded-xl border-solid border-[#37AB9D] border-8"
      >
        <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
          <div style={{ flex: "1", width: "50%" }}>
            <div>
              <img
                src={getImageForTab()}
                style={{ width: "100%", height: "68vh" }}
                alt="Tab Content"
              />
              <div>
                <div className="relative mt-4">
                  <button
                    onClick={() => handleTabClick("tab1")}
                    className={`tab-button ${
                      selectedTab === "tab1"
                        ? "active-tab bg-gray-400 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                    style={{ marginRight: "10px", fontSize: "16px" }}
                  >
                    食事バランス完璧！
                  </button>
                  <button
                    onClick={() => handleTabClick("tab2")}
                    className={`tab-button ${
                      selectedTab === "tab2"
                        ? "active-tab bg-gray-400 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                    style={{ marginRight: "10px", fontSize: "16px" }}
                  >
                    食事バランスがちょっと悪い
                  </button>
                  <button
                    onClick={() => handleTabClick("tab3")}
                    className={`tab-button ${
                      selectedTab === "tab3"
                        ? "active-tab bg-gray-400 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                    style={{ fontSize: "16px" }}
                  >
                    食事バランスが凄く悪い
                  </button>
                </div>
              </div>

              <img src={blance_koma} style={{ width: "100%" }}></img>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1>© UTJ/UCL</h1>
              </div>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1>食事バランスガイド：厚生労働省・農林水産省決定</h1>
              </div>
            </div>
          </div>
          <div style={{ flex: "1", overflow: "auto", width: "50%" }}>
            <div className="font-bold">
              <h1 className="text-64 flex flex-row justify-center">
                <h2 className="text-[#37AB9D]">Nutri</h2>
                <h2 className="text-[#6bbaff]">P</h2>
                <h2 className="text-[#d8d355]">Runer</h2>
              </h1>

              <div className="flex flex-row justify-center">
                <h2 className="text-32 text-[#37AB9D]">Nutrient</h2>
                <h2 className="text-32 text-[#05100f]">×</h2>
                <h2 className="text-32 text-[#6bbaff]">Plan</h2>
                <h2 className="text-32 text-[#05100f]">×</h2>
                <h2 className="text-32 text-[#d8d355]">Runner</h2>
              </div>

              <div className="my-5 bg-amber-200 rounded-xl px-3 py-3 mx-3 overflow-wrap">
                <h1 className="text-24">概要</h1>
                <h1>食事バランスきっちり取れてますか？？？</h1>
                <h1>
                  ハッカソン中は特に3食インスタント食品にエナジードリンクのような限界生活をしていませんか！？
                </h1>
                <h1>
                  食事メニューを選択してUnityちゃんをコマの上で走らせよう！！！
                </h1>
              </div>
              <div className="my-5 bg-amber-200 rounded-xl px-3 py-3 mx-3">
                <h1 className="text-24">説明</h1>
                <h1>
                  あなたには朝ごはん、昼ごはん、晩ごはん、間食に何を食べたかを選択してもらいます！
                </h1>
                <h1>
                  もしちゃんとバランスが取れた食事を取れていればUnityちゃんがコマの上で元気に走ってくれます！
                </h1>
                <h1>
                  でも食事バランスが悪いとコマのバランスが悪くなってUnityちゃんが落ちちゃいます！
                </h1>
                <h1>
                  バランスが悪いとコマのサイズが変化します！上から順番に主食・主菜・副菜・果物・乳製品を表しています！
                </h1>
                <h1>
                  バランスを考えた食事を取って限界食生活を改善しよう！！！！
                </h1>
              </div>
              <div className="my-5 bg-amber-200 rounded-xl px-3 py-3 mx-3">
                <h1 className="text-24">操作方法</h1>
                <h1>まず初めに書く食事時に食べた料理を選択！</h1>
                <h1>次に左下のSubmitボタンを押してデータを提出！</h1>
                <h1>
                  最後に右上のresultボタンを押せばUnityちゃんが走れてるか表示されます！
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TutorialModal;
