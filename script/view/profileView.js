
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

   
   
   
   `;

   peptalkButton() //kjører hvergang man går inn og ut av siden uten å trykke på knapp
   updateCaffeineDisplay()


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

/*<h1>Progress</h1>
   <div><dl>1000 mg</dl>
   <br>
   <br>
   <dl>500 mg</dl>
   <br>
   <br>
   <dl>250 mg</dl>
   <br>
   <dl>100 mg</dl>
   <br>
   <dl>0 mg</dl>
   </div>

   <div class="weekdays">
   <p>Mon</p>
   <p>tue</p>
   <p>wed</p>
   <p>thurs</p>
   <p>fri</p>
   <p>sat</p>
   <p>sun</p>
   </div>*/








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