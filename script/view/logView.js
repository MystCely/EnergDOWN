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
            </div>
            <div class="journal-container">
              <h3 class="journal-header">Journal</h3>
              <textarea id="journal" cols="30" rows="5" placeholder="How was your day?" data-field="journal"></textarea>
              <h3 class="reflections-header">Reflections</h3>
              <textarea id="reflections" cols="30" rows="5" placeholder="How are you feeling?" data-field="reflection"></textarea>
                <h3>Time Asleep</h3>
                <input class="input-field" type="text" placeholder="Add hours" data-field="hours">
                <br>
                <input class="input-field" type="text" placeholder="Add minutes" data-field="minute">
                <br>
                <input type="date" data-field="date">
            </div>
        </div>
      </div>
    </div>
    <div class="log-btn-container">
      <button id="saveLogBtn" onclick="saveLog()">Add</button>
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
          <div id="inputDrinkContainer">
            <label class="label-drink" for="drinkType">Drink: </label>
            <input type="text" class="drink-input" data-field="name" placeholder="Drink Type">
            <label class="label-drink" for="size">Size: </label>
            <input type="text" class="drink-input" data-field="size" placeholder="Add Size">
            <label class="label-drink" for="drinkType">Caffeine: </label>
            <input type="text" class="drink-input" data-field="caffeine" placeholder="Add Caffeine">
          </div>
          <div class="center">
            <button id="saveDrinkBtn">Save</button>
          </div>
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
      const saveDrinkBtn = document.getElementById('saveDrinkBtn');
      saveDrinkBtn.addEventListener('click', event => {
        if (!customDrinkArray.name || !customDrinkArray.size || !customDrinkArray.caffeine) {
          alert("Please fill in all the drink information.");
          return;
        }
        else if (!isNaN(customDrinkArray.name) || isNaN(customDrinkArray.size) || isNaN(customDrinkArray.caffeine)) {
          alert("Please fill in the correct format.");
          return;
        }

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

function saveLog () {
  // find all elements with data-field
  const fields = document.querySelectorAll('[data-field]');
  const logData = {};

  fields.forEach(field => {
    const fieldName = field.dataset.field;
    logData[fieldName] = field.value;
  });

  model.data.logList.push(logData);
  console.log(model.data.logList);
  profileView();
}

function backToProfile() {
  profileView();
}

function resetLog () {
  logView();
}