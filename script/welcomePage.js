welcomeView()


function welcomeView() {
    appDiv.innerHTML = /*HTML*/`
    
    <div>
        <h1>
        Welcome to
        </h1>
        <h2>
        EnergDown
        </h2>
    </div>

    <button onclick="changePage('logInPage')">Log In</button>
    <button onclick="changePage('signUpPage')">Sign Up</button>
    `

    return HTML
}