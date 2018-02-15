import React, { Component } from 'react'

import Auth from './../Api/auth.js'

import LoginView from './../Views/Login.js'
import MyRouter from './MyRouter'

class Authenticator extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    requireAuth () {
        return !Auth.loggedIn()
    }

    render () {
        if(this.requireAuth()) {
            return (<LoginView/>)
        } else {
            return (
                <MyRouter/>
            )
        }
    }
}

export default Authenticator