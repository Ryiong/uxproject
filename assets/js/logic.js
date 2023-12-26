// Display user infor when no infor
const inforUser = document.getElementById('js-infor-user');
if (inforUser.innerText == '') {
    inforUser.style.display = "none";
    console.log("delete infor user");
}

// Display logout
const userBtn = document.querySelector('.link-user')
const logoutBtn = document.querySelector('.logout-area')
const fullWeb = document.querySelector('.full-web')
function displayLogout(){
    logoutBtn.style.display = "flex";
    console.log('displayLogout')
}
function hideLogout(){
    if (logoutBtn.style.display == "flex") {logoutBtn.style.display = null; console.log('hideLogout')
    logoutBtn.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}
}
userBtn.addEventListener('click', displayLogout)
userBtn.addEventListener('click', function (event) {
    event.stopPropagation()
})
fullWeb.addEventListener('click', hideLogout)


const tableItems = document.getElementsByClassName('mgn-content')
for (let tableItem of tableItems) {
    if (tableItem.innerText === 'F') {
        tableItem.style.color = 'red'; tableItem.style.fontWeight = 'bold'
    }}
// Đăng xuất
const logOut = document.querySelector('.logout-area')
logOut.addEventListener('click', function() {
    location.href='index.html'
})

if (location.href == 'http://localhost:8080/login?error') {document.getElementById('titlelogin').innerHTML = 'Lỗi'}