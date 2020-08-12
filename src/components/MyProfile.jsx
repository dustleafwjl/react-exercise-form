import React, {Component} from 'react';
import './myProfile.module.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'male',
    description: '',
    remmber: false
  }


  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  handleRemmberChange = (e) => {
    this.setState({
      remmber: e.target.checked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('name', this.state.name)
    console.log('gender', this.state.gender)
    console.log('description', this.state.description)
    console.log('remmber', this.state.remmber)
  }

  render() {
    return (
      <form className='profile' onSubmit={this.handleSubmit}>
        <header>My Profile</header>
        <main>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" 
            value={this.state.name}
            onChange={this.handleNameChange}/>
          <label htmlFor="gender">Gender</label>
          <select id="gender" 
            value={this.state.gender}
            onChange={this.handleGenderChange}>
            <option value ="male">Male</option>
            <option value ="female">Female</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" 
            value={this.state.description} 
            placeholder="desciption about yourself"
            onChange={this.handleDescriptionChange}/>
          <div className="rember">
            <input type="checkbox" 
              checked={this.state.remmber}
              onChange={this.handleRemmberChange}/>
            I have read the terms of conduct
          </div>
        </main>
        <footer>
          <input type="submit" disabled={!this.state.name || !this.state.remmber || !this.state.description} value="Submit"/>
        </footer>
      </form>
    );
  }
}

export default MyProfile;


