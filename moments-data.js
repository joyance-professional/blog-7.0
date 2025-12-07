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
        id: "moment-2",
        type: "poem",
        title: "如霧起時",
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
        content: {
            imageSrc: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
            text: `"所有的相遇，都是久別重逢。"`,
            meta: "2023.12.07"
        }
    }
];
