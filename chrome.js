

let myLeads = [];
const inputEl = document.querySelector("#input-el");
const buttonEl = document.querySelector("#btn-el");
const ulEl =  document.querySelector("#ul-el");
const deleteEL =  document.querySelector("#del-el");
const tabEl = document.querySelector("#tab-el");

//Parsing from String to Int
const localStorageLeads = JSON.parse(localStorage.getItem("MyLeads"));


if (localStorageLeads){
  myLeads = localStorageLeads;
  render(myLeads);
}


//Save the input
buttonEl.addEventListener("click", save);

function save(){
    myLeads.push(inputEl.value);
    //inputEl.value = "";
    localStorage.setItem("MyLeads", JSON.stringify(myLeads));
    render(myLeads);
}

//Save the tab

tabEl.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url);
      localStorage.setItem("MyLeads", JSON.stringify(myLeads));
      render(myLeads)
    })
})

//Delete the leads 

deleteEL.addEventListener("dblclick", deleteAll);

function deleteAll() {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = ""; 
  
}



//Display my leads
function render(leads){

let listItems = "";

for (let i = 0; i< leads.length; i++) {
    
//if (inputEl.value == ""){

  listItems += 
  
   
   `<li>
       <a href='${leads[i]}' target='_blank'> ${leads[i]}</a>
  
       <li>`;
 
/*}else{

 listItems += 
   
  `<li>
       <p> ${leads[i]}</p>
   
   </li>`;}
   

   
*/ }

  inputEl.value = "";
  
  ulEl.innerHTML = listItems;
 
}


