// =======================================================================
// --- Moments 內容數據庫 ---
// =======================================================================

const momentsData = [
    {
        id: "moment-1",
        type: "image", 
        title: "風暴與花",
        // PC目錄不顯示縮略圖，但手機轉盤可能會用到標題
        content: {
            imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
            text: "風暴過後，我們在廢墟上種花。<br>生活不是等待，而是創造。"
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
                "第一行永遠在",
                "屏幕的正中央",
                "剩下的文字",
                "安靜地向左流淌",
                "就像河水",
                "流過時間的河床"
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
