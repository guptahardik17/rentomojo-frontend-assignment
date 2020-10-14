import React, { Component } from 'react';
import PostListItem from './PostListItem';
import axios from 'axios';

class PostsList extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      isLoading: true,
      currentPageNumber: 1,
      limit: 10,
      skip: 0,
    }

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.fetchUserPosts();
  }

  fetchUserPosts(){
    console.log(this.state.skip, this.state.limit, this.state.currentPageNumber);
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userId}&skip=${this.state.skip}&limit=${this.state.limit}`)
    .then((response) => {
      this.setState({ posts: response.data, isLoading: false})
    })
    .catch(
      error => console.log(error)
    )
  }

  previous(){
    this.setState(
      {
        currentPageNumber: this.state.currentPageNumber - 1, 
        skip: this.state.skip - this.state.limit
      }, this.fetchUserPosts);
  }

  next(){
    this.setState(
      {
        currentPageNumber: this.state.currentPageNumber + 1, 
        skip: this.state.skip + this.state.limit
      }, this.fetchUserPosts);
  }

  render() {
    return (
      <div className="container">
          <table className="table my-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Blog Title</th>
                <th scope="col">Blog URL</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.loading && this.state.posts.map(post => {
                return (
                  <PostListItem post={post}  key={post.id}/>
                )}
              )}
            </tbody>
          </table>
          <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={this.previous} disabled={this.state.currentPageNumber === 1}> &laquo; </button>
            <p className="d-inline mx-2"> {this.state.currentPageNumber} </p>
            <button type="button" className="btn btn-primary" onClick={this.next}> &raquo; </button>
          </div>
      </div>
    );
  }
}

export default PostsList;
