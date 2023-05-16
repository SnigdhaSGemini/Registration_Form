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
    const numcheck= /^(\([7-9]{1}\) |[0-9]{9})/;
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

});