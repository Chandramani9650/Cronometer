
let email = document.getElementById("email")
let pass = document.getElementById("password")
let btn = document.getElementById("btn")
let detailUser = JSON.parse(localStorage.getItem("customer_detail"))
btn.addEventListener("click", function(){

     console.log(detailUser)
    if(email.value==detailUser.email && pass.value==detailUser.password){
        alert("login sucessful")
        localStorage.setItem("isAuth","Authenticated")
        window.location.href = 'Blog.html'
        
    }else{
      
        alert("email or password incorrect")
    }
})