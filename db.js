// console.log("Database is connected.");
const firebaseConfig = {
    apiKey: "AIzaSyAdJ5Hl2CALsGGF7aEJqYAYc6BWwZTe_as",
    authDomain: "project-form-3dee2.firebaseapp.com",
    databaseURL: "https://project-form-3dee2-default-rtdb.firebaseio.com",
    projectId: "project-form-3dee2",
    storageBucket: "project-form-3dee2.appspot.com",
    messagingSenderId: "234790862034",
    appId: "1:234790862034:web:fda35c1be7457e5e2ec10b",
    measurementId: "G-09Q1MP2EMJ"
  };

// Initialize the FireBase Database!
firebase.initializeApp(firebaseConfig);

// Reference Your Database 
var projectFormDB = firebase.database().ref('ProjectForm');

document.getElementById('ProjectForm').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var firstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var mobileNumber = getElementVal("mobileNumber");
    var Address = getElementVal("address");
    var isGenderMale = getElementVal("Male");
    var isGenderFemale = getElementVal("Female");
    var Email = getElementVal("email");
    var List = getElementVal("list");

    
    saveMessages(firstName, lastName, mobileNumber, Address, isGenderMale, isGenderFemale, Email, List);

    console.log(firstName, lastName, mobileNumber, Address, isGenderMale, isGenderFemale, Email, List);
}

const saveMessages = (firstName, lastName, mobileNumber, Address, isGenderMale, isGenderFemale, Email, List) => {
    var newProjectForm = projectFormDB.push();

    newProjectForm.set({
        firstName : firstName,
        lastName : lastName,
        mobileNumber : mobileNumber,
        Address : Address,
        isGenderMale : isGenderMale,
        isGenderFemale : isGenderFemale,
        Email : Email,
        List : List,
    })
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;
};
