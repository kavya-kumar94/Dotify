import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
        this.guestLoginHelper = this.guestLoginHelper.bind(this)
    }

   
    componentDidMount() {
        document.title = this.props.formType;
    }

    componentWillUnmount() {
        this.props.receiveErrors([]);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoUser() {
        this.props.loginDemo();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    guestLogin() {
        const splitUser = 'demouser'.split('');
        const splitPassword = '123456'.split('');
        const enter = document.getElementById('submit');
        this.setState({username: '', password: ''}) , () => {
            this.guestLoginHelper(splitUser, splitPassword, enter)
        }
    }

    guestLoginHelper(splitUser, splitPassword, enter) {
        if (splitUser.length > 0) {
            this.setState({username: this.state.username + splitUser.shift()}, () => {
                window.setTimeout(() => 
                    this.guestLoginHelper(splitUser, splitPassword, enter), 65)
            }
            );
        } else if (splitPassword.length > 0) {
            this.setState({ password: this.state.password + splitPassword.shift() }, () => {
                window.setTimeout(() =>
                    this.guestLoginHelper(splitUser, splitPassword, enter), 65)
            }
            );
        } else {
            enter.click();
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let { formType, processForm, loginDemo } = this.props;
        const emailInput = formType === 'signup' ? (<div> <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="email" />  </div>) : null
        return (
            <div className="session-page">
                <div>
                    <p>Dotify</p>
                </div>

                <div className="demoUser">
                    {formType ==='login' ? <div>
                        <button id="demo" onClick={this.guestLogin}>Demo User</button>
                        <br></br>
                        <p className="or">or</p>
                    </div> : null}
                </div>

                <div className="signUp">
                    {formType==='signup' ? 'Sign up for an account!' : 'Log in with your username'}
                </div>

                    {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>

                        <input type="text"
                                id="username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="username"
                            />

                        {emailInput}

                        <input type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="password"
                            />

                        <input id="session-submit" type="submit" value={formType === 'login' ? 'Log In' : 'Sign Up'} />
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);