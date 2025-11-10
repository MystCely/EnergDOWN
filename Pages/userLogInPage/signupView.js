// signupView()

function signupView() {
    appDiv.innerHTML = /*HTML*/`
    
    <section class="main-container center">
      <div class=" center flex-column">
        <h1 class="logIn-header">
        Sign Up
        </h1>
        
        <div>
            <input class="input-field-login-signup" onchange="" type="text" placeholder="Username">
            <br>
            <input class="input-field-login-signup" onchange="" type="password" placeholder="Password">
            <br>
            <input class="input-field-login-signup" onchange="" type="password" placeholder="Confirm password">
        </div>
        
        <div class="btn-container center">
            <button class="hover-btn" onclick=SignUpButton()>Sign up</button>
        </div>
      </div>
      
    </section>
    `;
}

function SignUpButton() {
    // const firstName = model.viewState.firstName;
    // const lastName = model.viewState.lastname;
    const username = model.username;
    // const email = model.email;
    // const birthdate = model.birthday;
    const password = model.password;
    const confpassword = model.confPassword;

    
    

}