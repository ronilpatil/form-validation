function validation(){

    var fname=document.Registration.fname;
    if(fname.value==""){
        alert("Enter first name")
        fname.focus()
        return false;
    }

    var lname=document.Registration.lname;
    if(lname.value==""){
        alert("Enter last name")
        lname.focus()
        return false;
    }

    var age=document.Registration.age;
    if(age.value==""){
        alert("Enter age")
        age.focus()
        return false;
    }
    else if(parseInt(age.value)<0){
        alert("Age cannot be negative.\nPlease enter a valid age.")
        age.focus()
        return false;
    }

    var checked=document.querySelector('input[name="gender"]:checked')
    if(checked==null){
        alert("Select a gender")
        return false;
    }

    alert("Form submitted successfully")
    return true;
}