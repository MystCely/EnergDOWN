// signupView()

function signupView() {
    let HTML = '';
    HTML = document.getElementById('app').innerHTML = /*HTML*/`
    
    <section>
    <h1>
    Sign Up
    </h1>
    <div>
        <input onchange="" type="text" placeholder="First name">
        <br>
        <input onchange="" type="text" placeholder="Last name">
        <br>
        <input onchange="" type="text" placeholder="User name">
        <br>
        <input onchange="" type="text" placeholder="Email address">
        <br>
        <input onchange="" type="text" placeholder="Birth date">
        <br>
        <input onchange="" type="password" placeholder="Password">
        <br>
        <input onchange="" type="password" placeholder="Confirm password">
    </div>
    <div>
        <button onclick=SignUpButton()>
        Sign up
        </button>
    </div>
    </section>
    `;

    return HTML
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