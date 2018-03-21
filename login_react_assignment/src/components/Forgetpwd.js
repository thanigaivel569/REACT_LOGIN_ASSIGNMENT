import React from 'react';
import './Forgetpwd.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Forgetpwd extends React.PureComponent {
 constructor(props) {
    super(props);
    this.state = { email: '', isFormValid: false }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 handleSubmit(e) {
    e.preventDefault();
    let { email } = this.state;
    axios.get(`http://localhost:4000/users?email=${email}`)
      .then(response => {
        if (response.data.length) {
          this.props.onForgetPassSuccess(response.data[0].firstName, response.data[0].lastName);
          this.props.history.push('/reset-password-notification');
        }
        else {
          alert("Password Does not match in DB!!!please signup")
         }
      })
    }
 handleChange(e) {
    this.setState({ [e.target.id]: e.target.value }, () => {
      if (this.state.email) {
        this.setState({ isFormValid: true })
      } else {
        this.setState({ isFormValid: false })
      }
    })
  }
 render() {
    return (
      <fieldset className="signup mx-5 mt-2">
        <form onSubmit={this.handleSubmit}>
         <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
              placeholder="Enter email" required="true" onChange={this.handleChange} />
          </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.isFormValid}>Reset Password</button>
        </form>
        <h5 > <Link to="/login">back to Login </Link></h5>
      </fieldset>
    )
  }
}

export default Forgetpwd