export type Item = {
  name: string;
  id: string;
};

export type Talk = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  genre: string[];
  content: string;
  time: string;
  label: {
    [id: string]: number;
  };
};

export const genre: Item[] = [
  {
    name: 'Web',
    id: 'we',
  },
  {
    name: 'ゲーム',
    id: 'ga',
  },
  {
    name: '競技プログラミング',
    id: 'cp',
  },
  {
    name: '機械学習',
    id: 'ml',
  },
  {
    name: 'ビジネス',
    id: 'bu',
  },
  {
    name: '就活',
    id: 'hr',
  },
  {
    name: 'エンジニア',
    id: 'en',
  },
  {
    name: 'その他',
    id: 'ot',
  },
];

export const interest: Item[] = [
  {
    name: '実際に何か動いているところを見たい',
    id: 'de',
  },
  {
    name: '起業したい',
    id: 'en',
  },
  {
    name: '競技プログラミングが好き',
    id: 'cp',
  },
  {
    name: '何か作りたい',
    id: 'ma',
  },
  {
    name: '就活の役に立てたい',
    id: 'hr',
  },
  {
    name: '女性エンジニアの話を聞きたい',
    id: 'wo',
  },
  {
    name: 'これからの社会に興味がある',
    id: 'fu',
  },
  {
    name: '企業の裏側が知りたい',
    id: 'ba',
  },
];

export const date: Item[] = [
  {
    name: '3/11',
    id: 'day1',
  },
  {
    name: '3/12',
    id: 'day2',
  },
  {
    name: '3/13',
    id: 'day3',
  },
];

