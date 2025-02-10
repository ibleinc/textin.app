document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("languageSwitcher");

    // 语言翻译字典
    const translations = {
        "en": {
            "title": "Secure & Private Messaging",
            "description": "Textin is an encrypted chat app that ensures your messages stay private.",
        },
        "zh-cn": {
            "title": "安全 & 私密的通信",
            "description": "Textin 是一款加密聊天应用，确保您的消息保持私密。",
        },
        "zh-tw": {
            "title": "安全 & 私密的通訊",
            "description": "Textin 是一款加密聊天應用，確保您的訊息保持私密。",
        }
    };

    // 切换语言
    languageSwitcher.addEventListener("change", function () {
        const lang = languageSwitcher.value;
        document.getElementById("title").textContent = translations[lang]["title"];
        document.getElementById("description").textContent = translations[lang]["description"];
    });
});

// 加载 Markdown 页面
function loadMarkdown(page) {
    window.location.href = `${page}.html`;
}
