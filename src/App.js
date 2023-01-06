import React, { Component } from 'react';
import './App.css';
import { Cardlists } from './components/cardlist/cardlist';
import { Searchfieldarea } from './components/searchfieldbox/searchfield';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      Monsters:[],
      Searchfield:''
    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then
    (Response => Response.json().then
    (userss => this.setState({Monsters:userss})))
  }
  handlechangers ()
  {
    console.log("Hello how are you !!!")
  }
  render()
  {
    const {Monsters, Searchfield} = this.state;
    const filtermethod = Monsters.filter(monster => 
      monster.name.toLowerCase().includes(Searchfield.toLowerCase()));

    return (
      <div className="App">

        <h1>!!!!! Monster Sites !!!!!</h1>
        <Searchfieldarea
        placeholder='Search for Monsters here'
        handleonchange={a =>
          this.setState({Searchfield : a.target.value})}/>  

        <Cardlists Monsters={filtermethod}/>

      </div>
    );
  }
}
export default App;
  