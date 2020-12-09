const loginCheck = (username, password) => {
    if (username === '1001' && password === 'pass') {
        return true
    } else {
        return false
    }

}
module.exports = { loginCheck }