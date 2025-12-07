// =======================================================================
// --- Moments 內容數據庫 ---
// =======================================================================

const momentsData = [
    {
        id: "moment-1",
        type: "image", 
        title: "小城",
        // PC目錄不顯示縮略圖，但手機轉盤可能會用到標題
        content: {
            imageSrc: "medias/IMG_3719.png",
            text: "磚塊"
        }
    },
    {
        id: "moment-gallery-1",
        type: "gallery", // --- 新增：多圖畫廊類型 ---
        title: "城市碎片 (組圖)",
        content: {
            text: "光影的切片，記錄時間的流逝。",
            images: [
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
            ]
        }
    },
    {
  "id": "moment-3",
  "type": "poem",
  "title": "狂歡與囚禁",
  "content": {
    "lines": [
      "會逝去的",
      "不是時間",
      "而是人",
      "改變的不是旋律",
      "而是扭曲這世界",
      "語言在此扁平",
      "消散",
      "獨",
      "童話",
      "不存在於這世界",
      "歌謠",
      "贏得稱賞",
      "搖滾組成的音樂節",
      "狂歡",
      "歡愉",
      "臆想中的狂歡",
      "現實的囚禁",
      "生活狀態",
      "旋轉的機器",
      "震動頻率"
    ],
    "author": "Anonymous"
  }
},
    {
        id: "moment-3",
        type: "image",
        title: "久別重逢",
        content: {
            imageSrc: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
            text: `"所有的相遇，都是久別重逢。"`,
            meta: "2023.12.07"
        }
    }
];
