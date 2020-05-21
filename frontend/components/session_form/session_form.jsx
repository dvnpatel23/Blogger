import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.user;
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.loginDemo = this.loginDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    loginDemo(e) {
        e.preventDefault();
        let demoUser = { email: 'demoUser@email.com', password: 'password', username: 'demouser' }
        this.props.processForm(demoUser)

    }   


    renderErrors() {
        if (this.props.errors === undefined) return;
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


        let email = null;

        if (this.props.formType === "signup") {
           email = (<label>

             <input type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
            
                />

            </label>)
        };

        let demoButton;
        if (this.props.formType === "login") {
            demoButton = <button className="demo-button" onClick={this.loginDemo}>Demo Login</button>
        }


        return (


            <div className="login-form-container">
              <div className="headerAndQuote">
                <div className="splash-header">
                    <h1 className="splash-header">Blogger</h1>
                </div>

                <div className="headers">
                    <br/>
                    <h2>Come for what you love.</h2>
                    <h3>Stay for what you discover.</h3>

                </div>
             </div>

                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                    <div className="login-form">
                        <br />
                        <label>

                            <input type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input" 
                            />
                        </label>


                        <label>

                            <input type="Password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />

                       
                        </label>



                        {email}
                        <br/>
                        <br/>

                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <br />
                        {demoButton}
                        <br/>
                    </div>
                </form>
                {this.props.navLink}
                <div className="renderErrors">
                    {this.renderErrors()}
                </div>
            
            </div>

        );

    }

}

export default withRouter(SessionForm);