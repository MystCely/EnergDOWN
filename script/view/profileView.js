
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
   <div><h1 class="center">@${model.data.users[0].username}</h1></div>
   <hr>
   <label><h1 onclick="changePage('logView')" class="logpageButton";>+</h1></label>
   <div class="profilePictureJustForShow"></div>

   <button class="Peptalks" onclick="peptalkButton()">PepTalks</button>
   <div class="peptalkPops" id="peptalktext"></div>


   <div class="personalGoals"><span><h2>Personal goals</h2></span>
   </div>
   
   <div class="daylieGoals">
   <h3 >Daylie goals</h3>
   <div class=""id="list"></div>
   </div>
   
   <div class="goalsInput">
   <input id="GoalText" type="text" placeholder="Create new goal">
   </div>
   
   <div class="addButtonPos"><button id="AddToListButton">add</button></div>

   <div class="daylieWeekMonth">
   <form><label for="choose"></label></form>
            <select id="choose" name="choices">
            <option value="daylie">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            </select>
    </div>

    <div class="caffianAmount">
    <h3>Todays caffain:</h3>
    <h3 id="showTodayCaffeine"></h3>
    <h3>Total caffain:</h3>
    <h3 id="ShowTotalCaffeine"></h3>
    </div>

    
    
    <div class="testbuttons">
    <button onclick="addCaffeine(80)">kaffe (80mg)</button>
    <button onclick="addCaffeine(40)">te (40mg)</button>
    <button onclick="addCaffeine(120)">Energidrikk (120mg)</button>
    </div>
    
    <h2 class="ProgressHeader">Progress</h2>
    <div class="" id="chartContainer"
        style="
            display: flex;
            position: fixed;
            top: 50%;
            left: 20%;
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