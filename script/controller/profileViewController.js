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
    const weekLog = model.viewState.profileView.weekLog;
    
    progress.todaysCaffeine += amount;
    progress.totalCaffeine += amount;

    const today = "tuesday";
    weekLog[today] += amount;

    document.getElementById("showTodayCaffeine").innerText = progress.todaysCaffeine +  "mg";
    document.getElementById("ShowTotalCaffeine").innerText = progress.totalCaffeine + " mg";

    renderChart();

}

function updateCaffeineDisplay() {
  document.getElementById("showTodayCaffeine").innerText = model.viewState.profileView.progress.todaysCaffeine + " mg";
  document.getElementById("ShowTotalCaffeine").innerText = model.viewState.profileView.progress.totalCaffeine + " mg";
}




function peptalkButton() {
    let randombutton = model.data.pepTalks[Math.floor(Math.random() * model.data.pepTalks.length)];
    document.getElementById("peptalktext").innerHTML = randombutton; //kan hente den via model kanskje senere?
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