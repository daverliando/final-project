import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let content = (<Login />)

    if (this.props.isLogin) {
      content = (<Navbar />)
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)