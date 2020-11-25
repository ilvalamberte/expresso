import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }
    handleChange(event) {
        const { name, value, } = event.target
        this.setState({
            [name]: value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('auth/signup', user)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        // console.log(this.props.isAuth.auth)
        return (
            <div className="page-content">
                <h1>Signup</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username: </label>
                        <input type="text"
                            required
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text"
                            required
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text"
                            required
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </div>


                    <input className="submit-button" type="submit" value="Create User" />

                </form>
            </div>
        );

    }
}

