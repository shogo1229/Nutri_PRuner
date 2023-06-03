import axios from "axios";

const API_URL = "https://api.openai.com/v1/";
const MODEL = "gpt-3.5-turbo";
const API_KEY = process.env.CHAT_KEY;

//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
//echo "CHAT_KEY=$CHAT_KEY" >> .env

export const chat = async (message) => {
  console.log("Call2API",message)
    try {
        const response = await axios.post( `${ API_URL }chat/completions`, {
          // モデル ID の指定
            model: MODEL,
          // 質問内容
            messages: [
              // {'role':'system','content': "あなたは今から渡された料理カテゴリからそのカテゴリに属するような料理を提案するBotとして振る舞ってもらいます。出力は、料理名をキー、その料理の概要を値としたオブジェクト型で返すこと。{}のみを出力してください。回答やその他の文章を出力しないでください。"},
              // {'role':'system','content': "料理カテゴリとは「主食、主菜、副菜、乳製品、果物」の5カテゴリから成り立っています"},
              // {'role': 'user','content': "あなたに提案してほしい食事カテゴリは以下の通りです「"+ message + "」、それぞれのカテゴリに属する料理名とその概要を３個ずつ提案してください。出力はJavascriptオブジェクト型とし、カテゴリ名をキーとし、その要素として料理名をキー、概要を値とした形にすること。{}のみを出力してください。回答やその他の文章を出力しないでください。例: {主食:{カレー:カレーの概要,肉じゃが:肉じゃがの概要},副菜:{ポテトサラダ:ポテトサラダの概要,:海鮮サラダ：海鮮サラダの概要}}"},
              {'role':'system','content': "あなたは今から渡された料理カテゴリからそのカテゴリに属するような料理を提案するBotとして振る舞ってもらいます。出力は見やすいように"},
              {'role':'system','content': "料理カテゴリとは「主食、主菜、副菜、乳製品、果物」の5カテゴリから成り立っています"},
              {'role': 'user','content': "あなたに提案してほしい食事カテゴリは以下の通りです「"+ message + "」、それぞれのカテゴリに属する料理名とその概要を３個ずつ提案してください。概要は一行で述べてください。}}"},
            ],    
        }, {  
          // 送信する HTTP ヘッダー(認証情報) 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ API_KEY }`
        }
        })
        // 回答の取得
        return response.data.choices[0].message.content;
    
    } catch ( error ) {
        console.error( error );
        return null;
    }
};
