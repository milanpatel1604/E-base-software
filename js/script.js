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
    if (eName.value, eId.value, eSalary.value, ePosition.value != 0) {
        eEmpArr.push(eName.value);
        eEmpArr.push(eId.value);
        eEmpArr.push(eSalary.value);
        eEmpArr.push(ePosition.value);
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
    for (let i = 0; i < eEmpArr.length; i += 4) {
        html +=
            `<div class="card m-4 mb-2" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title">${eEmpArr[i]}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">employee id: ${eEmpArr[i + 1]}</li>
        <li class="list-group-item">salary: ${eEmpArr[i + 2]}</li>
        <li class="list-group-item">position: ${eEmpArr[i + 3]}</li>
        </ul>
        <div class="card-body">
        <button type="submit" class="btn btn-secondary" onclick="editEmpCard(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal"
        data-bs-whatever="@mdo">Edit</button>
        <button type="submit" class="btn btn-danger" onclick="deleteEmpCard(${i})">Delete</button>
        </div>
        </div>`;
    }
    if (eEmpArr.length != 0) {
        cardsContainer.innerHTML = html;
    }
    else {
        cardsContainer.innerHTML = "<h4 class='mt-3' > No Employees to Show </h4>";
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
    eEmpArr.splice(i, 4);
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
    eName.value = eEmpArr[i];
    eId.value = eEmpArr[i+1];
    eSalary.value = eEmpArr[i+2];
    ePosition.value = eEmpArr[i+3];
    deleteEmpCard(i);
}