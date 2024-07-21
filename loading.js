function showLoader() {
    const loader = document.getElementById('loaderAnimation');

    console.log('Loader element:', loader); 

    if (loader) { 
        loader.classList.remove('hidden');

        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000); 
    } else {
        console.error('Loader element not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-login, .btn-register');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            showLoader();

            setTimeout(() => {

            }, 2000); 
        });
    });
});
