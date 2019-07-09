const minEmailLength = 6;
const minPasswordLength = 6
let email = prompt('Enter your email');
if (email === null || email === '') {
    alert('Canceled');
}
if (email.length < minEmailLength) {
    alert("I don't know any emails having name length less than 6 symbols");
}

if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter your password');
    if (password === null || password === '') {
        alert('Canceled');
    }
    if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        let changePassword = confirm('Do you want to change your password?')
        if (changePassword) {
            let oldPassword = prompt('Enter your old password');
            if (email === 'user@gmail.com' && oldPassword === 'UserPass' ||
                email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                let newPassword = prompt('Enter your new password');
                if (newPassword.length < minPasswordLength) {
                    alert("It's too short. Sorry");
                } else {
                    let repeatPassword = prompt('Enter your new password again');
                    if (newPassword === repeatPassword) {
                        alert('You have successfully changed your password');
                    }else{
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    }
} else {
    alert("I don't know you");
}
 