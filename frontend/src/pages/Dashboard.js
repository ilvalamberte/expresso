import React, { Component } from 'react';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.isAuth.auth)
        return (
            <div className="page-content">
                {this.props.isAuth.auth ? <h1>Hey you have access to this page</h1> : <h1>Dashboard is avaliable only for logged in users</h1>}
            </div>
        );

    }
}

