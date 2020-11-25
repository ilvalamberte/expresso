import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
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
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user);
        axios.post('auth/login', user)
            .then(res => console.log(res.data));
        window.location = '/home';
    }

    render() {
        // console.log(this.props.isAuth.auth)
        return (
            <div className="page-content">
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
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
                    <input className="submit-button" type="submit" value="Login" />

                </form>
            </div>
        );

    }
}

