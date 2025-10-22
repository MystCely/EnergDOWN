
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



//view

function profilePageViewUpdate() {
   let appDiv = document.getElementById("app");
   appDiv.innerHTML = /*HTML*/ `
   <h1>@username</h1>
   <h1 id="OpenLogCloseLog" onclick="ToogleLog()">+</h1>
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

    
    
    

    <h2>Todays caffain:</h2>
    <h2 id="showTodayCaffeine"></h2>
    <br>
    <h2>Total caffain:</h2>
    <h2 id="ShowTotalCaffeine"></h2>
    <br>
    <br>
    <br>
    <br>
    <button onclick="addCaffeine(80)">kaffe (80mg)</button>
    <button onclick="addCaffeine(40)">te (40mg)</button>
    <button onclick="addCaffeine(120)">Energidrikk (120mg)</button>

   </div>

   <br>
   <br>
   <button onclick="Spenndende()">Steph's knapp</button>
   
   
   
   
   `
}

//controller

function addCaffeine(amount){
    const progress = model.viewState.profilePage.progress;
    progress.todaysCaffeine += amount;
    progress.totalCaffeine += amount;

    document.getElementById("showTodayCaffeine").innerText = progress.todaysCaffeine +  "mg";
    document.getElementById("ShowTotalCaffeine").innerText = progress.totalCaffeine + " mg";

}


function ToogleLog(){

    
}


function SaveGoal(){

}

function peptalkButton() {
    let randombutton = model.data.pepTalks[Math.floor(Math.random() * model.data.pepTalks.length)];
    document.getElementById("peptalktext").innerHTML = randombutton; //kan hente den via model kanskje senere?
};






function Spenndende(){
    if(bakgrunn === false){
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'red';
    
    bakgrunn = true;
}
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

        bakgrunn = false;
    }
}


profilePageViewUpdate()