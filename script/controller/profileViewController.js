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

function updateCaffeineDisplay() {
  document.getElementById("showTodayCaffeine").innerText = model.viewState.profileView.progress.todaysCaffeine + " mg";
  document.getElementById("ShowTotalCaffeine").innerText = model.viewState.profileView.progress.totalCaffeine + " mg";
}




function peptalkButton() {
    let randombutton = model.data.pepTalks[Math.floor(Math.random() * model.data.pepTalks.length)];
    document.getElementById("peptalktext").innerHTML = randombutton; //kan hente den via model kanskje senere?
}