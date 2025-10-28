
/* Min checklist:
    Peptalk (x)
    Add knapp (x)
    Create new goal side ()
    total caffain ()
    coffain so far ()
    Graf()

    */


let bakgrunn =false;
let logOpen = false



//view

function profileView() {
   appDiv.innerHTML = /*HTML*/ `
   <h1 class="log-btn-container">@${model.data.users[0].username}</h1>
   <label><h1 id="OpenLogCloseLog" onclick="changePage('logView')" class="LogButton";>+</h1></label>
   <div class="profilePictureJustForShow"></div>
   <button class="peptalkButtonAndText" onclick="peptalkButton()">PepTalks</button>
   <div class="peptalkTextPos" id="peptalktext"></div>


   <div class="personalGoals"><span><h1>Personal goals</h1></span>
   <br>
   <br>
   <div id="list"></div>
   <input id="GoalText" type="text" placeholder="Create new goal">
   <button id="AddToListButton">add</button>
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

   
   
   `;

   let input = document.getElementById('GoalText');
   let AddToListButton = document.getElementById('AddToListButton');


AddToListButton.addEventListener('click', () => {
    let GoalText = input.value.trim();
    if(GoalText === '') return;

    model.viewState.profileView.personalGoal.goalList.push(GoalText)

    input.value = '';
    input.focus()

    SaveGoals()

})

AddToListButton.addEventListener('keydown', e => {
    if (e.key === 'Enter') AddToListButton.click();
});

SaveGoals()

}

//controller

function SaveGoals(){
    let list = document.getElementById('list');

    list.innerHTML = '';
    if(!list) return;
    
    list.innerHTML = '';

    let goalList = model.viewState.profileView.personalGoal.goalList;

    for (let i = 0; i < goalList.length; i++) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `goal-${i}`;

        let label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = goalList[i];

        list.appendChild(checkbox);
        list.appendChild(label);
        list.appendChild(document.createElement('br'));
    }
}


function addCaffeine(amount){
    const progress = model.viewState.profileView.progress;
    progress.todaysCaffeine += amount;
    progress.totalCaffeine += amount;

    document.getElementById("showTodayCaffeine").innerText = progress.todaysCaffeine +  "mg";
    document.getElementById("ShowTotalCaffeine").innerText = progress.totalCaffeine + " mg";

}


function ToogleLog(){

    
}




function peptalkButton() {
    let randombutton = model.data.pepTalks[Math.floor(Math.random() * model.data.pepTalks.length)];
    document.getElementById("peptalktext").innerHTML = randombutton; //kan hente den via model kanskje senere?
}






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


profileView();