// =======================================================================
// --- 您的 Moments 內容數據庫 ---
// 在此處添加、修改或刪除您的 Moments
// =======================================================================

const momentsData = [
    {
        id: "moment-1",
        type: "image", // 'image' 或 'poem'
        title: "風暴與花", // 目錄中顯示的標題
        thumb: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=150&q=60", // 目錄縮略圖
        content: {
            imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
            text: "風暴過後，我們在廢墟上種花。<br>生活不是等待，而是創造。"
        }
    },
    {
        id: "moment-2",
        type: "poem",
        title: "如霧起時 (長詩)",
        thumb: "poem", // 特殊標記，會顯示一個“詩”字圖標
        content: {
            lines: [
                "如霧起時",
                "敲打著窗櫺的",
                "不是風",
                "是經年的沈默",
                "這是為了測試長詩",
                "而增加的文字",
                "當內容超過一屏",
                "你可以左右滑動",
                "在豎排的文字森林裡",
                "尋找下一個句子",
                "光從右邊來",
                "故事往左邊去",
                "這就是傳統的閱讀",
                "在數字時代的回響",
                "就像一本",
                "永遠翻不完的書"
            ],
            author: "Joyance"
        }
    },
    {
        id: "moment-3",
        type: "image",
        title: "久別重逢",
        thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=150&q=60",
        content: {
            imageSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            text: `"所有的相遇，都是久別重逢。"`,
            meta: "2023.12.07" // 可選的元信息，如日期
        }
    }
    // 【添加新 Moment】：在這裡複製粘貼上面任意一個 {...} 物件，並修改內容即可。
];
