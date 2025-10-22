function updateView() {
    const currentPage = model.app.currentPage;
    const appDiv = document.getElementById("app");

    if(currentPage === 'homepage'){
        
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
        appDiv.innerHTML = logView();
    }








}

window.onload = () => updateView();