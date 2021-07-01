showCard();

//retrieving employee details
let eName = document.getElementById("e-name");
let eId = document.getElementById("e-id");
let eSalary = document.getElementById("e-salary");
let ePosition = document.getElementById("e-position");

//Adding cards function
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function () {
    let eEmpStr = localStorage.getItem("eEmpStr");
    if (eEmpStr == null) {
        eEmpArr = [];
    }
    else {
        eEmpArr = JSON.parse(eEmpStr);
    }

    // using obj literal in array
    let employeeObj={
        eName : eName.value,
        eId : eId.value,
        eSalary : eSalary.value,
        ePosition : ePosition.value
    }
    if (eName.value, eId.value, eSalary.value, ePosition.value != 0) {
        eEmpArr.push(employeeObj);
    }
    else{
        
    }
    localStorage.setItem("eEmpStr", JSON.stringify(eEmpArr));
    showCard();
    if (eName.value, eId.value, eSalary.value, ePosition.value != 0) {
        eName.value = "";
        eId.value = "";
        eSalary.value = "";
        ePosition.value = "";
    }  
})



//Displaying cards function
function showCard() {
    let eEmpStr = localStorage.getItem("eEmpStr");
    if (eEmpStr == null) {
        eEmpArr = [];
    }
    else {
        eEmpArr = JSON.parse(eEmpStr);
    }
    let cardsContainer = document.getElementById("cardsContainer");
    let html = "";
    eEmpArr.forEach(function(element, index){
        html +=
            `<div class="card m-4 mb-2" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title"><b>${element.eName}</b></h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>employee id:</b> ${element.eId}</li>
        <li class="list-group-item"><b>salary:</b> ${element.eSalary}</li>
        <li class="list-group-item"><b>position:</b> ${element.ePosition}</li>
        </ul>
        <div class="card-body">
        <button type="submit" class="btn btn-secondary" onclick="editEmpCard(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal"
        data-bs-whatever="@mdo">Edit</button>
        <button type="submit" class="btn btn-danger" onclick="deleteEmpCard(${index})">Delete</button>
        </div>
        </div>`;
    });
    if (eEmpArr.length != 0) {
        cardsContainer.innerHTML = html;
    }
    else {
        cardsContainer.innerHTML = "<h4 class='mt-3' > No Employees to Show, <br><p class='subtitle-p'> Add your employees to maintain their details.</p></h4>";
    }
}



//deleting card function
function deleteEmpCard(i) {
    let eEmpStr = localStorage.getItem("eEmpStr");
    if (eEmpStr == null) {
        eEmpArr = [];
    }
    else {
        eEmpArr = JSON.parse(eEmpStr);
    }
    eEmpArr.splice(i, 1);
    localStorage.setItem("eEmpStr", JSON.stringify(eEmpArr));
    showCard();
}



//Searching and filtering card function
let searchTxt=document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){
    let searchValue=searchTxt.value;
    let card=document.getElementsByClassName("card");
    Array.from(card).forEach(function(element){
        let cardTxt= element.getElementsByTagName("h5")[0].innerText;
        cardTxt += element.getElementsByTagName("li")[0].innerText;
        cardTxt += element.getElementsByTagName("li")[1].innerText;
        cardTxt += element.getElementsByTagName("li")[2].innerText;
        if(cardTxt.toLowerCase().includes(searchValue.toLowerCase())){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    });
});



// Editing card function
function editEmpCard(i){
    let eEmpStr = localStorage.getItem("eEmpStr");
    if (eEmpStr == null) {
        eEmpArr = [];
    }
    else {
        eEmpArr = JSON.parse(eEmpStr);
    }
    eName.value = eEmpArr[i].eName;
    eId.value = eEmpArr[i].eId;
    eSalary.value = eEmpArr[i].eSalary;
    ePosition.value = eEmpArr[i].ePosition;
    deleteEmpCard(i);
}