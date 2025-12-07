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
                "/medias/IMG_3648.png",
                "/medias/IMG_3774.png",
                "/medias/IMG_3847.png"
            ]
        }
    },

    {
  "id": "moment-3-reversed",
  "type": "poem",
  "title": "頻率",
  "content": {
    "lines": [
      "",  
      "震動頻率",
      "旋轉的機器",
      "生活狀態",
      "現實的囚禁",
      "臆想中的狂歡",
      "歡愉",
      "狂歡",
      "搖滾組成的音樂節",
      "贏得稱賞",
      "歌謠",
      "不存在於這世界",
      "童話",
      "獨",
      "消散",
      "語言在此扁平",
      "而是扭曲這世界",
      "改變的不是旋律",
      "而是人",
      "不是時間",
      "會逝去的",
        "",
    ],
    "author": "Joyance"
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
