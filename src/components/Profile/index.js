import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <center>
                        <img style={{
                            width: '50px'
                        }} src={data.picture} />
                        <h2> Welcome {data.name}</h2>
                        Email  : {data.email} <br />
                        UserID : {data.userID}
                    </center>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.login.data
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)