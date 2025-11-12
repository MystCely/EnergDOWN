// signupView()

function signupView() {
    appDiv.innerHTML = /*HTML*/`
    
    <section class="main-container center">
      <div class="sign-up center flex-column">
        <h1 class="logIn-header">
        Sign Up
        </h1>
        <img  class="logo-sign-up" src="img/ChatGPT Image Nov 10, 2025, 12_31_17 PM.png" alt="">
        
        <div class="input-container">
            <input id="inputUserN" class="input-field-login-signup" onchange="" type="text" placeholder="Username" value="${model.viewState.signUpView.username}">
            <br>
            <input id="inputpassW" class="input-field-login-signup" type="password" placeholder="Password" value="${model.viewState.signUpView.password}">
            <br>
            <input id="inputpasswCheck" class="input-field-login-signup" onchange="" type="password" placeholder="Confirm password" value="${model.viewState.signUpView.confirmpassword}">
            
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
    //const username = model.username;
    // const email = model.email;
    // const birthdate = model.birthday;
    //const password = model.password;
    //const confpassword = model.confPassword;

    
    

}

function SignUpButton(){
    const NewUserName = document.getElementById('inputUserN').value
    const NewPassWord = document.getElementById('inputpassW').value

    model.viewState.signUpView.username = NewUserName;
    model.viewState.signUpView.password = NewPassWord;

    model.data.users.push({id: giveId(), admin: false, username: NewUserName, password: NewPassWord})

    model.viewState.signUpView.username = '';
    model.viewState.signUpView.password = '';

    document.getElementById('inputUserN').value = '';
    document.getElementById('inputpassW').value = '';
    document.getElementById('inputpasswCheck').value = '';




    changePage('logInView')
    


}

