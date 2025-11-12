function loggedView() {
  let HTML = /*HTML*/`
  <div class="logged-header">
  <h2 class="mylog-txt">My Log</h2>
  
  </div>
  <button class="back-btn-logged" onclick="changePage('profileView')">Back</button>
  <div id="logListContainer">
  
  `;

  if (model.data.logList.length === 0) {
    HTML += /*HTML*/`<p>No logs yet</p>`;
  } else {
    model.data.logList.forEach(log => {
      const drink = log.drink || {};
      HTML += /*HTML*/`
        <div style="background-color: rgba(255, 255, 255, 0.5); 
        backdrop-filter: blur(10px);"class="">
          <h3>${drink.name || "Unknown drink"}</h3>
          <p>Size: ${drink.size || "?"} ml</p>
          <p>Caffeine: ${drink.caffeine || "?"} mg</p>
          <p>Journal: ${log.journal || ""}</p>
          <p>Reflections: ${log.reflection || ""}</p>
          <p>Sleep: ${log.hours || 0}h ${log.minute || 0}m</p>
          <p>Date: ${log.date || ""}</p>
        </div>
        <hr>
      `;
    });
  }

  HTML += `</div>`;
  appDiv.innerHTML = HTML;
}