function logView () {
  appDiv.innerHTML = /*html*/ `
    <div class="flex-column center">
        <div class="header-container">
          <img src="../../img/back-btn.png" alt="back button" class="back-btn" onclick="backToProfile()">
          <img src="../../img/reset-btn.png" alt="reset button" class="reset-btn" onclick="resetLog()">
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

  // display drinks as a list
    model.data.drinkList.forEach(drink => {
      const li = document.createElement('li');
      li.textContent = drink.name;
      li.classList.add('drink-list-item');

      li.dataset.name = drink.name;
      li.dataset.size = drink.size;
      li.dataset.caffeine = drink.caffeine;

      drinkList.appendChild(li);
    });

  // event listener to show chosen drink
  drinkList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      const { name, size, caffeine } = event.target.dataset;
      drinkInfo.innerHTML =
        `<p class="drink-title">${name}</p>
         <p class="drink-info">Size: ${size}</p>
         <p class="drink-info">Caffeine: ${caffeine}</p>`;
    }
  });

  // add custom drink
  const addButton = document.createElement('button');
  addButton.textContent = 'Add a drink';
  addButton.id = "customDrink";
  drinkList.appendChild(addButton);

  // show form to add custom drink
  drinkList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      drinkInfo.innerHTML = /*html*/ `
          <div class="custom-drink-container" id="inputDrinkContainer">
            <label for="drinkType">Drink: </label>
            <br>
            <input type="text" class="drink-input" data-field="name" placeholder="Drink Type"><br>
            <label for="size">Size: </label>
            <br>
            <input type="text" class="drink-input" data-field="size" placeholder="Add Size"><br>
            <label for="drinkType">Caffeine: </label>
            <br>
            <input type="text" class="drink-input" data-field="caffeine" placeholder="Add Caffeine">
          </div>
          <button id="customDrinkBtn">Save</button>
          <hr>
      `;

      // saves user input from custom drink
      const inputDrinkContainer = document.getElementById('inputDrinkContainer');
      const customDrinkArray = model.viewState.logView.customDrink;

      inputDrinkContainer.addEventListener("input", event => {
        const field = event.target.dataset.field;
        customDrinkArray[field] = event.target.value;
      });

      // show and save custom drink
      const customDrinkBtn = document.getElementById('customDrinkBtn');

      customDrinkBtn.addEventListener('click', event => {
        model.data.drinkList.push(customDrinkArray);
        if (event.target.tagName === 'BUTTON') {
          const { name, size, caffeine } = customDrinkArray;
          drinkInfo.innerHTML =
            `<p class="drink-title">${name}</p>
             <p class="drink-info">Size: ${size}ml</p>
             <p class="drink-info">Caffeine: ${caffeine}mg</p>`;
        }
      });

    }

  });

}


function logDrink () {
  // function to save log somewhere in the mode
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
  profileView();
}

function resetLog () {
  logView();
}