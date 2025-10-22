
// loginView() //Denne skal bort (TEST)
function loginView() {
    let HTML = '';
    HTML = document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="changePage('profilePage')">Profile</button>
    
    <section>
        <h1>
        EnergDown
        </h1>
        <div>
            <input type="text" placeholder="Username" onchange="saveUserName(this.value)">
            <br>
            <input type="password" placeholder="Password" onchange="savePassword(this.value)">
        </div>
        <button onclick="logInButton()">
        Log in
        </button>
    </section>
    
    
    `;

    return HTML
}

function saveUserName(value) {
    model.viewState.logInPage.username = value
}

function savePassword(value) {
    model.viewState.logInPage.password = value
}

function logInButton() {
    let username = model.viewState.logInPage.username
    let password = model.viewState.logInPage.password
    let correctinfo = false
    for(let i=0; i<model.data.users.length; i++) {
        if(username === model.data.users[i].username ||
            password === model.data.users[i].password) {
                //Må lagre info et sted, evt id??
                correctinfo = true
            }
    }
    if(correctinfo) {
        //Sendte til riktig side, (homepage)
        console.log("Yey logget inn")
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
    model.viewState.logInPage.username = "";
    model.viewState.logInPage.password = "";
}