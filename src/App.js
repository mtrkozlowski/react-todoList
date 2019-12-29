import React from 'react';
import './App.css';

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems= [...this.state.items, newItems];
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  render(){
    return(
     <div className="App">
      <header>
        <div className="app-header">
          <div className="app-header-intro">Tasks</div>
        </div>
        <div className="calendar">
          <div className="calendar-box">
            <div className="calendar-box-date">{day +"/" + month +"/" + year}</div>
          </div>
        </div>
        <form className="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter your task" value={this.state.currentItem.text} onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
     </header>
    </div>
    );
  }
}

export default App;
