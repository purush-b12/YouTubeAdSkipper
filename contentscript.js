
window.onload = () => {
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(element => {
            if(element.target && element.target.innerText && element.target.innerText.indexOf('Skip Ad') != -1 ){
                element.target.click();
            }
            if(element.target.classList[0] == 'video-ads'){
                element.target.querySelector('.ytp-ad-overlay-close-button').click();
            }
        });
    });

    mutationObserver.observe(document.body, {attributes: true, subtree: true, childList: true, characterData: true});
}