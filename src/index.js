import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Posts  from './components/Posts' ;
import Contr from './components/Countr';
import FuncComp from './components/FuncComp';

import reportWebVitals from './reportWebVitals';

class HelloClass extends React.Component {
  
  state = {
    Manager: "James"
  }

  render() {
    //An important thing to consider is that props are read-only, meaning components cannot modify their props.
    //Interactive apps generally need to change data and the page elements.
    return <b><center><p>Hello,props: {this.props.name},stat:{this.state.Manager} from Class Component!</p></center></b>;
  }
} 
function Hello(props) {
  return <center><h3>Hello, {props.name} from functional components!</h3></center>;
}

ReactDOM.render(

  <React.StrictMode>
    
    <App />
    <Hello name="React!" />
    <HelloClass name="React!" />
    <Posts />
    <Contr />
    <FuncComp></FuncComp>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
