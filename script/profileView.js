
/* Min checklist:
    Peptalk (x)
    Add knapp (x)
    Create new goal side ()
    total caffain ()
    coffain so far ()
    Graf()

    */


//model
let bakgrunn =false;
let logOpen = false;
let SavedGoalChecklists = []


//view

function profilePageViewUpdate() {
   let appDiv = document.getElementById("app");
   appDiv.innerHTML = /*HTML*/ `
   <h1>@username</h1>
   <h1 onclick="ToogleLog()">+</h1>
   <button onclick="peptalkButton()">PepTalks</button>
   <div id="peptalktext"></div>
   <div><span><h1>Personal goals</h1></span>
   <label>
   <input type="checkbox"> En kopp kaffe (forslag)<label>
   <br>
   <br>
   <input type="text" placeholder="Create new goal" onchange="SaveGoal(this.value)">
   <button onclick="">add</button>
   <p id="personalGoals"><p>
   <p id="ChecklistGoals"></p>
   <br>
   <form><label for="choose"></label></form>
            <select id="choose" name="choices">
            <option value="daylie">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            </select>

    
    <br>
    <br>
    <h2>Todays caffain:</h2>
    <h2 id="showTodayCaffain"></h2>
    <br>
    <h2>Total caffain:</h2>
    <h2 id="ShowTotalCaffain"></h2>
    <br>

   </div>

   <button onclick="Spenndende()">Steph's knapp</button>
   
   
   
   
   `
}

//controller


/*function ToogleLog(){
    if(logOpen){
        model.data.currentPage.profilePage



        logOpen = false; 
        
    }

    else(logOpen){
        model.data.currentPage.logPage

        logOpen = true;
    }

} */  //toogle funkjon til senere


function SaveGoal(){

}

function peptalkButton() {
    let randombutton = model.data.pepTalks[Math.floor(Math.random() * model.data.pepTalks.length)];
    document.getElementById("peptalktext").innerHTML = randombutton; //kan hente den via model kanskje senere?
};


function Spenndende(){
    if(bakgrunn === false){
    document.body.style.backgroundColor = 'green';
    
    bakgrunn = true;
}
    else{
        document.body.style.backgroundColor = 'white';

        bakgrunn = false;
    }
}


profilePageViewUpdate()