function welcomeView() {
    appDiv.innerHTML = /*HTML*/`
    <div class="main-container center flex-column">
      <div class="welcome-container center">
          <h1>
          Welcome to
          </h1>
          <h2>
          EnergDown
          </h2>
      </div>
          
      <div class="btn-container center">
        <button onclick="changePage('logInView')">Log In</button>
        <button onclick="changePage('signUpView')">Sign Up</button>
      <div>
    </div>
    `;
}