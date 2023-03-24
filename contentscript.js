var isDebugMode = false;

window.onload = () => {
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(element => {
            try{
                if(element.target && element.target.innerText && element.target.innerText.indexOf('Skip Ad') != -1 ){
                    element.target.click();
                }

                if(element.target && element.target.classList){
                    if(element.target.classList.length > 0 && element.target.classList[0] == 'video-ads'){
                        var adButton = element.target.querySelector('.ytp-ad-overlay-close-button');

                        if(adButton){
                            adButton.click();
                        }
                    }
                }

            }catch(error){
                if(isDebugMode){
                    console.log(error);
                }
            }
            
        });
    });

    mutationObserver.observe(document.body, {attributes: true, subtree: true, childList: true, characterData: true});
}