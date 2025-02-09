function setLanguage(lang) {
    localStorage.setItem("language", lang);
    loadMarkdown();
}

function getLanguage() {
    return localStorage.getItem("language") || "zh";
}
