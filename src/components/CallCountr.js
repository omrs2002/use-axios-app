import React, { useState } from 'react';
import { Button } from './Button';
import './Posts.css';

class CallbackContr extends React.Component {
  constructor(props)  
  {
    super(props);
    this.btnCounter = React.createRef();
    const[counter,SetCounter] = useState(0);
  }
    

      componentDidMount() { 
        // console.log('counter componentDidMount called, counter value='+this.state.counter );
        // console.log(this.btnCounter.current);
        // console.log(document.getElementById('btnCounter'));
        }

        componentDidUpdate() {
            //console.log("counter componentDidUpdate called,Number of clicks: " + this.state.counter);
          }

      render() {
        return <div className="container">
            <div className="jumbotron">
                <h3 className="display-4">Callback Conuter App</h3>
            </div>
          <div className="card">
            <div className="card-header">
                Callback counter
            </div>
            <div className="card-body">
                <p>{this.state.counter}</p>
                
                <Button />
                <button
                counter={() => SetCounter(counter+1)}
                ref={this.btnCounter}
                onClick={this.increment}>Increment</button>
            </div>
          </div>
          </div>
      }
  } 
  export default CallbackContr;