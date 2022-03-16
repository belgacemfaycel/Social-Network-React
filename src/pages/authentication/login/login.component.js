import React, { useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../services/auth.service";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const handleLogin = (e) => {
      e.preventDefault();
      setMessage("");
      setLoading(true);
      form.current.validateAll();
      if (checkBtn.current.context._errors.length === 0) {
        AuthService.login(username, password).then(
          (data) => {
              console.log(data);
              console.log(props);
            props.history.push("/dashboard");
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setLoading(false);
            setMessage(resMessage);
          }
        );
      } else {
        setLoading(false);
      }
    };
    return (
      <div className="col-md-12">
        <div className="card card-container">

          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    );
  };
  export default Login;
//  class Login extends Component {
//     constructor(){
//         super();
        
//         this.validator = new FormValidator([
//             {
//             field: 'email',
//             method: 'isEmpty',
//             validWhen: false,
//             message: 'Enter your email address.'
//             }, {
//             field: 'email',
//             method: 'isEmail',
//             validWhen: true,
//             message: 'Enter valid email address.'
//             }, {
//             field: 'password',
//             method: 'isEmpty',
//             validWhen: false,
//             message: 'Enter password.'
//             }
//             ]);    
//         this.state = {
//             email: '',
//             password: '',
//             validation: this.validator.valid(),
//             }
//             this.submitted = false;
//     }
//     handleFormSubmit = event => {
//         event.preventDefault();
//         const validation = this.validator.validate(this.state);
//         this.setState({
//         validation
//         });
//         this.submitted = true;
//         if(validation.isValid) {
//         //reaches here if form validates successfully...
//             fetch(`${SERVER_URL}/login`, {
//                 "method": "POST",
//                 "headers": {
//                   "content-type": "application/json",
//                   "accept": "application/json"
//                 },
//                 "body": JSON.stringify({
//                     email: this.state.email,
//                     password: this.state.password,
//                 })
//               })
//               .then(response => response.json())
//               .then(response => {
//                 alert(response);
//                 // this.props.navigate('/sign-in');
        
        
        
        
//               })
//               .catch(err => {
//                 console.log(err);
//               });
//         }}
//     handleChange = event => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({
//             [name]: value
//           });
//      }
//     render() {
//         let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation

//         return (
//             <form>
//                 <h3>Sign In</h3>
//                 <div className="form-group" className={validation.email.isInvalid ? 'has-error' : undefined}>
//                     <label>Email address</label>
//                     <input type="email" onChange={this.handleChange} className="form-control" name="email" placeholder="Enter email" />
//                 </div>
//                 <div className="form-group" className={validation?.password.isInvalid ? 'has-error' : undefined}>
//                     <label>Password</label>
//                     <input type="password" onChange={this.handleChange} className="form-control" name="password" placeholder="Enter password" />
//                 </div>
//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox"  className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>
//                 <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary btn-block" >Submit</button>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//             </form>
//         );
//     }
// }
// function WithNavigate(props) {
//     let navigate = useNavigate();
//     return <Login {...props} navigate={navigate} />
// }

// export default WithNavigate
