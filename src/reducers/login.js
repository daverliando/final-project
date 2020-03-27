const initialState = {
    isLogin: false,
    data: {
        userID: '',
        name: '',
        email: '',
        picture: ''
    },
    list: [
        {
            userID: 'Daverliando',
            email: 'dave@example.com',
            name: 'Devid Erliando Bardin',
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            password: 'toor'
        },
        {
            userID: 'Si Nopal',
            email: 'nopal@example.com',
            name: 'Nopal uhuy',
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            password: 'toor1'
        }
    ],
    errorMessage: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            let log = false;
            let d;
            state.list.map(x => {
                if (action.payload.email === x.email && action.payload.password === x.password) {
                    log = true;
                    const { name, email, userID, picture } = x
                    d = { name, email, userID, picture };
                }
            })

            return {
                ...state,
                data: { ...d },
                isLogin: log
            }
        }
        case 'LOGIN_FACEBOOK':
            return {
                ...state,
                isLogin: true,
                data: { ...action.payload }
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogin: false,
                data: {
                    userID: '',
                    name: '',
                    email: '',
                    picture: ''
                }
            }
        default:
            return state
    }
}

export default login