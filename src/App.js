import React, { Component } from 'react';
import Input from './Components/Input';

class App extends Component {

  state = {
    text : ''
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    fetch('http://cricapi.com/api/playerStats',{
      method:'GET',
      headers:{
        'apikey':'XXXXXX',
        'pid':'253802',
        "Access-Control-Allow-Origin": "*"
      }
    }).then((Response) => Response.json()).then((data)=>{
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <Input 
              value={this.state.text}
              change={this.handleChange}
              />
        </form>
      </div>
    );
  }
}

export default App;
