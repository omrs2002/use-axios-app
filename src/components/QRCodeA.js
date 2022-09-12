import React, { Component } from 'react';
import axios from "axios";
import {FaSpinner} from 'react-icons/fa'

class QRCodeA extends Component {
  
  
    constructor(props) {
    super(props);
    this.state = {
        base64logo: '',
        loading : true
    }
  }

  componentDidMount() {
    const url = "https://localhost:7016/QRCode/GenerateBase64WithLogo?qrText=456465";
    axios.get(url).then((response) => {
      this.setState({ base64logo: response.data,loading:false })
    });
  }

  render() {

    const { base64logo,loading } = this.state;
    let data = 
    <> {
      <div className="card" >
        <div className="card-header">
        QR Code
        </div>
        <div className="card-body">
          <p className="card-text">
          <img src={"data:image/jpeg;base64," + base64logo} width="300px" alt='QR' />
            </p>
        </div>
      </div>
    }</>;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">QR Code</h1>
        </div>
             {loading ? <h5><FaSpinner icon="spinner" className="spinner" size={70} /></h5> : data } 
        <br/>
      </div>
    );
  }
}
export default QRCodeA;