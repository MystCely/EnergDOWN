const appDiv = document.getElementById("app");

function mainView() {
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

      else if (currentPage === 'logged') {
        loggedView();
    }

}

window.onload = () => mainView();

function changePage(newpage){
  model.app.currentPage = newpage;
  mainView();
}
