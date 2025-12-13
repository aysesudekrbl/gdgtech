function passwordfunction(){
    var button = document.getElementById("passwordinput");
    var icon = document.getElementById("passwordicon")
    if (button.type === "password"){
        button.type = "text";
        icon.className = "fa-solid fa-eye-slash";
    }
    else{
        button.type = "password";
        icon.className = "fa-solid fa-eye";
    }
}