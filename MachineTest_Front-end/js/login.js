//user class with username,password and role to indicate whether admin or employee
class User {
    constructor(userName, password, role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }
}

// array with User objects
const users = [
    new User("Liya", "Liya@2022", "admin"),
    new User("Anu", "Anu@2023", "employee")
];

document.addEventListener('DOMContentLoaded', function () {
    let password = document.getElementById('password');
    var userName = document.getElementById('txtUserName')
    let button = document.getElementById('btnSubmit');
    const form = document.getElementById('frmLogin');
    let error = document.getElementById('errorMsg')
    form.addEventListener('submit', function (event) {
         //prevent form submission
         event.preventDefault();
        console.log(users);
        
          // Find user by username
          const user = users.find(u => u.userName === userName.value);
        console.log(user);
          if (user && user.password === password.value) {
              // to check admin or employee
              if (user.role === "admin") {
                  // Redirect to admin page
                  window.location.href = "adminview.html";
              } else if (user.role === "employee") {
                  // Redirect to employee page
                  window.location.href = "requestform.html";
              }
          } else {
              error.textContent = "Invalid credentials. Please try again.";
          }
    })
    var userFlag;
    var pswrdFlag;
    
  //check whether the username is entered
    userName.addEventListener("input", () => {
         if (userName.value.length > 0) {
              userFlag = 1
         }
         else {
              userFlag = 0;
         }
         setButton()

    })

    //check whether the password is entered
    password.addEventListener("input", () => {
         if (password.value.length > 0) {
              pswrdFlag = 1
         }
         else {
              pswrdFlag = 0
         }
         setButton()
    })

    //enable button when user entered both username and password
    function setButton() {
         if (userFlag == 1 && pswrdFlag == 1) {
              button.disabled = false
         }
         else {
              button.disabled = true;
         }
    }


})
