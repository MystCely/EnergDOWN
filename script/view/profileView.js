
/* Min checklist:
    Peptalk (x)
    Add knapp (x)
    Create new goal (x)
    Peptalk når siden lastes førstegang (x)
    total caffain () koble til Steph sine
    coffain so far () koble til Steph sine
    Graf()

    */


/*let bakgrunn =false;
let logOpen = false 

*/ // evt toogle knapp til logg + Steph's knapp



//view

function profileView() {
    
    model.viewState.profileView.weekLog = model.viewState.profileView.weekLog

   appDiv.innerHTML = /*HTML*/ `
   <h1 class="log-btn-container">@${model.data.users[0].username}</h1>
   <label><h1 id="OpenLogCloseLog" onclick="changePage('logView')" class="LogButton";>+</h1></label>
   <div class="profilePictureJustForShow"></div>

   <button class="peptalkButtonAndText" onclick="peptalkButton()">PepTalks</button>
   <div class="peptalkTextPos" id="peptalktext"></div>


   <div class="personalGoals"><span><h1>Personal goals</h1></span>
   <br>
   <div id="list"></div>
   <br>
   <br>
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

   <div id="chartContainer"
     style="display: flex;
            align-items: flex-end;
            height: 200px;
            gap: 5px;
            margin-top: 30px;">
</div>

   
   
   
   `;

   peptalkButton() //kjører hvergang man går inn og ut av siden uten å trykke på knapp
   updateCaffeineDisplay()
   renderChart()


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

SaveGoals()

}

//controller







/*function Spenndende(){
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
}*/


profileView();





/*const weekLog = model.viewState.profileView.weekLog;
    const days = Object.keys(weekLog);
    const values = Object.values(weekLog)

    const container = document.getElementById("chartContainer");
    container.innerHTML = "";

    for(let i = 0; i < days.length; i++){
        const bar = document.createElement("div");
        bar.style.height = values[i] * 2 + "px"; // høyden representerer koffein
        bar.style.width = "30px";
        bar.style.backgroundColor = "orange";
        bar.style.textAlign = "center";
        bar.style.color = "black";
        bar.style.display = "flex";
        bar.style.justifyContent = "center";
        bar.style.alignItems = "flex-end";
        bar.textContent = values[i]; // vis tall på stolpen
        container.appendChild(bar);
}*/