import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  }
  add = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.phone) {
      alert("Ohh ho ! All fields are mandetory !!")
      return;
    }
    this.props.addContactHandler(this.state)
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
    console.log(this.props)
    // this.props.history.push("/");

  }
  render() {
    return (
      <div className='ui main' >
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field' >
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" placeholder='Name..' onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} />
          </div>
          <div className='field' >
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" placeholder='Email..' onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} />
          </div>
          <div className='field' >
            <label htmlFor="phone">Phone :</label>
            <input type="text" name="phone" placeholder='Phone..' onChange={(events) => { this.setState({ phone: events.target.value }) }} value={this.state.phone} />
          </div>
          <div>
            <button className='ui button red' > Add Contact</button>
          </div>
        </form>
        <br/>
        <div>
          <Link to='/' >
            <button className='ui button red mt-12' > Go to Contact List</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default AddContacts;