import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div className="page-content">
                {this.props.isAuth.auth ? <h1>Home page will be here</h1> : <h1>Home page will be here</h1>}
            </div>
        );

    }
}

