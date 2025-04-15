// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
// console.log(contacts);
const threeContacts = contacts.splice(0, 3);
// console.log(threeContacts);

// Your code goes here ...
for (contact of threeContacts) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  deleteButton(row);
  likeButton(row);
  tableBody.appendChild(row);
}

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  function deleteButton(row) {
    const deleteButton = row.querySelector(".btn-delete");
    deleteButton.addEventListener("click", function() {
      row.remove();
    });
  }

  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  function likeButton(row) {
    const likeButton = row.querySelector(".btn-like");
    likeButton.addEventListener("click", function() {
      this.classList.toggle("selected");
    })
  }
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
function addRandomContact() {
  const randomButton = document.querySelector("#btn-add-random");
  randomButton.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const newRandomContact = contacts.splice(randomNumber, 1);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${contact.pictureUrl}" />
      </td>
      <td> ${newRandomContact[0].name} </td>
      <td> ${newRandomContact[0].popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
  deleteButton(row);
  likeButton(row);
  tableBody.appendChild(row);
  });
}

addRandomContact();
