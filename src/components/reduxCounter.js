import React from 'react';
import { connect } from 'react-redux'

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num }
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
    return <div>
      <h4>Redux Counter</h4>
    <p>{props.count}</p>
    <button className="btn btn-primary btn-sm" onClick={handleClick}>Increment</button>
    <hr></hr>
    </div>
    
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);