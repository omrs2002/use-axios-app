import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    const url = "https://localhost:4439/api/Employee";
    fetch(url)
    .then(response => response.json())
    .then(json =>this.setState({ employees: json }))
  }

  render() {
    const { employees } = this.state;
    //console.log("employees:",employees);
    return (
      <div className="container">
        <div className="jumbotron">
          <h4 className="display-4">Employees Details</h4>
        </div>
        
        {employees.map((emp) => (
          <div className="card" key={emp.id}>
            <div className="card-header">
              #{emp.id} {emp.fullName} 
            </div>
            <div className="card-body">
              <p className="card-text">{emp.bio}</p>
            </div>
          </div>
        ))
        }
      </div>
      
    );
  }
}
export default App;