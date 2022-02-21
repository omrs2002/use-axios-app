import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Posts  from './components/Posts' ;
import Contr from './components/Countr';
import FuncComp from './components/FuncComp';
import ContactManager from './components/ContactManager'
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import Counter from './components/reduxCounter'
import ReducerCounter from './components/ReducerCouter';
import Navigation from './components/Navigation';
//import { Router } from '@reach/router';

class HelloClass extends React.Component {
  
  state = {
    Manager: "James"
  }

  render() {
    //An important thing to consider is that props are read-only, meaning components cannot modify their props.
    //Interactive apps generally need to change data and the page elements.
    return <b><center><p>Hello,props: {this.props.name},state:{this.state.Manager} from Class Component!</p></center></b>;
  }
} 
function Hello(props) {
  return <center><h3>Hello, {props.name} from functional components!</h3></center>;
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num }
}

function decrementCounter(num) {
  return { type: 'DECREMENT', num: num }
}

const initialState = {count: 0,
  user:"omar Abuhadid"};


// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
      case 'DECREMENT':
      return { count: state.count - action.num };
    default:
      return state;
  }
}

// Reducer2 function
function reducer2(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

function CounterRed(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  function handleDecClick() {
    props.decrementCounter(1);
  }

    return <div>
    <p>{props.count}</p>
    <button className="btn btn-warning btn-sm" onClick={handleDecClick}>Decrement</button>
    <span> </span>
    <button  className="btn btn-primary btn-sm" onClick={handleClick}>Increment</button>
    </div>
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  incrementCounter,decrementCounter
}

const store = createStore(reducer);
const store2 = createStore(reducer2);
const CounterRedux = connect(mapStateToProps, mapDispatchToProps)(CounterRed);

//#endregion
//const nameContext = React.createContext('Welcome');

const user = "omar Abuhadid";

ReactDOM.render(
  
  <React.StrictMode>

     <Navigation
          user={user}
          logOutUser = {null}
        />
           <div className='container text-center'> 
            <div className='row'>
              <div className='col-md-6'> 
               
                  <Hello path="Hello"  name="React!" />
               
      
      <hr/><br/>
  <HelloClass path="Hello" name="React hello class!" />
  <hr/>
  <FuncComp></FuncComp>
  <br/>
  <hr/>
  
      <h3>Redux Counter</h3>
      <Provider store={store}>
              <CounterRedux/>
            </Provider>
              <hr/>
              <Provider store={store2}>
          <Counter/>

        </Provider>

              <hr/>
              <Contr />
              <hr/>
            
              <ReducerCounter></ReducerCounter>
  
      </div>
      <div className='col-md-6'>
        <App />
        <hr/>
         <Posts />
      </div>
    </div>
    
    <div className='row'>
      <div className='col-md-6'> 
      
      </div>
      <div className='col-md-6'> 
     <h1>Contact Manager</h1>
      <ContactManager data={contacts} />
      </div>
    </div>
    </div>
  
  </React.StrictMode>
 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
