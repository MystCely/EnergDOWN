function logView () {
  appDiv.innerHTML = `
    <div class="main-container">
        <div class="header-container">
          <img src="../img/back-btn.png" alt="back button" class="back-btn" onclick="backToProfile()">
          <img src="../img/reset-btn.png" alt="reset button" class="reset-btn" onclick="resetLog()">
           <h1 class="log-header">Log</h1>
        </div>
        <hr>
      <div class="drink-list-container">
        <ul id="drinkList"></ul>
        <div class="log-container">
            <div id="drinkInformation">
                <p class="choose-drink">Choose a drink</p>
            </div>
            <div class="journal-container">
              <h3 class="journal-header">Journal</h3>
              <textarea id="journal" cols="30" rows="5" placeholder="How was your day?" onkeyup="journalInput(this)"></textarea>
              <h3 class="reflections-header">Reflections</h3>
              <textarea id="reflections" cols="30" rows="5" placeholder="How are you feeling?" onkeyup="reflectionInput(this)"></textarea>
            </div>
        </div>
      </div>
    </div>
    
    <div class="log-btn-container">
      <button id="saveLogBtn" onclick="logDrink()">Add</button>
    </div>
    `;

  const drinkList = document.getElementById('drinkList');
  const drinkInfo = document.getElementById('drinkInformation');

  // display as a list
  model.data.drinkList.forEach(drink => {
    const li = document.createElement('li');
    li.textContent = drink.name;
    li.classList.add('drink-list-item');

    li.dataset.name = drink.name;
    li.dataset.size = drink.size;
    li.dataset.caffein = drink.caffein;

    drinkList.appendChild(li);

  });

  // event listener to show chosen drink
  drinkList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      const { name, size, caffein } = event.target.dataset;
      drinkInfo.innerHTML =
        `<p class="drink-title">${name}</p>
       <p class="drink-info">Size: ${size}</p>
       <p class="drink-info">Caffein: ${caffein}</p>`;
    }
  });

}

function logDrink () {
  // function to save log somewhere in the model
}

// saving user input from both Journal and Reflections
function journalInput(journalInput){
  let journalValue = journalInput.value;
  console.log(journalValue);
}

function reflectionInput(reflectionInput){
  let reflectionValue = reflectionInput.value;
  console.log(reflectionValue);
}

function backToProfile() {
  appDiv.innerHTML= profilePageViewUpdate();
}

function resetLog () {
  logView();
}