import React, { Component } from 'react';
import axios from 'axios'
import logo from './favicon.png';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
    // name: "",
    // avatar: "",
    // url: "",
    // bio: "",
    // location: "",
    // blog: "",
    // hireable: ""
    }
}

componentDidMount () {
  axios.get('https://api.github.com/users/atomjar').then(response => this.setState({
    name: response.data.name,
    avatar: response.data.avatar_url,
    url: response.data.html_url,
    bio: response.data.bio,
    location: response.data.location,
    blog: response.data.blog,
    hireable: response.data.hireable
  }))
}

searchUser () {
  let username = this.searchInput.value
  axios.get(`https://api.github.com/users/${username}`).then(response => this.setState({
    name: response.data.name,
    avatar: response.data.avatar_url,
    url: response.data.html_url,
    bio: response.data.bio,
    location: response.data.location,
    blog: response.data.blog,
    hireable: response.data.hireable
  }))
}

searchStudent () {
  let username = this.searchButton.value
  axios.get(`https://api.github.com/users/${username}`).then(response => this.setState({
    name: response.data.name,
    avatar: response.data.avatar_url,
    url: response.data.html_url,
    bio: response.data.bio,
    location: response.data.location,
    blog: response.data.blog,
    hireable: response.data.hireable
  }))
}

searchStudent2 () {
  let username2 = this.searchButton2.value
  axios.get(`https://api.github.com/users/${username2}`).then(response => this.setState({
    name: response.data.name,
    avatar: response.data.avatar_url,
    url: response.data.html_url,
    bio: response.data.bio,
    location: response.data.location,
    blog: response.data.blog,
    hireable: response.data.hireable
  }))
}

searchStudent3 () {
  let username3 = this.searchButton3.value
  axios.get(`https://api.github.com/users/${username3}`).then(response => this.setState({
    name: response.data.name,
    avatar: response.data.avatar_url,
    url: response.data.html_url,
    bio: response.data.bio,
    location: response.data.location,
    blog: response.data.blog,
    hireable: response.data.hireable
  }))
}

searchStudent4 () {
  let username4 = this.searchButton4.value
  axios.get(`https://api.github.com/users/${username4}`).then(response => this.setState({
    name: response.data.name,
    avatar: response.data.avatar_url,
    url: response.data.html_url,
    bio: response.data.bio,
    location: response.data.location,
    blog: response.data.blog,
    hireable: response.data.hireable
  }))
}

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img id="cat"src={logo} className="App-logo" alt="logo" />
          <h1>Github Preview</h1>
        </div>

          <input
          placeholder="Enter a Github username"
          ref={(input) => {this.searchInput = input}}
          />

          <button onClick= {this.searchUser.bind(this)}>Search</button>

          <ul>
            <li><h1>{this.state.name}</h1></li>
            <li><img id="avatar" src={this.state.avatar}/></li>
            <li>{this.state.bio}</li>
            <li><strong>{this.state.location}</strong></li>
            <li><a href={this.state.url}>Check out my Github</a></li>
            <li><a href={this.state.blog}>Read my blog</a></li>
            <li><p>{this.state.hireable ? "Available for hire" : "" }</p></li>
          </ul>

          <button
            value="axtho24"
            onClick= {this.searchStudent.bind(this)}
            ref={(button) => {this.searchButton = button}}>
            Alex Thomas
          </button>

          <button
            value="huyluong88"
            onClick= {this.searchStudent2.bind(this)}
            ref={(button) => {this.searchButton2 = button}}>
            Huy Luong
          </button>

          <button
            value="moabullon"
            onClick= {this.searchStudent3.bind(this)}
            ref={(button) => {this.searchButton3 = button}}>
            Moa Bullon
          </button>

          <button
            value="eransom"
            onClick= {this.searchStudent4.bind(this)}
            ref={(button) => {this.searchButton4 = button}}>
            Eric Ransom
          </button>
      </div>
    );
  }
}


export default App;
