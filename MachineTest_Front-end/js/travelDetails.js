document.addEventListener('DOMContentLoaded', function () {
    const logout = document.getElementById('btnLogout')
      //to logout
      logout.addEventListener('click', () => {
        window.location.href = "login.html";
    })
})