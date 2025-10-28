const appDiv = document.getElementById("app");

function updateView() {
    const currentPage = model.app.currentPage;

    if (currentPage === 'welcomeView') {
      welcomeView();
    }

    if (currentPage === 'homeView'){
        // homeView;
    }

    else if (currentPage === 'logInView') {
        loginView();
    }

    else if (currentPage === 'signUpView'){
        signupView();
    }

    else if (currentPage === 'profileView'){
       profileView();
    }

    else if (currentPage === 'logView') {
        logView();
    }

}

window.onload = () => updateView();