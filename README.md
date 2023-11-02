# NutriPRuner

【技育 CAMP】マンスリーハッカソン vol.4  
【技育 CAMP】 アドバンス 9 月
![picture 1](Readme_img/NutriPRuner.png)

# 概要

ユーザーが 1 日に摂取した食事内容から食事バランスを計算し、その結果をコマの回転とサイズ、Unity ちゃんの動きを用いて視覚的にわかりやすく評価し、食事バランスの改善を促す Web アプリ。食事バランスが悪い場合には ChatGPT を用いて不足しているカテゴリの料理を提案する。  
本アプリは Web 上で動作する Web アプリであり、スマートフォンと PC 両方のレイアウトに対応している。  
マンスリーハッカソンでは最優秀賞を受賞した「[https://twitter.com/geek_pjt/status/1665288262314000385](https://twitter.com/geek_pjt/status/1665288262314000385?s=20)」

# 栄養バランスの評価例

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <div style="flex: 1; width: 30%;">
        待機状態
        <img src="Readme_img/wait.gif" alt="Image 1">
    </div>
    <div style="flex: 1; width: 30%;">
        完璧
        <img src="Readme_img/lv1.gif" alt="Image 2">
    </div>
    <div style="flex: 1; width: 30%;">
        少し悪い
        <img src="Readme_img/lv2.gif" alt="Image 3">
    </div>
</div>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <div style="flex: 1; width: 30%;">
        悪い
        <img src="Readme_img/lv3.gif" alt="Image 4">
    </div>
    <div style="flex: 1; width: 30%;">
        かなり悪い
        <img src="Readme_img/lv4.gif" alt="Image 5">
    </div>
    <div style="flex: 1; width: 30%;">
        壊滅的...
        <img src="Readme_img/lv5.gif" alt="Image 6">
    </div>
</div>

# DEMO

デモページ URL「https://main.d29kb7kvs692vl.amplifyapp.com/　」  
※デモページは各種 API の有効期限切れで動作しない恐れがあります。その場合は以下のデモ動画をご覧ください。  
デモ動画「https://www.youtube.com/watch?v=a3v-Pba_1Qs」

# 使用技術

- React/Javascript
- FireBase
- ChatGPT
- Tailwindcss
- Unity
- git-flow
- WebGL
