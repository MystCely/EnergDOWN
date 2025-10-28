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

    <button onclick="changePage('logInView')">Log In</button>
    <button onclick="changePage('signUpView')">Sign Up</button>
    `
}