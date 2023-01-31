let homePage = document.querySelector('.homePage')
let registerPage = document.querySelector('.registerPage')
let loginPage = document.querySelector('.loginPage')
let goLogin = document.querySelector('#goLogin')
let goSignUp = document.querySelector('#goSignUp')

let r_name = document.querySelector('#r_name')
let r_email = document.querySelector('#r_email')
let r_pass = document.querySelector('#r_pass')
let r_r_pass = document.querySelector('#r_r_pass')
let regBtn = document.querySelector('#regBtn')
let r_error = document.querySelector('#r_error')

let l_email = document.querySelector('#l_email')
let l_pass = document.querySelector('#l_pass')
let logBtn = document.querySelector('#logBtn')
let log_error = document.querySelector('#log_error')
goLogin.addEventListener('click', () => {
    homePage.style.display = 'none';
    registerPage.style.display = 'none';
    loginPage.style.display = 'flex';
})
goSignUp.addEventListener('click', () => {
    homePage.style.display = 'none';
    loginPage.style.display = 'none';
    registerPage.style.display = 'flex';
})
let users = [];
if (localStorage.getItem('sinemaUsers')) {
    users = JSON.parse(localStorage.getItem('sinemaUsers'))
}

regBtn.addEventListener('click', () => {
    r_error.style.color = 'red';
    if (r_name.value != '' && r_email.value != "" && r_pass.value != '' && r_r_pass.value != '') {
        if (r_pass.value != r_r_pass.value) {
            r_error.innerHTML = 'Sifreler eyni deyil'
        } else {
            r_error.innerHTML = '';
            let checkUser = users.find(e => e.email == r_email.value);
            if (checkUser) {
                r_error.innerHTML = 'Bu istifadeci mopvcuddur'
            } else {
                let newUser = {
                    id: users.length + 1,
                    name: r_name.value,
                    email: r_email.value,
                    password: r_pass.value,
                    againPassword: r_r_pass.value
                }
                users.push(newUser);
                localStorage.setItem('sinemaUsers', JSON.stringify(users))
                homePage.style.display = 'none';
                registerPage.style.display = 'none';
                loginPage.style.display = 'flex';
            }
        }
    } else {
        r_error.innerHTML = 'Bosluqlari doldurun'
    }
})
logBtn.addEventListener('click', () => {
    log_error.style.color = 'red';
    if (l_email.value != '' && l_pass.value != '') {
        let checkUser = users.find(e => e.email == l_email.value)
        if (!checkUser) {
            log_error.innerHTML = 'bu istifadeci movcud deyil'
        } else if (checkUser.password != l_pass.value) {
            log_error.innerHTML = 'sifre duzgun deyil'
        } else {
            log_error.innerHTML = ""
            window.location = 'index.html'
        }
    } else {
        log_error.innerHTML = 'bosluqlari doldurun'
    }
})