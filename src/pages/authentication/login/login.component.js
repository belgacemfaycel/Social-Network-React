import React, { Component } from "react";
import FormValidator from '../../../utlis/validators/FormValidator';
import { useNavigate } from 'react-router-dom';
const SERVER_URL = `http://localhost:4200/api/auth`;

 class Login extends Component {
    constructor(){
        super();
        
        this.validator = new FormValidator([
            {
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
            }
            ]);    
        this.state = {
            email: '',
            password: '',
            validation: this.validator.valid(),
            }
            this.submitted = false;
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
            fetch(`${SERVER_URL}/login`, {
                "method": "POST",
                "headers": {
                  "content-type": "application/json",
                  "accept": "application/json"
                },
                "body": JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })
              })
              .then(response => response.json())
              .then(response => {
                alert(response);
                // this.props.navigate('/sign-in');
        
        
        
        
              })
              .catch(err => {
                console.log(err);
              });
        }}
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
     }
    render() {
        let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation

        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group" className={validation.email.isInvalid ? 'has-error' : undefined}>
                    <label>Email address</label>
                    <input type="email" onChange={this.handleChange} className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group" className={validation?.password.isInvalid ? 'has-error' : undefined}>
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} className="form-control" name="password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"  className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary btn-block" >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}

export default WithNavigate
