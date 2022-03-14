import React, { Component  } from "react";
import FormValidator from '../shared/FormValidator';


export default class SignUp extends Component {
    constructor(){
        super();
        this.validator = new FormValidator([
            {
                field: 'firstname',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter firstname.'
            },{
            field: 'lastname',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter lastname.'
            }, {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter your email address.'
            }, {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Enter valid email address.'
            }, {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter password.'
            }, {
            field: 'password_confirmation',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter Password confirmation.'
            }, {
            field: 'password_confirmation',
            method: this.passwordMatch, // notice that we are passing a custom function here
            validWhen: true,
            message: 'Password and password confirmation do not match.'
            }]);
            this.state = {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: '',
                validation: this.validator.valid(),
                }
                this.submitted = false;
            
    }
    passwordMatch = (confirmation, state) => (state.password === confirmation)
        handleInputChange = event => {
        event.preventDefault();
        this.setState({
        [event.target.name]: event.target.value,
        });
        }
handleFormSubmit = event => {
event.preventDefault();
const validation = this.validator.validate(this.state);
this.setState({
validation
});
this.submitted = true;
if(validation.isValid) {
//reaches here if form validates successfully...
    console.log(this.state);
}}
    render() {
        let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
        console.log('validation' , validation);
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group" className={validation.firstname.isInvalid ? 'has-error' : undefined}>
                    <label htmlFor="firstname">First name</label>
                    <input type="text" className="form-control" name="firstname"  placeholder="First name" />
                </div>
                <div className="form-group" className={validation.lastname.isInvalid ? 'has-error' : undefined}>
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastname"  placeholder="Last name" />
                </div>
                <div className="form-group" className={validation.email.isInvalid ? 'has-error' : undefined}>
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group" className={validation.password.isInvalid ? 'has-error' : undefined}>
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleFormSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}