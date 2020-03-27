import React, { Component } from 'react'
import css from './Login.module.css'
import Facebook from '../../components/Facebook'
import { connect } from 'react-redux'
import {
    login
} from '../../actions/login.js'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className={css.container}>
                <h2>Login Form</h2>
                <label htmlFor="email"><b>Email </b></label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="coba@example.com"
                    required
                />
                <label htmlFor="password"><b>Password</b> </label>
                <input
                    id="height"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    placeholder="toor"
                    required
                />
                <center>
                    <div className={css.tooltip}>
                        <img src='https://previews.123rf.com/images/outchill/outchill1801/outchill180109542/94476663-hint-blue-text-round-stamp-with-zig-zag-border-and-vintage-texture-.jpg' width='20' />
                        <span className={css.tooltiptext}>
                            email1 : dave@example.com<br />
                            pass1  : toor<br />
                            email2 : nopal@example.com<br />
                            pass2  : toor1<br />
                    </span>
                    </div>
                </center>
                <button onClick={() => this.props.login({ email, password })}>Login</button>
                <Facebook />
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)