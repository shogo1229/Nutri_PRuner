/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import UnityNormalGIF from "../img/UnityRun_Normal.gif";
import UnityfalldownGIF from "../img/UnityRun_falldown.gif";
import UnityguraguraGIF from "../img/UnityRun_guragura.gif";
import Next from "../img/next.png";

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
        style={{ overlay: { position: "fixed" } }} // Prevent background scrolling
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className="flex mx-auto my-20 h-5/6 w-6/5 bg-white bg-opacity-100 rounded-xl border-solid border-[#37AB9D] border-8"
      >
        <div
          className="h-full overflow-auto" // Apply scroll behavior to the entire content
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem", // Add some padding for aesthetics
            maxHeight: "90vh", // Set a maximum height for the entire modal
          }}
        >
          <div className="font-bold">
            <div className="text-32 flex justify-center">
              <h2 className="text-[#37AB9D]">Nutri</h2>
              <h2 className="text-[#6bbaff]">P</h2>
              <h2 className="text-[#d8d355]">Runer</h2>
            </div>

            <div className="flex flex-row justify-center">
              <h2 className="text-30 text-[#37AB9D]">Nutrient</h2>
              <h2 className="text-30 text-[#05100f]">×</h2>
              <h2 className="text-30 text-[#6bbaff]">Plan</h2>
              <h2 className="text-30 text-[#05100f]">×</h2>
              <h2 className="text-30 text-[#d8d355]">Runner</h2>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ flex: "1", width: "50%" }}>
              <img
                src={
                  [UnityNormalGIF, UnityguraguraGIF, UnityfalldownGIF][
                    currentImage
                  ]
                }
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{ flex: "1", width: "50%", justifyContent: "center" }}
                >
                  <img
                    src={Next}
                    onClick={handlePreviousImageClick}
                    className="tab-image"
                    style={{
                      width: "20%",
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
                      width: "20%",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ flex: "1", width: "50%" }}>
              <h1>&nbsp;</h1>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1 style={{ "font-size": "1rem" }}>© UTJ/UCL</h1>
              </div>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1 style={{ "font-size": "0.1rem" }}>食事バランスガイド</h1>
              </div>
              <div className="flex flex-row-reverse font-bold mr-2">
                <h1 style={{ "font-size": "0.1rem" }}>
                  厚生労働省/農林水産省決定
                </h1>
              </div>
              <p
                className="tab-description"
                style={{
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "pre-line",
                }}
              >
                {
                  [
                    "バランスが良い時!Unityちゃんも元気に走ってます!",
                    "ちょっとダメかも！Unityちゃんが走りづらそうです!",
                    "ダメダメです！Unityちゃんがコマから落ちちゃいました！",
                  ][currentImage]
                }
              </p>
            </div>
          </div>
          <div className="my-2 bg-amber-200 rounded-xl px-3 py-3 mx-3 overflow-wrap">
            <h2 className="text-12 font-bold">概要</h2>
            食事バランスきっちり取れてますか？
            ハッカソン中は特に3食インスタント食品にエナジードリンクのような限界生活をしていませんか！
            食事メニューを選択してUnityちゃんをコマの上で走らせよう！！！
          </div>
          <div className=" bg-amber-200 rounded-xl px-3 py-3 mx-3">
            <h2 className="text-12 font-bold">説明</h2>
            <h1>
              あなたには朝ごはん、昼ごはん、晩ごはん、間食に何を食べたかを選択してもらいます！
              もしちゃんとバランスが取れた食事を取れていればUnityちゃんがコマの上で元気に走ってくれます！
              でも食事バランスが悪いとコマのバランスが悪くなってUnityちゃんが落ちちゃいます！
              バランスが悪いとコマのサイズが変化します！上から順番に主食・主菜・副菜・果物・乳製品を表しています！
            </h1>
            <h1>バランスを考えた食事を取って限界食生活を改善しよう！！！！</h1>
          </div>
          <div className="my-2 bg-amber-200 rounded-xl px-3 py-3 mx-3">
            <h2 className="text-12 font-bold">操作方法</h2>
            まず初めに書く食事時に食べた料理を選択！
            次にSubmitボタンを押してデータを提出！
            <h2>
              最後にresultボタンを押せばUnityちゃんが走れてるか表示されます！
            </h2>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TutorialModal;
