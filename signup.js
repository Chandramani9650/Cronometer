
let input1 = document.querySelectorAll("#users_detail>div>input")
let check = document.querySelectorAll("#check_box>div>div>input")

let form = document.querySelectorAll("form")
let signup = document.getElementById("signup")
let input = document.querySelectorAll("input")
let sub =  document.getElementById("sub")
console.log(input)
let cd = 0
console.log(form)
let user_history = []
let obje = {}
function malepatt(radio){
  obje.gender = radio.value
 
}
function femalepatt(radio){
    obje.gender = radio.value
   
}



// ..................................................................
check[0].addEventListener('click', function(){
   if(cd==0){
    check[1].checked=true
    check[2].checked=true
    check[3].checked=true
   
    cd = 1
   }else if(cd==1){
    check[1].checked=false
    check[2].checked=false
    check[3].checked=false
    cd = 0
   
   }
})

signup.addEventListener('click',function(){
    let obj = {}
    obj.name = input1[0].value
    obj.email = input1[1].value
    obj.password = input1[2].value
    obj.confirm_password = input1[3].value
    
    if(obj.password!==obj.confirm_password){
        alert("password is mismatched!")
       
    }else if(obj.name =="" || obj.email=="" || obj.password==""){

        alert("enter your details")
        
    }else{
        alert("Sign up successful")
        window.location.href = "login.html";
    }
    JSON.parse(localStorage.setItem("customer_detail",JSON.stringify(obj)))
    
})