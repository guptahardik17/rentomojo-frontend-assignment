import React, { Component } from 'react';
import CommentListItem from './CommentListItem';
import axios from 'axios';

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      post: [],
      comments: [],
      showComments: false,
      isLoading: true,
    }

    this.onClickComments = this.onClickComments.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
    .then((response) => {
      this.setState({ post: response.data, isLoading: false})
    })
    .catch(
      error => console.log(error)
    )
  }

  onClickComments(){
    if(!this.state.showComments){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}/comments`)
      .then((response) => {
        this.setState({ comments: response.data, showComments: !this.state.showComments})
      })
      .catch(
        error => console.log(error)
      )
    } else {
      this.setState({ comments: [], showComments: !this.state.showComments})
    }
  }

  deleteBlog(){
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
      .then((response) => {
           this.props.history.replace(`/${this.props.match.params.userId}/posts`)
      })
      .catch(
        error => console.log(error.response.data)
      )
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="display-5">
          Blog Post
          <button className="btn btn-danger float-right" onClick={this.deleteBlog}>Delete Blog</button>
        </h1>
        <hr />
        <h1 className="display-5">{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
        <p><button className="btn btn-primary btn-lg text-white" role="button" onClick={this.onClickComments}>Comments &raquo;</button></p>
        <hr />

        {this.state.showComments && (
          <div>
            <h1 className="display-5">Comments</h1>
            {this.state.comments.map((comment) => {
              return(
                <CommentListItem key={comment.id} comment={comment} />
              )
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Blog;
