function SaveGoals() {
    const list = document.getElementById('list');
    if(!list) return;

    list.innerHTML = '';

    const day = model.viewState.profileView.selectedDay; 
    const dailyGoals = model.viewState.profileView.personalGoal.daily[day]; 

    for (let i = 0; i < dailyGoals.length; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `goal-${i}`;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = dailyGoals[i];

        list.appendChild(checkbox);
        list.appendChild(label);
        list.appendChild(document.createElement('br'));
    }
}



function addCaffeine(amount){
    const progress = model.viewState.profileView.progress;
    const weekLog = model.viewState.profileView.weekLog;
    const day = model.viewState.profileView.selectedDay;

    weekLog[day] += amount;

    progress.totalCaffeine += amount;

    updateDayInputs();

}

function updateCaffeineDisplay() {
  document.getElementById("showTodayCaffeine").innerText = model.viewState.profileView.progress.todaysCaffeine + " mg";
  document.getElementById("ShowTotalCaffeine").innerText = model.viewState.profileView.progress.totalCaffeine + " mg";
}




function peptalkButton() {
    let randombutton = model.data.pepTalks[Math.floor(Math.random() * model.data.pepTalks.length)];
    document.getElementById("peptalktext").innerHTML = randombutton;

}

function renderChart() {
    const weekLog = model.viewState.profileView.weekLog;
    const days = Object.keys(weekLog);
    const values = Object.values(weekLog);
    const container = document.getElementById("chartContainer");
    container.innerHTML = "";

    for(let i = 0; i < days.length; i++){
        const bar = document.createElement("div");
        bar.style.height = values[i] + "px";
        bar.style.width = "30px";
        bar.style.backgroundColor = "orange";
        bar.style.display = "flex";
        bar.style.justifyContent = "center";
        bar.style.alignItems = "flex-end";
        bar.textContent = values[i]; 
        container.appendChild(bar);
    }
}

function updateDayInputs() {
    const day = model.viewState.profileView.selectedDay;
    const weekLog = model.viewState.profileView.weekLog;
    const progress = model.viewState.profileView.progress;

    document.getElementById("showTodayCaffeine").innerText = weekLog[day] + " mg";

    document.getElementById("ShowTotalCaffeine").innerText = progress.totalCaffeine + " mg"

    renderChart()
}