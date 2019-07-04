import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
        let { formType } = this.props;
        const emailInput = formType === 'signup' ? 
        (<div> <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email" />  </div>)
         : null

        return (
            <div className="session-page">

                <div className="header2">
                    <span>
                        <Link to="/"><img src="/assets/black_spotify.png" /></Link>
                    </span>
                    <Link className="session-header" to="/">Dotify</Link>
                </div>


                <div className="session-content">

                <div className="demo-user">
                    {formType ==='login' ? <div>
                    </div> : null}
                </div>

                <div className="sign-up">
                        {formType === 'signup' ? 
                         <button className="FB">SIGN UP WITH FACEBOOK</button> 
                        : 'To continue, log in to Dotify.'}
                </div>

                    {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>

                        <input type="text"
                                id="username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                                />
                        {emailInput}
                        <input type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                />
                        <br/>
                        <input id="session-submit" type="submit" value={formType === 'login' ? 'Log In' : 'Sign Up'} />
                </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);