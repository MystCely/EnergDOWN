function profileView() {
    model.viewState.profileView.weekLog

    appDiv.innerHTML = /*HTML*/ `
    
   <div class="profile-header"> 
   
   <h1 class="Profile-name">@${getLoggedInUser()}</h1></div>
   
   <label><img class="Profile-pluss-logo" src="img/PlussLogo.png" onclick="changePage('logView')">
   </label>
   <div class="profilePictureJustForShow">
   <img class="profilePictureJustForShow" src="img/Screenshot 2025-11-11 140343.png">
   </div>
   <button onclick="changePage('logged')">log</button>
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
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            </select>
    </div>

    <div class="caffianAmount">
    <h3>Todays caffain:</h3>
    <h3 id="showTodayCaffeine"></h3>
    <h3>Total caffain:</h3>
    <h3 id="ShowTotalCaffeine"></h3>
    </div>

    
    
    <h2 class="ProgressHeader">Progress</h2>
    <div class="" id="chartContainer"
        style="
            display: flex;
            position: fixed;
            top: 50%;
            left: 20%;
            align-items: flex-end;
            height: 200px;;
            gap: 25px;
            margin-top: 30px;">
    </div>

   
   
   
   `;

    const daySelect = document.getElementById("choose");
    daySelect.value = model.viewState.profileView.selectedDay;

    daySelect.addEventListener("change", () => {
    model.viewState.profileView.selectedDay = daySelect.value;
    updateDayInputs(); // oppdater koffein for valgt dag
    SaveGoals(); // oppdater mål for valgt dag
    });


    // peptalkButton() //kjører hvergang man går inn og ut av siden uten å trykke på knapp
    peptalkButton()
    updateCaffeineDisplay()
    updateCaffeineFromLogList();
    renderChart()


    let input = document.getElementById('GoalText');
    let AddToListButton = document.getElementById('AddToListButton');




    AddToListButton.addEventListener('click', () => {
        let GoalText = input.value.trim();
        if (GoalText === '') return;


        model.viewState.profileView.personalGoal.goalList.push(GoalText);


        const day = model.viewState.profileView.selectedDay;
        model.viewState.profileView.personalGoal.daily[day].push(GoalText);

        input.value = '';
        input.focus();

        SaveGoals();
    });

    SaveGoals()


}

profileView();
