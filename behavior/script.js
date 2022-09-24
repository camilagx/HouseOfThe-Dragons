
var characters = ["Rhaenyra Targaryen", "Viserys Targaryen",
                  "Daemon Targaryen", "Otto Hightower", 
                  "Alicent Hightower", "Rhaenys Targaryen", 
                  "Corlys Velaryon", "Criston Cole", 
                  "Mysaria", "Daemon Targaryen", 
                  "Corlys Velaryon",]

var currentList;
var ulContainer;

createList(characters);

// Create list of characters in Characters page within #names-container
function createList(charArray){
  ulContainer = document.createElement('ul');
  for(var i=0; i < charArray.length; i++)
  { 
      let li = document.createElement('li');
      li.style.listStyle = 'none';
      li.style.textAlign = 'left';
      li.appendChild(document.createTextNode(characters[i]));
      ulContainer.appendChild(li); 
  }
  ulContainer.style.paddingLeft = '26%';
  document.querySelector('#names-container').appendChild(ulContainer);
}
//Character list is displayed ascending through sort-list-asc button
const btnAsc = document.querySelector('#sort-list-asc');
btnAsc.addEventListener('click', function() {
  ulContainer.remove();

  let ascArray = characters.sort();
  currentList = ascArray;
  createList(ascArray);

  currentList = ascArray;
})

//Character list descending through sort-list-asc button
const btnDesc = document.querySelector('#sort-list-desc');
btnDesc.addEventListener('click', function() {
  ulContainer.remove();

  let descArray = characters.sort().reverse();
  createList(descArray);

  currentList = descArray;
})


//Validate email
respBtn = document.querySelector('#response-submit').onclick = function(){
  let regEx = /^[\sa-zA-Z0-9,#.-:]+$/;
  const email = document.getElementById('#email').nodeValue;
  const emailBox = document.getElementById('email');

  if( email.includes(regEx)){
    alert("Please enter correct email ID");
    emailBox.focus();
  }
}


