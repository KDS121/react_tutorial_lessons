import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'karan', age: '20', belt: 'black', id: 1 },
      { name: 'shyam', age: '40', belt: 'white', id: 2 },
      { name: 'rohan', age: '30', belt: 'pink', id: 3 }
    ]

  }
  addNinja = (ninja) =>{
    // console.log(ninja);
    ninja.id = Math.random();
    // spread operator
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps,prevState){
    console.log('components updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>my first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        {/* function as prop */}
        <AddNinja addNinja ={this.addNinja} />
      </div>
    );
  }

}

export default App;
