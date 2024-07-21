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



