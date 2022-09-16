let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let btn = document.getElementById("btn");

btn.addEventListener('click', function (e){
    e.preventDefault();
    
    if(password1.value != password2.value){
        swal("Abe chutiye", "password match nahi ho raha hai")
    }
    else if(password1.value === "" && password2.value === ""){
        swal("Chutiye","Pehle kuch bhar to le")
    }
    else if(password1.value.length < 8 && password2.value.length < 8){
        swal("Password 8 character se jiyada hona cahiye be")
    }
    else{
        swal({
            title: "Good job!",
            text: "Abhi thik bhare ho",
            icon: "success",
            button: "Okay",
          });
        password1.value = "";
        password2.value = "";
    }
})