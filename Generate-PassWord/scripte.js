const password = document.getElementById("password")
const passwords = [ "HJraatv878#", "HJUYGv888#", "IUOHOAH36$%", "AIUWSHASKD7^~", "XNCKNDV000",
    "QWERTY!@34", "ZXCVBnm@12", "LKAJDH823!@", "1q2w3e4r5t%", "Pa$$w0rd987#",
    "MNBVCXZ12#$", "ASDFGHJKL90!", "StrongP@ss123", "Secure!9876%", "UltraP@$$4567",
    "H@ckM3ifYouCan!", "Xyz123!@#", "RandomKey$785", "SafePass@2025", "TrustMe#99*"];
const icon = document.querySelector(".fa-solid.fa-copy");
let i = 0;
function GeneratePassword(){
    password.value = passwords[i];
    i = (i + 1) % passwords.length;
}
function CopyPassword(){
    if (password && password.value) {
        navigator.clipboard.writeText(password.value)
            .then(() => alert("Password has copied !"))
            .catch(err => console.error("Failed to copy password:", err));
    } else {
        alert("No password to copy!");
    }
}
icon.addEventListener("click",CopyPassword)