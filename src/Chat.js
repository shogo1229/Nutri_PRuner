import axios from "axios";

const API_URL = "https://api.openai.com/v1/";
const MODEL = "gpt-3.5-turbo";
const API_KEY = "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";

export const chat = async (message) => {
    try {
        const response = await axios.post( `${ API_URL }chat/completions`, {
          // モデル ID の指定
            model: MODEL,
          // 質問内容
            messages: [
              {'role':'system','content': "あなたは食事の栄養を管理しています。出力は、料理名をキー、その料理の概要を値としたオブジェクト型で返すこと。{}のみを出力してください。回答やその他の文章を出力しないでください。"},
              {'role': 'user','content': "栄養を計算した結果「"+ message + "」に含まれるような栄養素が足りませんでした。「" + message + "」として適した料理とその概要を3個あげてください。出力はオブジェクト型とし、料理名をキー、概要を値とすること。例: {カレー:カレーの概要,肉じゃが:肉じゃがの概要"},
        ],
        }, {
          // 送信する HTTP ヘッダー(認証情報)
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ API_KEY }`
        }
        });
        // 回答の取得
        return response.data.choices[0].message.content;
    
    } catch ( error ) {
        console.error( error );
        return null;
    }
};
