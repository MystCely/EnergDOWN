const appDiv = document.getElementById("app");

function updateView() {
    
    const currentPage = model.app.currentPage;
    if(currentPage === 'homepage'){
        // homePage
    }

    else if(currentPage === 'welcomePage'){
        appDiv.innerHTML = welcomeView();
    }

    else if (currentPage === 'logInPage') {
        appDiv.innerHTML = loginView();
    }

    else if (currentPage === 'signUpPage'){
        appDiv.innerHTML = signupView();
    }

    else if (currentPage === 'profilePage'){
        appDiv.innerHTML= profilePageViewUpdate();
    }

    else if (currentPage === 'logView') {
        logView();
    }

}

window.onload = () => updateView();