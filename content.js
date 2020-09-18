;(function() {
    window.addEventListener('load', afterWindowLoaded);

    function afterWindowLoaded() {
        let btnCon = document.querySelector('#paywall-trial-upsell-button');
        if (!btnCon) return;

        let btnReadFree = btnCon.children[0].cloneNode();        
        btnReadFree.id = "btnReadForFree";
        btnReadFree.classList.remove('nf');
        btnReadFree.classList.remove('nd');
        btnReadFree.style.backgroundColor = '#319ce8';
        btnReadFree.style.borderColor = '#319ce8';
        btnReadFree.style.marginLeft = "3px"
        btnReadFree.href = "#";
        btnReadFree.text = "Read for free";

        btnCon.appendChild(btnReadFree);

        document.addEventListener('click', function(e) {
            e.preventDefault();

            if(e.target && e.target.id == 'btnReadForFree') {
                btnReadFree.text = "Page content loading ...";
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
        ).then(response => response.text()).then(content => document.write(content));
    }

})();