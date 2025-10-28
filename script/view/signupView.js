// signupView()

function signupView() {
    appDiv.innerHTML = /*HTML*/`
    
    <section class="main-container center">
      <div class=" center flex-column">
        <h1 class="logIn-header">
        Sign Up
        </h1>
        
        <div>
            <input class="input-field" onchange="" type="text" placeholder="First name">
            <br>
            <input class="input-field" onchange="" type="text" placeholder="Last name">
            <br>
            <input class="input-field" onchange="" type="text" placeholder="User name">
            <br>
            <input class="input-field" onchange="" type="email" placeholder="Email address">
            <br>
            <input class="input-field" onchange="" type="password" placeholder="Password">
            <br>
            <input class="input-field" onchange="" type="password" placeholder="Confirm password">
            <br>
            <input class="input-field" onchange="" type="date" placeholder="Birth date">
        </div>
        
        <div class="btn-container center">
            <button onclick=SignUpButton()>Sign up</button>
            <button onclick="changePage('profileView')">profile</button>
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
    const confpassword = model.confirmPassword;

    
    

}