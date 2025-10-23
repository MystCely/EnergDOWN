const appDiv = document.getElementById("app");

function updateView() {
    
    const currentPage = model.app.currentPage;

    if (currentPage === "welcomePage") {
      welcomeView();
    }

    if (currentPage === 'homepage'){
        // homePage;
    }

    else if(currentPage === 'welcomePage'){
        appDiv.innerHTML = welcomeView();
    }

    else if (currentPage === 'logInPage') {
        loginView();
    }

    else if (currentPage === 'signUpPage'){
        signupView();
    }

    else if (currentPage === 'profilePage'){
       profilePageViewUpdate();
    }

    else if (currentPage === 'logView') {
        logView();
    }

}

window.onload = () => updateView();