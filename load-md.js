async function loadMarkdown() {
    const lang = getLanguage();
    let mdFile = `index_${lang}.md`; // 默认加载主页的 Markdown 文件

    // 判断当前页面，并加载对应的 Markdown 文件
    if (window.location.pathname.includes("privacy.html")) {
        mdFile = `privacy_${lang}.md`;
    } else if (window.location.pathname.includes("terms.html")) {
        mdFile = `terms_${lang}.md`;
    }

    try {
        const response = await fetch(mdFile);
        if (!response.ok) throw new Error("Markdown 文件加载失败");
        const text = await response.text();

        document.getElementById("content").innerHTML = marked.parse(text);
    } catch (error) {
        console.error("Markdown 加载错误:", error);
        document.getElementById("content").innerHTML = "<p>加载内容失败，请稍后再试。</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadMarkdown);
