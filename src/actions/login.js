export const login = payload => ({
    type: 'LOGIN',
    payload
})

export const logout = () => ({
    type: 'LOGOUT',
})

export const loginFacebook = payload => ({
    type: 'LOGIN_FACEBOOK',
    payload
})