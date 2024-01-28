function submit(){
    var firstname=document.getElementById('fname').value;
    var lastname=document.getElementById('lname').value;
    var email=document.getElementById('mail').value;
    var mobile=document.getElementById('mobilnumber').value;
    var address=document.getElementById('address').value;
    var summary=document.getElementById('summary').value;

    if(firstname.trim()===''){
        document.getElementById('fnameerror').innerText='Please Enter the valid name';
        return;
    }
    if(lastname.trim()===''){
        document.getElementById('lnameerror').innerText='Please Enter the valid name';
        return;
    }
    if(email.trim()===''){
        document.getElementById('mailerror').innerText='Please Enter the valid email';
        return;
    }
    if(mobile.trim()===''){
        document.getElementById('mobilenumbererror').innerText='Please Enter the valid mobile number';
        return;
    }
    if(address.trim()===''){
        document.getElementById('addresserror').innerText='Please Enter the valid address';
        return;
    }
    if(summary.trim()===''){
        document.getElementById('summaryerror').innerText='Please Enter the valid summary';
        return;
    }

    alert("All data's are Submitted successfully. Our team will contact you soon!");

}