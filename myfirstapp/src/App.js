import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';
import  {tasks}  from './data/Data.json';
import Cartas from './componentes/Cartas';
import Form from './componentes/Form';

class App extends Component {
constructor(){
  super();
  this.state={
    tasks
  }

  this.agregarTarea=this.agregarTarea.bind(this);
}

agregarTarea(task){

  this.setState({
    tasks:[...this.state.tasks,task]
  })
}
  render() {
    return (
      
      <div className="App">
      <Menu titulo="Tareas" counter={this.state.tasks.length}>
      
      </Menu>
        
        
        <header className="App-header">
        <div className="container">
        <div className="row">
        <div className="col-md-3">
        <Form agregaTask={this.agregarTarea} ></Form>
        </div>
        <div className="col-md-9">
        <div className="row">
           <Cartas dato={this.state.tasks}/>
        </div> 
        </div>
        
        </div>
        
        </div>
           
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
    );
  }
}

export default App;
