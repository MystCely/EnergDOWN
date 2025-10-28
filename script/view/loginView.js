
// loginView() //Denne skal bort (TEST)
function loginView() {
    appDiv.innerHTML = /*HTML*/`
    <section class="main-container center">
        <div class="center flex-column">
          <h1 class="logIn-header">
          EnergDown
          </h1>
          <div>
              <input class="input-field" type="text" placeholder="Username" onchange="saveUserName(this.value)">
              <br>
              <input class="input-field" type="password" placeholder="Password" onchange="savePassword(this.value)">
          </div>
          <div class="btn-container center">
            <button onclick="logInButton()">Log in</button>
            <button onclick="changePage('profileView')">Profile</button>
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
    for(let i=0; i<model.data.users.length; i++) {
        if(username === model.data.users[i].username ||
            password === model.data.users[i].password) {
                //Må lagre info et sted, evt id??
                correctinfo = true
            }
    }
    if(correctinfo) {
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