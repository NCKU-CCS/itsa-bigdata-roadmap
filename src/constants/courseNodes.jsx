const courseNodes = [
  {
    id: 'storageProcess',
    text: '儲存處理',
    top: 115,
    left: 303,
    color: ' #67ab9f',
    tooltip:
      '由於傳統的資料儲存及處理方式無法應付大數據巨大的資料量，因此需要針對大量的數據開發出新的儲存及處理技術，如批次資料處理及即時資料處理，即可以針對不同的情況下節省儲存需求及加快處理速度。',
  },
  {
    id: 'storageAnalysis',
    text: '分析技術',
    top: 114.5,
    left: 402,
    color: ' #67ab9f',
    tooltip:
      '對資料根據不同情況所需的分析技術，有針對資料庫中的結構化數據的查詢分析，以及針對即時資料的流分析等等。',
  },
  {
    id: 'dataCollection',
    text: '資料收集',
    top: 273.5,
    left: 259.5,
    color: ' #ff9354',
    tooltip:
      '大數據的資料收集來源方式可以有很多種，可以是透過定時呼叫API自動獲取資料，或者透過網路爬蟲爬取網路上的資料，也可以是從多台裝置上即時獲取資料等等。',
  },
  {
    id: 'dataEvaluation',
    text: '資料評估',
    top: 273,
    left: 319.5,
    color: ' #ff9354',
    tooltip:
      '而收集來的資料大部分情況下並非乾淨、完美的，因此在進入接下來的步驟前，需要對資料進行評估及處理。',
  },
  {
    id: 'featureSelection',
    text: '特徵選擇',
    top: 272.5,
    left: 380,
    color: ' #ff9354',
    tooltip:
      '同樣地，並非所有的資料特徵對於模型訓練出正確的結果是有益的，因此需要透過特徵選擇演算法來擷取出最佳的特徵，使模型可以獲得最佳的結果。',
  },
  {
    id: 'DimensionReduction',
    text: '降維',
    top: 272,
    left: 440,
    color: ' #ff9354',
    tooltip:
      '通常若資料的維度過高，會影響模型的準確性及泛用性，也會讓運算量過大，因此需要將資料進行降維來避免上述這些情況的發生。',
  },
  {
    id: 'probabilityTheory',
    text: '機率論',
    top: 417,
    left: 273,
    color: ' #003366',
    tooltip:
      '機率論不是指排列組合或古典機率，而是要了解隨機變數(random variable)、聯合分配(joint distribution)、大數法則(law of large number)、中央極限定理(central limit theorem)。機率論是處理「隨機性」最有效的工具，幾乎所有的資料分析方法都是建立在機率論的理論框架。',
  },
  {
    id: 'variationAnalysis',
    text: '變異量數分析',
    top: 416,
    left: 361,
    color: ' #003366',
    tooltip:
      '變異數分析（ANOVA）是一系列統計模型及其相關的過程總稱，為資料分析中常見的統計模型，主要為探討輸入資料特徵與目標結果的關係。',
  },
  {
    id: 'correlationCoefficient',
    text: '相關係數',
    top: 416.5,
    left: 449.5,
    color: ' #003366',
    tooltip:
      '相關係數是用以反映變數之間相關關係密切程度的統計指標，可以透過相關係數得知輸入資料特徵與目標結果的相關性。',
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
      '所謂分散式運算是一門電腦科學，它研究如何把一個需要非常巨大的計算能力才能解決的問題分成許多小的部分，然後把這些部分分配給許多電腦進行處理，最後把這些計算結果綜合起來得到最終的結果。 ',
  },
  {
    id: 'distributedManager',
    text: '分散式資源管理',
    top: 126.5,
    left: 821,
    color: ' #5c91e0',
    tooltip:
      '分散式資源管理系統，用於提高分散式的叢集環境下資源的利用率，這些資源包括記憶體，I/O，網路，磁碟等。',
  },
  {
    id: 'distributedStreaming',
    text: '分散式串流',
    top: 126.5,
    left: 887,
    color: ' #5c91e0',
    tooltip:
      '資料串流平台，將外部資料來源有效整合內部資料儲存、運算機制，完成即時數據分析與機器學習運算，建立預測模型。',
  },
  {
    id: 'distributedCoordination',
    text: '分散式協調及資料一致性',
    top: 126.5,
    left: 953.5,
    color: ' #5c91e0',
    tooltip:
      '在分散式環境中，一致性是指資料在多個副本之間是否能夠保持一致的特性。資料在發生變化的時候，需要保證發生變化之後，所有的副本都能保持一致。',
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
      '給訂標記好的資料，選用分類演算法訓練分類器，用來預測新資料的所屬的類別。',
  },
  {
    id: 'MLRegressionAnalysis',
    text: '迴歸分析',
    top: 292,
    left: 803,
    color: ' #ea6e6e',
    tooltip:
      '迴歸分析（regression analysis)是確定兩種或兩種以上變數間相互依賴的定量關係的一種統計分析方法。',
  },
  {
    id: 'MLClusterAnalysis',
    text: '群集分析',
    top: 292,
    left: 866,
    color: ' #ea6e6e',
    tooltip:
      '聚類是把相似的物件通過靜態分類的方法分成不同的組別或者更多的子集（subset），這樣讓在同一個子集中的成員物件都有相似的一些屬性，常見的包括在坐標系中更加短的空間距離等。一般把資料聚類歸納為一種非監督式學習。',
  },
  {
    id: 'supervisedLearning',
    text: '監督式',
    top: 238,
    left: 1062,
    color: ' #17544c',
    tooltip:
      '深度學習(Deep learning) 在人工智能（Artificial Intelligence）應用方向上有著至關重要的作用。一個監督式神經網絡（Supervised Neural Network）必須先學習一些輸入和預期輸出，然後再得出合理的推論。監督式神經網路包括卷積神經網路(CNN)和循環神經網路(RNN)。',
  },
  {
    id: 'unSupervisedLearning',
    text: '非監督式',
    top: 240,
    left: 1151.5,
    color: ' #17544c',
    tooltip:
      '而深度學習的非監督式神經網絡（Unsupervised Neural Network）通常會學習無標籤的資料集作為輸入，而該資料集沒有被預先訓練過，機器將通過歸類，自動發現模式/規律/趨勢。其中較常見的模型為生成對抗模型(GAN)。',
  },
  {
    id: 'model',
    text: '基於模型',
    top: 376.5,
    left: 1061.5,
    color: ' #7160b8',
    tooltip:
      '強化學習是機器學習中的一個領域，是無監督，透過獎勵的學習方式，其理論為如何在環境給予的獎勵或懲罰的刺激下，逐步形成對刺激的預期，產生能獲得最大利益的習慣性行為。而基於模型即為已知環境模型，在事先已知做什麼樣的行為會有什麼樣的回饋，效率較高。',
  },
  {
    id: 'modelFree',
    text: '無模型',
    top: 377,
    left: 1153,
    color: ' #7160b8',
    tooltip:
      '而相對於強化學習的基於模型，無模型事先並不知道做什麼樣的行為會有什麼樣的回饋，需要自行探索學習，因此效率較低，但通用性相對較高。',
  },
  {
    id: 'visualTool',
    text: '視覺化工具',
    top: 510,
    left: 1029,
    color: ' #ffdb87',
    tooltip:
      '視覺化工具為協助使用者繪製出直覺美觀的圖表來呈現資料的工具，通常有無須程式包裝完善的工具，以及使用自由度較大利用程式繪製的工具。',
  },
  {
    id: 'visualScience',
    text: '科學視覺化',
    top: 511,
    left: 1093,
    color: ' #ffdb87',
    tooltip:
      '科學視覺化是科學之中的一個跨學科研究與應用領域，主要關注三維現象的視覺化，如建築學、氣象學、醫學或生物學方面的各種系統，重點在於對體、面以及光源等等的逼真渲染，目的是以圖形方式說明科學資料，使科學家能夠從資料中瞭解、說明和收集規律。',
  },
  {
    id: 'dataVisualization',
    text: '資訊視覺化',
    top: 510,
    left: 1156,
    color: ' #ffdb87',
    tooltip:
      '資訊視覺化是研究抽象資料的互動式視覺表示以加強人類認知。 抽象資料包括數位和非數位資料，如地理資訊與文本。柱狀圖、趨勢圖、流程圖、樹狀圖等，都屬於資訊視覺化，這些圖形的設計都將抽象的概念轉化成為視覺化資訊。',
  },
  {
    id: 'visualAnalysis',
    text: '可視分析學',
    top: 509.5,
    left: 1220,
    color: ' #ffdb87',
    tooltip:
      '可視分析學是隨著科學視覺化和資訊視覺化發展而形成的新領域，重點是透過互動式視覺介面進行分析推理。',
  },
];

export default courseNodes;
