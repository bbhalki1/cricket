import React, { Component } from 'react';
import Input from './Components/Input';
import axios from 'axios';

class App extends Component {

  state = {
    text : ''
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    // fetch('http://cricapi.com/api/playerStats', {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       apikey:'xxxx',
    //       pid:'253802',
    //       mode:'cors',
    //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    //     },
    //   },
    //   ).then(response => {
    //     if (response.ok) {
    //       response.json().then(json => {
    //         console.log(json);
    //       });
    //     }
    //   });
      var username = 'bbhalki1'
      axios.get('http://cricapi.com/api/playerFinder',{
        params: {
          name:"sachin tendulkar",
          api_key:'XXXX'
        }
      })
      .then(function(response){
        console.log(response.data);
        console.log(response.status); 
      });  
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <Input 
              value={this.state.text}
              change={this.handleChange}
              />
              <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
