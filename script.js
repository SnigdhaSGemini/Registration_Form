const p1 = document.getElementById("pass1");
const p2 = document.getElementById("pass2");
  const firstn= document.getElementById("fname");
  const lastn=document.getElementById("lname");
  const regi=document.getElementById("reg");
  const no=document.getElementById("no");
//   const hide=document.getElementsByClassName("hidden");
  const sel=document.getElementById("slct");
  const email=document.getElementById("email");
  const answ=document.getElementById("ans");
  const body = document.getElementById("body");


  var istable = false;

regi.addEventListener("click",(e)=>{
  
    e.preventDefault();
  
    if(firstn.value.trim()==="" ){
        DisplayError(firstn,"Enter First Name");
    // alert("Enter First Name");
 }
    else if(lastn.value.trim()==="" ){
        DisplayError(lastn,"Enter Last Name");
    /*alert("Enter Last Name");*/
    }
    else  if(p1.value.trim()===""){ DisplayError(p1,"Enter Password");
    /*alert("Enter Password");*/
     }
    else if( p2.value.trim()===""){ DisplayError(p2,"Enter Confirm Password");
    /*alert("Confirm Password");*/
    }
    else if(email.value.trim()===""){ DisplayError(email,"Enter Email");
    /*alert("Enter Email");*/
    }
    else if(answ.value.trim()===""){DisplayError(answ,"Provide a Security Question & Answer");
    /*alert("Provide a Security Answer");*/
    }
   else{
    const vfirst =/^[A-Za-z\s]+$/;
     
    var check= firstn.value.match(vfirst);
     if(check==null){
        DisplayError(firstn,"Invalid First Name");
        /*alert("Invalid First Name");*/}
    else{
        const vlast =/^[A-Za-z\s]+$/;
    var check=lastn.value.match(vlast);
      if(check==null){
        DisplayError(lastn,"Invalid Last Name");
    /*alert("Invalid Last Name");*/}
else{
   const vemail =/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    var check= email.value.match(vemail); 
  if(check==null){
    DisplayError(email,"Invalid Email");
/*alert("Invalid Email");*/}
 else{
    const numcheck= /^[6-9]\d{9}$/;
    var num = no.value.match(numcheck);
    // if(!no.value){ alert("Error!! Please Enter Valid Number.");}
    if (num==null && no.value) {
        DisplayError(no,"Enter Valid Number");
        // alert("Error!! Please Enter Valid Number.");
    }
    else{
        if(p1.value!==p2.value){
          DisplayError(p1,"Password Mismatched");
        DisplayError(p2,"Password Mismatched");
    /*alert("Error!! Password Confirmation Mismatched!");*/} 
        else{
            alert("Congratulations! All Your Data is Entered Successfully!!");
          
          
            const gen = getGender();
          
        console.log("First Name : "+firstn.value+", Last Name : "+lastn.value+" ,"+
        "Password : "+p1.value+" ,"+"Phone No. : "+no.value
        +" ,"+"Email Id : "+email.value+", Answer : "+answ.value+" , Gender : "+gen);
          
           const store={
            fname: firstn.value,
            lname: lastn.value,
            pass : p1.value,
            num : no.value,
            mail: email.value,
            gender : gen
        }
           
        const localstorage = JSON.stringify(store);
          
         fname=localStorage.getItem('fname',firstn.value);
         lname=localStorage.getItem('lname',lastn.value);
        num=localStorage.getItem('num',no.value);
        mail=localStorage.getItem('mail',email.value);
        gender=localStorage.getItem('gender',gen);
        pass = localStorage.getItem('password',p1.value);
          
        // console.log(screen.width)
          
       table(fname, lname ,num, mail,pass,gender);
    
}
}
}
}
}
}
});
function table(fname,lname, num, mail,pass,gender){
  
    // console.log(istable);
    if(istable===false){
      istable=true;
    const th = ["First Name", "Last Name" , "Phone No." , "Email Id","Password", "Gender"];
      
    var tablediv = document.createElement("div");
    tablediv.className="table-div";
      
    var table= document.createElement("table");
    table.className="table-class";
    // table.className="register-div";
      
    var trhead = document.createElement("tr");
    trhead.className="tr-class";
      
    th.forEach((head)=>{
      
        var th = document.createElement("th");
      
        th.className="th-class";
        th.innerText=head;
      
        trhead.appendChild(th);
      
        th.style.width="20vw";
        th.style.border="1px solid black";
        th.style.padding="1%";
        // th.style.display="block";
        th.style.overflow="auto";
    });
      
    table.appendChild(trhead);
      
    trhead = document.createElement("tr");
    trhead.className="tr-class";
      
    const td = [fname, lname, num, mail,pass,gender];
      
    td.forEach((data)=>{
      
        var td = document.createElement("td");
        td.className="td-class";
      
        if(data===""){
            td.innerText="N.A.";
        }
        else{
            td.innerText=data;
        }
        trhead.appendChild(td);
        td.style.width="20vw";
        td.style.border="1px solid black";
        td.style.padding="1%";
        // td.style.display="block";
        td.style.overflow="auto";
    });
      
    table.appendChild(trhead);
      
    console.log(fname+" , "+lname+" , "+num+" , "+mail+" , "+pass+" , "+gender);
      
    // trhead.style.display="flex";
    // trhead.style.flexWrap="wrap";
      
    // table.style.marginLeft="5%";
    // table.style.marginRight="5%";
      
    tablediv.appendChild(table);
      
    // table.style.display="flex";
    // table.style.flexWrap="wrap";
      
    table.style.color="grey";
      
    tablediv.style.justifyContent="center";
    tablediv.style.margin="5%";
    tablediv.style.overflow="auto";
      
    body.appendChild(tablediv);
}
else{
  table = document.querySelector("table");
  
tablediv = document.querySelector(".table-div");
  
    trhead = document.createElement("tr");
    trhead.className="tr-class";
  
    const td = [fname, lname, num, mail,pass,gender];
  
    td.forEach((data)=>{
      
        var td = document.createElement("td");
        td.className="td-class";
      
        if(data===""){
            td.innerText="N.A.";
        }
        else{
            td.innerText=data;
        }
        trhead.appendChild(td);
      
        td.style.width="20vw";
        td.style.border="1px solid black";
        td.style.padding="1%";
        // td.style.display="block";
        td.style.overflow="auto";
    });
  
    table.appendChild(trhead);
  
    console.log(fname+" , "+lname+" , "+num+" , "+mail+" , "+pass+" , "+gender);
  
    tablediv.style.overflow="auto";
}

    
}
function DisplayError(insertafter,alertmsg){
  
    const span = document.createElement("span");
  
        insertafter.style.border="1px solid red";
  
        span.style.fontSize="12px";
        span.innerText=alertmsg;
        span.style.color="red";
        span.style.float="left";
  
        insertafter.parentNode.insertBefore(span, insertafter.nextSibling);
  
        setTimeout(()=>{
            insertafter.style.border="none";
            span.remove();
        },1000);
}
function getGender(){
    const check = document.getElementsByClassName("form-check-input");
  
    // const getval = document.getElementsByClassName("form-check-label");
    // var val=getval[0].value;
  
   if(check[0].checked) {return "Male";}
   else {return "Female";}
}


