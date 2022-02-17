import React from 'react';
import './Posts.css';


class Contr extends React.Component {
  constructor(props)  
  {
    super(props);

    this.btnCounter = React.createRef();
 
    this.state = {
      counter: 0
    };

  }

 
    
    

    increment = () => {
        this.setState({
         counter: this.state.counter+1});
      }

      componentDidMount() { 
        console.log('counter componentDidMount called, counter value='+this.state.counter );
        console.log(this.btnCounter.current);
        console.log(document.getElementById('btnCounter'));
        }

        componentDidUpdate() {
            console.log("counter componentDidUpdate called,Number of clicks: " + this.state.counter);
          }

      render() {
        return <div className="container">
            <div className="jumbotron">
                <h3 className="display-4">Conuter App</h3>
            </div>
          <div className="card">
            <div className="card-header">
            
            </div>
            <div className="card-body">
                <p>{this.state.counter}</p>
                <button
                id="btnCounter"
                ref={this.btnCounter}
                onClick={this.increment}>Increment</button>
            </div>
          </div>
          </div>
      }
  } 
  export default Contr;