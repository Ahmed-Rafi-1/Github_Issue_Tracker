document.getElementById("loginBtn").addEventListener("click", () => {
    // get the username
    const username = document.getElementById("loginUsername").value
    
    //get the password
    const password = document.getElementById("loginPassword").value

    if (username == "admin" && password == "admin123")
    {
        window.location.href = "homepage.html"
    }
    else {
        alert("Invalid username or Password!")
    }
})