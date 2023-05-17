const p1 = document.getElementById("pass1");
const p2 = document.getElementById("pass2");
  const firstn= document.getElementById("fname");
  const lastn=document.getElementById("lname");
  const regi=document.getElementById("reg");
  const no=document.getElementById("no");
  const hide=document.getElementsByClassName("hidden");
  const sel=document.getElementById("slct");
  const email=document.getElementById("email");
  const answ=document.getElementById("ans");
  
regi.addEventListener("click",(e)=>{
    e.preventDefault();
    if(firstn.value==="" ){alert("Enter First Name");}else if(firstn.value!==""){const vfirst =/^[A-Za-z\s]+$/;
    var check= firstn.value.match(vfirst); if(check==null){alert("Invalid First Name");}}
    if(lastn.value==="" ){alert("Enter Last Name");}else if(lastn.value!==""){const vlast =/^[A-Za-z\s]+$/;
    var check=lastn.value.match(vlast); if(check==null){alert("Invalid Last Name");}}
     if(p1.value===""){alert("Enter Password");}
    if( p2.value===""){alert("Confirm Password");}
    if(email.value===""){alert("Enter Email");}else if(email.value!==""){const vemail =/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    var check= email.value.match(vemail); if(check==null){alert("Invalid Email");}}
    if(answ.value===""){alert("Provide a Security Answer");}
   else{
    const numcheck= /^[6-9]\d{9}$/;
    var num = no.value.match(numcheck);
    // if(!no.value){ alert("Error!! Please Enter Valid Number.");}
    if (num==null && no.value) {
        alert("Error!! Please Enter Valid Number.");
    }
    else{
        if(p1.value!==p2.value){alert("Error!! Password Confirmation Mismatched!");} 
        else{
            alert("Congratulations! All Your Data is Entered Successfully!!");
        console.log("First Name : "+firstn.value+", Last Name : "+lastn.value+" ,"+"Password : "+p1.value+" ,"+"Phone No. : "+no.value
        +" ,"+"Email Id : "+email.value+", Answer : "+answ.value);}
    }

   }
});
