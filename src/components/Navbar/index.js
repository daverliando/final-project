import React, { Component } from 'react'
import css from './Navbar.module.css'
import { connect } from 'react-redux'
import {
    logout
} from '../../actions/login.js'
// import { BrowserRouter as Router, Link, Switch, Route } from "@reach/router"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Profile from '../Profile'
import Table from '../Table'
import Home from '../Home'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        const { data } = this.props
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to='/' className={css.active}>HOME</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                        <li><Link to="crud">CRUD</Link></li>
                        <li style={{ float: 'right' }} onClick={() => this.props.logout()}><a href="">Logout</a></li>
                    </ul>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/crud'>
                            <Table />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)