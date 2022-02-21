import React, { useState,useEffect  } from 'react'; 

function FuncComp(props) {
    
// useState returns a pair, the current state value and a function, that lets you change the state.
// useState takes one argument, which is the initial value of the state.
    const [name, setName] = useState("David");
    
      //To call the method only when something changes, we can provide it a second argument:
        useEffect(() => {
            //do something
            console.log("Name Updated to:" +name);
        }, [name]);  

        function handleChange() {
            setName(document.getElementById('txtName').value);
          }

    return (<center>
        <h5>Hello functional {name} components!</h5>
        <input type="text"  id="txtName"  />
        <button onClick={handleChange}> Update name to omar</button>
        <hr></hr>
        </center>)
  }
  export default FuncComp;