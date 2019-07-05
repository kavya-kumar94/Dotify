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
        // this.guestLogin = this.guestLogin.bind(this);
        // this.guestLoginHelper = this.guestLoginHelper.bind(this)
    }

   
    componentDidMount() {
        document.title = this.props.formType;
        this.props.clearErrors();
    }
    
    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (this.props.formType !== prevProps.formType) {
    //         this.props.clearErrors();
    //     } 
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoUser(e) {
        e.preventDefault();
        this.state = { username: 'demouser', password: '123456'};
        const demouser = Object.assign({}, this.state);
        this.props.processForm(demouser);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    // guestLogin() {
    //     const splitUser = 'demouser'.split('');
    //     const splitPassword = '123456'.split('');
    //     const enter = document.getElementById('submit');
    //     this.setState({username: '', password: ''}) , () => {
    //         this.guestLoginHelper(splitUser, splitPassword, enter)
    //     }
    // }

    // guestLoginHelper(splitUser, splitPassword, enter) {
    //     if (splitUser.length > 0) {
    //         this.setState({username: this.state.username + splitUser.shift()}, () => {
    //             window.setTimeout(() => 
    //                 this.guestLoginHelper(splitUser, splitPassword, enter), 65)
    //         }
    //         );
    //     } else if (splitPassword.length > 0) {
    //         this.setState({ password: this.state.password + splitPassword.shift() }, () => {
    //             window.setTimeout(() =>
    //                 this.guestLoginHelper(splitUser, splitPassword, enter), 65)
    //         }
    //         );
    //     } else {
    //         enter.click();
    //     }
    // }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // errorReset() {
    //     this.props.clearErrors();
    //     this.props.history.push("/signup");
    // }

    render() {
        let { formType, errors } = this.props;

        let invalidUsername = null;
        let invalidPassword = null;
        let invalidEmail = null;
        let classUsername = 'form-control';
        let classPassword = 'form-control';
        let classEmail = 'form-control';

        const invalidUsernamePassword = errors[0] && errors[0].indexOf('Incorrect') != -1 ? <div className="alert alert-warning">{errors[0]}</div> : null;

        if (errors.includes('username')) {
            invalidUsername = <div>Please enter your Dotify username.</div>
            // classUsername = 'form-control invalid';
        } else {
            invalidUsername = null;
            // classUsername = 'form-control';
        }

        if (errors.includes('password')) {
            invalidPassword = <div>Please enter your password.</div>
            // classPassword = 'form-control invalid';
        } else {
            invalidPassword = null;
            // classPassword = 'form-control';
        }

        if (errors.includes('email') &&  formType === 'signup') {
            invalidEmail = <div>Please enter your email.</div>
            // classEmail = 'form-control invalid';
        } else if (formType==='signup'){
            invalidEmail = null;
            // classEmail = 'form-control';
        }

        const emailInput = formType === 'signup' ? 
            (<div> <input className={ invalidEmail ? "error" : "none2"} type="text" onChange={this.update('email')} value={this.state.email} placeholder="Email" />  </div>)
         : null
        // debugger;
        return (
            <div className="session-page">

                <div className="header2">
                    <span>
                        <Link to="/"><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/black_spotify.png"/></Link>
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
                            <div className="sign-up-tag">
                            <button className="FB">SIGN UP WITH FACEBOOK</button> 
                            <strong className="line-thru"> 
                                or
                            </strong> 
                            <div className="email-address">
                        Sign up with your email address
                            </div>
                            </div>
                            : 
                            <div className="login-header">
                                <div className="log-in-tag">To continue, log in to Dotify.
                                </div>
                                <button className="FB">LOG IN WITH FACEBOOK</button> 
                                <strong className="line-thru2">
                                        or
                                </strong>
                            </div>
                            }
                            {invalidUsernamePassword}
                    </div>

                    {/* {this.renderErrors()} */}
                    <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                    className= { invalidUsername ? "error" : "none2"}
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                    />
                            {invalidUsername ? <div className="invalid">{invalidUsername}</div> : <div className="none"></div>}
                            {emailInput}
                            {invalidEmail ? <div className="invalid">{invalidEmail}</div> : <div className="none"></div>}

                            <input type="password"
                                    className={ invalidPassword ? "error" : "none2" }
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    />
                            {invalidPassword ? <div className="invalid">{invalidPassword}</div> : <div className="none"></div>}
                            <br/>
                            <input id="session-submit" type="submit" value={formType === 'login' ? 'LOG IN' : 'SIGN UP'} />
                            {formType === 'login' ? 
                            <div className="noaccount">
                                <div className="account-check">
                                    <div className="donthave">
                                    Don't have an account?
                                    </div>
                                    <Link to="/signup"><button className="bottom-button">SIGN UP FOR DOTIFY</button></Link>
                                    <button onClick={this.demoUser} className="demo2">DEMO</button>

                                </div>
                            </div>
                             :
                             <div className="yesaccount">
                                <div className="account-check">Already have an account? &nbsp;

                                    <span>
                                        <Link onClick={this.props.clearErrors} to="/login">Log In</Link>
                                    </span>
                                </div> 
                             </div> }

                    </form>
                    </div>
                 </div>
        );
    }
}

export default withRouter(SessionForm);