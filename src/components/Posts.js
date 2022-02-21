import React, { Component } from 'react';
import axios from "axios";
import './Posts.css';
import {FaCoffee} from 'react-icons/fa'


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: []
    }

  

  }
  

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    
    axios.get(url).then((response) => {
      
      console.log('data from axios:',response.data);
      this.setState({ posts: response.data })

    });

    
    // fetch(url)
    // .then(response => response.json())
    // .then(json => this.setState({ posts: json }));

  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Blog posts</h1>
        </div>
        {posts.slice(0, 5).map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">
            <span style={{color:'blue', fontSize:'25px'}}><FaCoffee  /></span> #{post.id} {post.title}
            </div>
            <div className="card-body">
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;