export const talks: Talk[] = [
  {
    id: '1-a-1330',
    title: 'これからの社会の変化と若者に求められるあり方とは',
    speaker: '松尾豊',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 13, 30).toString(),
    label: {
      fu: 1.0,
      en: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '1-b-1330',
    title: '「オタ駆動開発」で夢を叶える',
    speaker: '千代田まどか',
    genre: ['en'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 13, 30).toString(),
    label: {
      wo: 1.0,
      hr: 0.7,
      ma: 0.3,
    },
  },
  {
    id: '1-c-1330',
    title: '高専エンジニアの学生起業25年史',
    speaker: '田中邦裕',
    genre: ['bu', 'en'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 13, 30).toString(),
    label: {
      en: 1.0,
      ba: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '1-a-1440',
    title: '活躍するエンジニアに共通する7つの特徴',
    speaker: '小林篤',
    genre: ['hr', 'en'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 14, 40).toString(),
    label: {
      hr: 1.0,
    },
  },
  {
    id: '1-b-1440',
    title: '難攻不落の未踏峰に挑む',
    speaker: '水上廣敏',
    genre: ['bu'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 14, 40).toString(),
    label: {
      ba: 1.0,
      hr: 0.7,
      fu: 0.3,
    },
  },
  {
    id: '1-c-1440',
    title: '今あえてゲームエンジニアになる理由',
    speaker: '田中泰生',
    genre: ['ga', 'en'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 14, 40).toString(),
    label: {
      fu: 1.0,
      en: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '1-a-1550',
    title: 'Matzに聞きたい100のこと',
    speaker: 'まつもとゆきひろ',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 15, 50).toString(),
    label: {
      ma: 1.0,
    },
  },
  {
    id: '1-b-1550',
    title: 'RedCoderのライブ競プロ',
    speaker: '高橋直大',
    genre: ['cp'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 15, 50).toString(),
    label: {
      cp: 1.0,
      de: 0.7,
      ba: 0.3,
    },
  },
  {
    id: '1-a-1700',
    title: 'エンジニアとしてどう生きていくか',
    speaker: '藤本真樹',
    genre: ['en'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 17, 0).toString(),
    label: {
      hr: 1.0,
      fu: 0.7,
      ba: 0.3,
    },
  },
  {
    id: '1-b-1700',
    title: '競プロスキルでビジネス無双',
    speaker: '塚本祥太',
    genre: ['cp', 'bu'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 17, 0).toString(),
    label: {
      cp: 1.0,
      ba: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '1-c-1700',
    title: '開局後5年のABEMAの裏側に広がるエンジニアリングの世界',
    speaker: '西尾亮太',
    genre: ['en', 'bu'],
    content: 'hogehoge',
    date: 'day1',
    time: new Date(2021, 2, 11, 17, 0).toString(),
    label: {
      ba: 1.0,
      en: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '2-b-1330',
    title: '無駄なものをつくって稼ぐ方法',
    speaker: '藤原麻里菜',
    genre: ['bu'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 13, 30).toString(),
    label: {
      ma: 1.0,
      en: 0.7,
      wo: 0.3,
    },
  },
  {
    id: '2-c-1330',
    title: '新技術への向き合い方',
    speaker: '中出匠哉',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 13, 30).toString(),
    label: {
      fu: 1.0,
      en: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '2-a-1440',
    title: '「市場価値の高いエンジニア」ってどんなエンジニア？',
    speaker: '外山英幸',
    genre: ['hr', 'en'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 14, 40).toString(),
    label: {
      hr: 1.0,
      ba: 0.7,
    },
  },
  {
    id: '2-b-1440',
    title: 'Goライブコーディング',
    speaker: '鈴木健太',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 14, 40).toString(),
    label: {
      de: 1.0,
    },
  },
  {
    id: '2-a-1550',
    title: '超就活術',
    speaker: '片岡俊行',
    genre: ['hr'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 15, 50).toString(),
    label: {
      hr: 1.0,
      ba: 0.7,
      en: 0.3,
    },
  },
  {
    id: '2-b-1550',
    title: 'これから必要とされるエンジニアになるために、知っておくべきこと',
    speaker: '岡本邦宏',
    genre: ['en'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 15, 50).toString(),
    label: {
      fu: 1.0,
    },
  },
  {
    id: '2-c-1550',
    title: 'CTOと一緒におしゃべりしましょう！',
    speaker: '村瀬龍馬',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 15, 50).toString(),
    label: {
      ba: 1.0,
      en: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '2-a-1700',
    title:
      '[1部] 今求められる21世紀型エンジニアに必要なこと [2部] 大好評につき今年も開催！若手6人のぶっちゃけトーク',
    speaker: '長瀬慶重',
    genre: ['en', 'hr'],
    content: 'hogehoge',
    date: 'day2',
    time: new Date(2021, 2, 12, 17, 0).toString(),
    label: {
      fu: 1.0,
      ba: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '3-a-1100',
    title:
      '日本のけしからん行政系機関や大企業でけしからんサイバー技術開発を行なうことについて',
    speaker: '登大遊',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 11, 0).toString(),
    label: {
      fu: 1.0,
      ba: 0.7,
    },
  },
  {
    id: '3-b-1100',
    title:
      'スーパーコンピュータ富岳による10万ノード級のAIとSociety5.0へのインパクト',
    speaker: '松岡聡',
    genre: ['ml'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 11, 0).toString(),
    label: {
      fu: 1.0,
    },
  },
  {
    id: '3-a-1330',
    title: 'CTOが語る、学生が個人開発でイケてる成果物を作るコツ',
    speaker: '小賀昌法',
    genre: ['we', 'hr'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 13, 30).toString(),
    label: {
      hr: 1.0,
      ma: 0.7,
      ba: 0.3,
    },
  },
  {
    id: '3-b-1330',
    title: 'これからのエンジニア/これからのDMM',
    speaker: '大久保寛',
    genre: ['en', 'we'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 13, 30).toString(),
    label: {
      ba: 1.0,
      fu: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '3-a-1440',
    title: '2年で3億7000万人に遊ばれるスマホゲームの作り方',
    speaker: '田中泰生',
    genre: ['ga'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 14, 40).toString(),
    label: {
      fu: 1.0,
      en: 0.7,
      hr: 0.3,
    },
  },
  {
    id: '3-b-1440',
    title: 'ただプログラマでありたい',
    speaker: '成瀬允宣',
    genre: ['en'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 14, 40).toString(),
    label: {
      hr: 1.0,
    },
  },
  {
    id: '3-a-1550',
    title: '技術書執筆のススメ',
    speaker: '澁川喜規',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 15, 50).toString(),
    label: {
      ma: 1.0,
      hr: 0.7,
      ba: 0.3,
    },
  },
  {
    id: '3-a-1700',
    title: 'ひろゆきだけど何か質問ある？',
    speaker: 'ひろゆき',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 17, 0).toString(),
    label: {
      fu: 1.0,
    },
  },
  {
    id: '3-b-1700',
    title: 'プログラミング以外にも重要なこと',
    speaker: '是澤太志、橋本善久、生内洋平',
    genre: ['ot'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 17, 0).toString(),
    label: {
      hr: 1.0,
      ba: 0.7,
      fu: 0.3,
    },
  },
  {
    id: '3-c-1550',
    title: 'これからの時代に必要な技術力',
    speaker: '横路隆',
    genre: ['en'],
    content: 'hogehoge',
    date: 'day3',
    time: new Date(2021, 2, 13, 15, 50).toString(),
    label: {
      fu: 1.0,
      hr: 0.7,
      en: 0.3,
    },
  },
];
