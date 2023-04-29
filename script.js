var name1 =document.getElementById("name");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var confirmpass=document.getElementById("confirmpass");
 if(localStorage.getItem("name") && localStorage.getItem("email")&& localStorage.getItem("password")){
document.getElementById("ffoorrmm").style.display="none"
 
document.querySelector(".header").innerHTML=` <header>   <div>
<h2>Header</h2>
<div class="rightside">
    <p>Signup</p>
    <p>Profile</p>
</div>
</div>
</header>
<hr>
<div class="detailbody">
    <h1>Profile</h1>
    <span>Full Name :  ${localStorage.getItem("name")}</span>
    <span>Email :  ${localStorage.getItem("email")}</span>
    <span>Password :  ${localStorage.getItem("password")}</span>
    <button id="button1">Logout</button>
 </div> `
 

 }
 else{
 document.getElementById("button").addEventListener("click",(e)=>{
     
    let nameVal=name1.value;
    let emailVal=email.value;
    let passVal=pass.value;
    let confirmpassVal=confirmpass.value;
  if(nameVal=="" || emailVal=="" || passVal=="" || confirmpassVal==""){
      document.getElementById("message").innerHTML="Error: All the fields are mandatory";
      document.getElementById("message").style.color="red";  
      document.getElementById("message").style.fontSize="20px";
      console.log(nameVal)
  }
  else{
    if(passVal!=confirmpassVal){
        document.getElementById("message").innerHTML="Password and Comfirm Password does not match!";
        document.getElementById("message").style.color="blue";  
        document.getElementById("message").style.fontSize="20px";   
    }
    else{
      localStorage.setItem("name",nameVal);
      localStorage.setItem("email", emailVal)
      localStorage.setItem("password", passVal);
      document.getElementById("message").innerHTML="Successfully Signed Up!";
      document.getElementById("message").style.color="green";  
      document.getElementById("message").style.fontSize="20px"; 
      document.getElementById("loading").style.display="flex"  
    setTimeout(() => {
      location.reload()  
    }, 2000);
   
   
    }
  }
 })
}
document.getElementById("button1").addEventListener("click", ()=>{
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.reload()
})
