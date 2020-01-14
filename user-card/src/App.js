import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import GithubUser from './components/GithubUser';



// const loadingText = <h1  className="App-logo" alt="logo">LOADING...</h1>;



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubProfile: {},
      followersList: []
    };
  }


  componentDidMount() {
    console.log('Component Mounted');

    axios
    .get('https://api.github.com/users/stompke')
    .then(res => {
      console.log(res.data);
      this.setState({
        githubProfile: res.data
      })
          axios
          .get(`https://api.github.com/users/${this.state.githubProfile.login}/followers`)
        .then(res => {
          console.log(res)
          this.setState({
            followersList: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err);
    })


    // axios
    // .get(`https://api.github.com/users/${this.state.githubProfile.login}/followers`)
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }


  componentDidUpdate() {
    console.log('component updated!')

  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* {this.state.isLoading ? loadingText : '' } */}
        <GithubUser userData={this.state.githubProfile} followers={this.state.followersList}/>

        </header>
      </div>
    );
  }
}

export default App;
