import React, { Component } from 'react';
import axios from "axios";
import './Posts.css';
import {FaCoffee} from 'react-icons/fa'
import {FaSpinner} from 'react-icons/fa'


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        loading : true
    }
  }
  

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    
    axios.get(url).then((response) => {
      
      console.log('data from axios:',response.data);
      this.setState({ posts: response.data,loading:false })

    });
  }

  render() {
    const { posts,loading } = this.state;
    let data = 
    <> {posts.slice(0, 5).map((post) => (
      <div className="card" key={post.id}>
        <div className="card-header">
        <span style={{color:'blue', fontSize:'25px'}}><FaCoffee  /></span> #{post.id} {post.title}
        </div>
        <div className="card-body">
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    ))}</>;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Blog posts</h1>
        </div>
        {loading ? <h5><FaSpinner icon="spinner" className="spinner" size={70} /></h5> : data }
        <br/>
      </div>
    );
  }
}
export default Posts;