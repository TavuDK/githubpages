$(document).ready(function() {
    var savedLang = localStorage.getItem('selectedLang');
    var savedFlag = localStorage.getItem('selectedFlag');
    if (savedLang && savedFlag) {
        $('#currentFlag').attr('src', savedFlag);
    }

    $('.dropdown-item').on('click', function() {
        var lang = $(this).data('lang');
        var flagSrc = $(this).find('img').attr('src');
        
        // opdater flagikonet
        $('#currentFlag').attr('src', flagSrc);
        
        // gem valgt sprog og flag i lokal lagring
        localStorage.setItem('selectedLang', lang);
        localStorage.setItem('selectedFlag', flagSrc);
        
        if (lang === 'da') {
            alert('Sproget er skiftet til Dansk.');
        } else if (lang === 'en') {
            alert('Language changed to English.');
        }
    });
});

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function performTask() {
    showLoader();

    setTimeout(() => {

        hideLoader();
    }, 2000);
}

const originalConsoleError = console.error;
console.error = function(...args) {

    originalConsoleError.apply(console, args);

    showLoader();

    setTimeout(() => hideLoader(), 2000);
};

async function asyncOperation() {
    showLoader();
    try {

        await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
        console.error(error); 
    } finally {
        hideLoader();
    }
}

performTask();

