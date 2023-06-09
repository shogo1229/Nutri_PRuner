// options.js

const dishList = [
    'カレー',
    'うどん',
    'ご飯1杯',
    'サラダ',
    '味噌汁',
    '卵１個',
    'ハンバーグ',
    '豚の生姜焼き',
    'パスタ',
    '食パン',
    'ラーメン',
    'オムライス',
    'シチュー',
    '焼きそば',
    '焼肉',
    'おでん',
    '焼き鳥',
    'グラタン',
    '焼き魚',
    'カツ丼',
    'ピザ',
    '焼きおにぎり',
    '焼きそばパン',
    'シーフードパスタ',
    'お好み焼き',
    'とんかつ',
    'ポトフ',
    'ピラフ',
    'ビーフシチュー',
    '焼きもち',
    'おにぎり',
    'おすし',
    'そば',
    'とろろそば',
    'ざるそば',
    'たこ焼き',
    'ゆで卵',
    '野菜炒め',
    '煮物',
    '唐揚げ',
    'カツカレー',
    'カツサンド',
    'トマトスパゲッティ',
    'タコライス',
    '餃子',
    'シュウマイ',
    'サンドイッチ',
    'ライスバーガー',
    'ポテトサラダ',
    'シーザーサラダ',
    '春巻き',
    'チャーハン',
    'カルボナーラ',
    'ペペロンチーノ',
    'ミートソースパスタ',
    'スープカレー',
    '肉じゃが',
    'たまご焼き',
    'ゆでたまご',
    'フライドチキン',
    'ローストチキン',
    'チキンカツ',
    'タコス',
    'シーザードレッシングサラダ',
    'ニンニク焼き',
    'もつ煮込み',
    '豆腐ハンバーグ',
    'カルビ',
    'サムギョプサル',
    'バーベキューチキン',
    'カキフライ',
    'さばの味噌煮',
    'いかの塩辛',
    '鯖の塩焼き',
    'カニクリームコロッケ',
    'エビフライ',
    'オムレツ',
    'チキン南蛮',
    'シーフードカレー',
    '麻婆豆腐',
    'ラタトゥイユ',
    'ポテトグラタン',
    'ビーフストロガノフ',
    'スパゲッティボロネーゼ',
    'カニクリームパスタ',
    'ニョッキ',
    'ラザニア',
    'オニオングラタンスープ',
    'ポークカツレツ',
    'サワークリームポーク',
    'サンマの塩焼き',
    'ミートボール',
    'ハムエッグ',
    'グリルドチーズサンドイッチ',
    'ピーマンの肉詰め',
    'ホットドッグ',
    'メンチカツ',
    'ビーフン',
    'エビチリ',
    'サーモンのホイル焼き',
    '牛乳',
    'みかん',
    'りんご',
    '梨',
    'ぶどう',
    '桃',
    'モンスター',
    '柿',
    'チーズ',
    'ヨーグルト',
    '納豆',
    '目玉焼き',
    '茶碗蒸し',
    'すき焼き',
    'サンマ',
    '酢豚',
    'コーンスープ',
    '野菜スープ',
    '枝豆',
    'ポテトフライ',
    'ほうれん草のおひたし',
    'きんぴらごぼう',
    'コロッケ',
    'ピザトースト',
    'ハンバーガー',
    'ビビンバ',
    '親子丼',
    'うな重',
    'エビピラフ',
    'チキンライス',
    '天丼',
    'かぼちゃの煮物',
    '切り干し大根',
    '蒸かした芋です！',
    'きゅうりのもろみ添え',
    'きゅうりの浅漬け',
    'カップ麺',
    'コーラ',
    'ゆでブロッコリー',
    'ロールキャベツ',
    'そうめん',
    '菓子パン',
    '回鍋肉',
    '青椒肉絲',
    'ガパオライス',
    'ロコモコ',
    '焼き芋',
    '牛丼',
    '煮卵',
    'サラダチキン',
    'とり天',
    'オニオンフライ',



];

const options = dishList.map((dish, index) => ({ value: (index + 1).toString(), label: dish }));

export default options;
