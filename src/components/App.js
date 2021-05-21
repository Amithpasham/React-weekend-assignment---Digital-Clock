// import React, {Component, useState} from "react";
// import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <>
               
//             </>
//         )
//     }
// }


// export default App;
import './App.css';
import Cities from './Cities';
import React from 'react';


class App extends React.Component {

  date;

  constructor(){
    super();
    this.state = {
      input:'',
      update:'',
      days:'',
      hours:'',
      mins:'',
      secs:''
    }
  }

  onSearchChange = (event) => {
    this.setState({input:event.target.value})
  }
  onSubmit = () => {
    this.date = this.state.input;
    this.setState({update:this.date})
    console.log(this.date);
    // this.calculateTimer();
    setInterval(this.calculateTimer, 1000);
  }

  calculateTimer = () => {
    let given = Date.parse(this.date);
    let current = Date.parse(new Date());
    // console.log(given);
    // console.log(current);
    let required = given - current;
    // console.log(required);
    if(required<0){
      clearInterval(setInterval(this.calculateTimer, 1000));
      this.setState({days:'00'});
      this.setState({hours:'00'});
      this.setState({mins:'00'});
      this.setState({secs:'00'});
    }else{
      let days = Math.floor(required / (1000 * 60 * 60 * 24));
      let hours = Math.floor((required % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((required % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((required % (1000 * 60)) / 1000);
      console.log(days);
      console.log(hours);
      console.log(minutes);
      console.log(seconds);
      this.setState({days:days});
      this.setState({hours:hours});
      this.setState({mins:minutes});
      this.setState({secs:seconds});
    }
    
  }
componentWillUnmount(){
  clearInterval(setInterval(this.calculateTimer, 1000));
}
 

  render(){
    return (
      <div className='Clock' >
          <Cities searchChange={this.onSearchChange} Inputbox={this.onSubmit} date={this.state.update}
          days={this.state.days} hours={this.state.hours} mins={this.state.mins} secs={this.state.secs}/>
      </div>
      
    );
  }
  
}

export default App;
