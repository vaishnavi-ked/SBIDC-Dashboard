for (let columnIndex = 0; columnIndex < maxColumns; columnIndex++) { // Loop through all rows
    let columnName = columns[columnIndex].getName();
        // console.log("column added" + columnName);
        
        if(columnName=="alarmData")
        {
           rowindex++;
          console.log("column added alarm data successfully");
          let cellData = this.get(columnName); // Fetch data from the row
          console.log("column added" + columnName);

//                 console.log(`Raw Cell Data:`, cellData);
// console.log(`Type of Cell Data:`, typeof cellData);

// Convert cellData to a string (if not already)
let cellDataStr = String(cellData);

// Extract "msgText" value
let match = cellDataStr.match(/msgText=([^,]*)/);
let msgText = match ? match[1] : "Not Found";

console.log(`Extracted msgText:`, msgText);

            // Set the value in the HTML element with id "alarms"
            document.getElementById("alarms").innerHTML = msgText;
            
            let card = document.createElement("div");
card.className = "col-md-4"; // Bootstrap grid for responsive layout

card.innerHTML = `
<div class="card shadow-sm mb-3">
    <div class="card-body">
        <h5 class="card-title">Message ${rowIndex}</h5>
        <p class="card-text">${msgText}</p>
    </div>
</div>
`;

cardsContainer.appendChild(card);
        }
    
}