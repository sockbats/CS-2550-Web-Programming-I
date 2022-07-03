function isStrongPassword(password) {
    console.log(password.indexOf('password'))
    if ((password.length < 8) || (password == password.toLowerCase()) || password.indexOf('password') >= 0) {
        return false
    }
    else {
        return true
    }
}
