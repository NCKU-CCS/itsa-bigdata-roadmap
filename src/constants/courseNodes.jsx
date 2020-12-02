const courseNodes = [
  {
    id: 'storageProcess',
    text: '儲存處理',
    top: 115,
    left: 303,
    color: ' #67ab9f',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'storageAnalysis',
    text: '分析技術',
    top: 114.5,
    left: 402,
    color: ' #67ab9f',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'dataCollection',
    text: '資料收集',
    top: 273.5,
    left: 259.5,
    color: ' #ff9354',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'dataEvaluation',
    text: '資料評估',
    top: 273,
    left: 319.5,
    color: ' #ff9354',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'featureSelection',
    text: '特徵選擇',
    top: 272.5,
    left: 380,
    color: ' #ff9354',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'DimensionReduction',
    text: '降維',
    top: 272,
    left: 440,
    color: ' #ff9354',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'probabilityTheory',
    text: '機率論',
    top: 417,
    left: 273,
    color: ' #003366',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'variationAnalysis',
    text: '變異量數分析',
    top: 416,
    left: 361,
    color: ' #003366',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'correlationCoefficient',
    text: '相關係數',
    top: 416.5,
    left: 449.5,
    color: ' #003366',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'distributedSystem',
    text: '分散式系統介紹',
    top: 126.5,
    left: 622,
    color: ' #5c91e0',
    tooltip:
      '分散式系統(Distributed system) 是一組電腦，透過網路相互連接傳遞訊息與通訊後並協調他們的行為而形成的系統，應用範圍來自有所不同的面向服務的架構、大型多人線上遊戲、對等網路等應用。',
  },
  {
    id: 'distributedStorage',
    text: '分散式儲存',
    top: 126.5,
    left: 688,
    color: ' #5c91e0',
    tooltip:
      '分散式儲存往往採用分散式的系統架構，利用多台儲存伺服器分擔儲存負荷，來提高系統可靠性、可用性、存取效率。',
  },
  {
    id: 'distributedCoculate',
    text: '分散式運算',
    top: 126.5,
    left: 755,
    color: ' #5c91e0',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'distributedManager',
    text: '分散式資源管理',
    top: 126.5,
    left: 821,
    color: ' #5c91e0',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'distributedStreaming',
    text: '分散式串流',
    top: 126.5,
    left: 887,
    color: ' #5c91e0',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'distributedCoordination',
    text: '分散式協調及資料一致性',
    top: 126.5,
    left: 953.5,
    color: ' #5c91e0',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'MLClassification',
    text: '機器學習分類',
    top: 292,
    left: 614,
    color: ' #ea6e6e',
    tooltip:
      '機器學習(Machine Learning) 是人工智慧的一個分支，理論主要是設計和分析一些讓電腦可以自動“學習”的演算法，從資料中自動分析獲得規律。',
  },
  {
    id: 'MLProcess',
    text: '機器學習流程',
    top: 292,
    left: 677,
    color: ' #ea6e6e',
    tooltip:
      '機器學習擁有多個的步驟，透過循序漸進的資料處理、分析、驗證，便能夠從資料中挖掘出有價值的資訊。',
  },
  {
    id: 'MLClassificationAnalysis',
    text: '分類分析',
    top: 292,
    left: 728,
    color: ' #ea6e6e',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'MLRegressionAnalysis',
    text: '迴歸分析',
    top: 292,
    left: 803,
    color: ' #ea6e6e',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'MLClusterAnalysis',
    text: '群集分析',
    top: 292,
    left: 866,
    color: ' #ea6e6e',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'supervisedLearning',
    text: '監督式',
    top: 238,
    left: 1062,
    color: ' #17544c',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'unSupervisedLearning',
    text: '非監督式',
    top: 240,
    left: 1151.5,
    color: ' #17544c',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'model',
    text: '基於模型',
    top: 376.5,
    left: 1061.5,
    color: ' #7160b8',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'modelFree',
    text: '無模型',
    top: 377,
    left: 1153,
    color: ' #7160b8',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'visualTool',
    text: '視覺化工具',
    top: 510,
    left: 1029,
    color: ' #ffdb87',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'visualScience',
    text: '科學視覺化',
    top: 511,
    left: 1093,
    color: ' #ffdb87',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'dataVisualization',
    text: '資訊視覺化',
    top: 510,
    left: 1156,
    color: ' #ffdb87',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
  {
    id: 'visualAnalysis',
    text: '可視分析學',
    top: 509.5,
    left: 1220,
    color: ' #ffdb87',
    tooltip:
      '課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介',
  },
];

export default courseNodes;
