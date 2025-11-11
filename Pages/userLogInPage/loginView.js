
// loginView() //Denne skal bort (TEST)
function loginView() {
    appDiv.innerHTML = /*HTML*/`
    <section class="main-container center">
        <div class="input-bkg"></div>
        <div class="center flex-column">
          <h1 class="logIn-header">
          EnergDown  
          </h1>
          <img class="log-in-logo" src="img/ChatGPT Image Nov 10, 2025, 12_31_17 PM.png">
          <div class="input-container">
              <input class="input-field-login-username" type="text" placeholder="Username" onchange="saveUserName(this.value)">
              <br>
              <input class="input-field-login-password" type="password" placeholder="Password" onchange="savePassword(this.value)">
          </div>
          <div class="btn-container center">
            <button class="hover-btn" onclick="logInButton()">Log in</button>
          </div>
        </div>
        
    </section>
    
    `;
}

function saveUserName(value) {
    model.viewState.logInView.username = value
}

function savePassword(value) {
    model.viewState.logInView.password = value
}

function logInButton() {
    let username = model.viewState.logInView.username
    let password = model.viewState.logInView.password
    let correctinfo = false
    let loggedInUserId = null
    for(let i=0; i<model.data.users.length; i++) {
        if(username === model.data.users[i].username &&
            password === model.data.users[i].password) {
                //Må lagre info et sted, evt id??
                correctinfo = true
                loggedInUserId = model.data.users[i].id;
            }
    }
    if(correctinfo) {
        model.app.currentUserId = loggedInUserId;
        //Sendte til riktig side, (homeView, profileView)
        changePage('profileView')
        emptyLogInValue()
    }
    else if(!correctinfo) {
        //Feil innlogging
        console.log("FEIL")
        loginView()
    }else{
        console.log("ERROR")
    }
    
}
function emptyLogInValue() {
    model.viewState.logInView.username = "";
    model.viewState.logInView.password = "";
    
}
