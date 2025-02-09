async function loadMarkdown() {
    const lang = getLanguage();
    const mdFile = `index_${lang}.md`;

    const response = await fetch(mdFile);
    const text = await response.text();
    
    document.getElementById("content").innerHTML = marked.parse(text);
}

document.addEventListener("DOMContentLoaded", loadMarkdown);
