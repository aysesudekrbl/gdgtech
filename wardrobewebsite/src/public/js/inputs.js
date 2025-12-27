function passwordfunction() {
    var x = document.getElementById("passwordInput");
    var icon = document.getElementById("passwordicon");
    if (x.type === "password") {
        x.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        x.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}