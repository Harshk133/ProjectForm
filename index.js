console.log("Script is running in background!!");
var mobile = /^\d{10}$/;

function validate(){
    if(document.myForm.firstName.value == null || document.myForm.firstName.value < 3){
        alert("Please Provide A Valid Name!");
        document.myForm.firstName.focus();
        return false;
    }

    if(document.myForm.lastName.value == null || document.myForm.lastName.value.length < 3){
        alert("Please Give A Aalid Sirname...!");
        document.myForm.lastName.focus();
        return false;
    }

    if(document.myForm.mobileNumber.value == mobile || document.myForm.mobileNumber.value.length < 10){
        alert("Please Give Phone Number in Correct Format!");
        document.myForm.lastName.focus();
        return false;
    }

    if(document.myForm.address.value == null){
        alert("Please Fill Up this Field!");
        document.myForm.lastName.focus();
        return false;
    }

    if(document.getElementById("Male").checked == false){
        alert("Please Fill Up this Radio Button!");
        document.myForm.lastName.focus();
        return false;
    }

    let emailId = document.myForm.email.value;
    atpos = emailId.indexOf("@");
    dotpos = emailId.lastIndexOf(".");
    if(atpos < 1 || (dotpos - atpos < 2)){
        alert("Please Enter Correct Email ID!!");
        document.myForm.email.focus();
        return false;
    }

    if(document.myForm.list.value == "-1"){
        alert("Please, provide Your List item!");
        return false;
    }
    return(true);
}

