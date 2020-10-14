import React, { Component } from 'react';
import UserListItem from './UserListItem';
import axios from 'axios';

class UsersList extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      this.setState({ users: response.data, isLoading: false})
    })
    .catch(
      error => console.log(error)
    )
  }

  render() {
    return (
      <div className="container">
          <table className="table my-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Blog Posts</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.loading && this.state.users.map(user => {
                return (
                  <UserListItem user={user}  key={user.id}/>
                )}
              )}
            </tbody>
          </table>
      </div>
    );
  }
}

export default UsersList;
