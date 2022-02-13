import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Posts  from './components/Posts' ;
import Contr from './components/Countr';
import FuncComp from './components/FuncComp';
import ContactManager from './components/ContactManager'

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
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(

  <React.StrictMode>
    <div className='row'>
      <div className='col-md-6'> 
       <App />
      </div>
      <div className='col-md-6'>
         <Posts />
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
          <Hello name="React!" />
      </div>
      <div className='col-md-6'>
        <HelloClass name="React hello class!" />
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'> 
      <Contr />
      </div>
      <div className='col-md-6'> 
       <FuncComp></FuncComp>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        <h1>Contact Manager</h1>
      <ContactManager data={contacts} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
