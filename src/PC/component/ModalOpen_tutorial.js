/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import UnityNormalGIF from "../img/UnityRun_Normal.gif";
import UnityfalldownGIF from "../img/UnityRun_falldown.gif";
import UnityguraguraGIF from "../img/UnityRun_guragura.gif";
import Next from "../img/next.png";
import blance_koma from "../img/balance_koma.jpg";

function TutorialModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleNextImageClick = () => {
    setCurrentImage((currentImage + 1) % 3);
  };

  const handlePreviousImageClick = () => {
    setCurrentImage((currentImage - 1 + 3) % 3);
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
                src={
                  [UnityNormalGIF, UnityguraguraGIF, UnityfalldownGIF][
                    currentImage
                  ]
                }
                style={{ width: "100%", height: "60vh" }}
              />
              <img src={blance_koma} style={{ width: "100%" }}></img>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1>© UTJ/UCL</h1>
              </div>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1>食事バランスガイド：厚生労働省・農林水産省決定</h1>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{ flex: "1", width: "50%", justifyContent: "center" }}
              >
                <img
                  src={Next}
                  onClick={handlePreviousImageClick}
                  className="tab-image"
                  style={{
                    width: "10%",
                    transform: "scaleX(-1)",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
              <div style={{ flex: "1", width: "50%" }}>
                <img
                  src={Next}
                  onClick={handleNextImageClick}
                  className="tab-image"
                  style={{
                    width: "10%",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
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
                <h1>矢印ボタンを押して各画面のサンプルを見てみよう！</h1>
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
