import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    this.handleOnChange= this.handleOnChange.bind(this)
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={this.handleOnChange}
          name="username"
          className="form-control"
          value={this.state.username}
          />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="email"
            className="form-control"
            value={this.state.email}
            />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
            <input
            type="text"
              onChange={this.handleOnChange}
              name="password"
              className="form-control"
              value={this.state.password}
            />
        </div>


        <div className="form-group">
          <label htmlFor="password">Password Confirmation</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="passwordConfirmation"
              className="form-control"
              value={this.state.passwordConfirmation}
              />
          </div>


      <div className="form-group">
      <button className="btn btn=primary btn=lg">
        Sign up
        </button>
        </div>
      </form>

    )
  }
}

export default SignupForm;
