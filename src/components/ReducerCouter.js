import React, { useReducer} from 'react'; 


const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function ReducerCounter() {

    //An alternative to useState. Accepts a reducer of type (state, action) => newState
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
          
         <h5 className="card-title">Reducer Counter</h5>
        <div className="card-body">
        Count: {state.count}
      <br/>
    <button  className="btn btn-primary btn-sm" 
    onClick={() => dispatch({type: 'decrement'})}
    
    >Decrement</button>
    <span> </span>
    <button className="btn btn-success btn-sm" 
    onClick={() => dispatch({type: 'increment'})}
    >Increment</button>

        </div>
      
    </div>

    );
  } export default ReducerCounter
