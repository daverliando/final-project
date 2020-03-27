import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import {
    loginFacebook,
    logout
} from '../../actions/login.js'

class Facebook extends Component {
    responseFacebook = response => {
        this.props.loginFacebook({
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {
        return (
            <div>
                <FacebookLogin
                appId="700830914053847"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin
})

const mapDispatchToProps = dispatch => ({
    loginFacebook: payload => dispatch(loginFacebook(payload)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
