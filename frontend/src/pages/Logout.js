import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
    componentDidMount = () => {
        axios.get("auth/logout").then(response =>
            this.setState({ data: response.data })
        );
        window.location = '/';
    }

    render() {
        // console.log(this.props.isAuth.auth)
        return (
            <div className="page-content">
                <h1>You are logged out</h1>
            </div>
        );

    }
}

