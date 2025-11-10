function welcomeView() {
    appDiv.innerHTML = /*HTML*/`
    <div class="main-container center flex-column">
      <div class="welcome-container center">
          <h1 class="Welcome">
          Welcome to
          </h1>
          <h2 class="Welcome">
          EnergDown 
          </h2>
          <img  class="logo" src="img/ChatGPT Image Nov 10, 2025, 12_31_17 PM.png" alt="">
          
      </div>
          
      <div class="btn-container center">
        <button onclick="changePage('logInView')">Log In</button>
        <button onclick="changePage('signUpView')">Sign Up</button>
      <div>
    </div>
    `;
}