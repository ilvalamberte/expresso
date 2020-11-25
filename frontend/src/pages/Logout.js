import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
    componentDidMount = () => {
        axios.get("auth/logout").then(response =>
            this.setState({ data: response.data })
        );
    }

    render() {
        // console.log(this.props.isAuth.auth)
        return (
            <div>
                <h1>You are logged out</h1>
            </div>
        );

    }
}

