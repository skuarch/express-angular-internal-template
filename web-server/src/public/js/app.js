function redirect(url) {
    window.location.href = url;
}

function clearUrl() {
    const clean_uri = location.protocol + '//' + location.host + location.pathname;
    window.history.replaceState({}, document.title, clean_uri);
}
