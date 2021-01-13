;(function() {
    window.addEventListener('load', afterWindowLoaded);

    function afterWindowLoaded() {
        let btnCon = document.querySelector('#paywall-upsell-button-upgrade');
        if (!btnCon) return;

        let btnReadFree = document.createElement('a');  
        btnReadFree.id = "btnReadForFree";
        btnReadFree.href = "#";
        btnReadFree.textContent = "Read for free";

        let cssText = 'background-color: #319ce8; border-color: #319ce8; margin-left:3px; color:#FFF; border-color: #319ce8;'
        cssText += 'width: 130px; padding: 7px 16px 9px; border-width:1px; border-radius:4px;  line-height: 20px; cursor: pointer;'
        btnReadFree.style.cssText = cssText;
        
        btnCon.appendChild(btnReadFree);

        document.addEventListener('click', function(e) {
            e.preventDefault();

            if(e.target && e.target.id == 'btnReadForFree') {
                btnReadFree.text = "Page loading ...";
                replacePageContent();
            }
        });
    }

    function replacePageContent() {
        fetch(window.location.href, {
                method: 'GET',
                credentials: 'omit',
                mode: 'no-cors',
            }
        ).then(response => response.text()).then(content => {
            var newHTML = document.open("text/html", "replace"); 
            newHTML.write(content); 
            newHTML.close(); 
        });
    }

})();