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
    else{
        document.getElementById('fnameerror').innerText='';
    }
    if(lastname.trim()===''){
        document.getElementById('lnameerror').innerText='Please Enter the valid name';
        return;
    }
    else{
        document.getElementById('fnameerror').innerText='';
    }
    if(email.trim()===''){
        document.getElementById('mailerror').innerText='Please Enter the valid email';
        return;
    }
    else{
        document.getElementById('fnameerror').innerText='';
    }
    if(mobile.trim()===''){
        document.getElementById('mobilenumbererror').innerText='Please Enter the valid mobile number';
        return;
    }
    else{
        document.getElementById('fnameerror').innerText='';
    }
    if(address.trim()===''){
        document.getElementById('addresserror').innerText='Please Enter the valid address';
        return;
    }
    else{
        document.getElementById('fnameerror').innerText='';
    }
    if(summary.trim()===''){
        document.getElementById('summaryerror').innerText='Please Enter the valid summary';
        return;
    }
    else{
        document.getElementById('fnameerror').innerText='';
    }

    alert("All data's are Submitted successfully. Our team will contact you soon!");
    setTimeout(function(){
        location.reload();

    },100);

}