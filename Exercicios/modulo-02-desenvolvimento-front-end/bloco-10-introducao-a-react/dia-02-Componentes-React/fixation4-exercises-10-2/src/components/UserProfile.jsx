import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p>Nome: {user} </p>
      </div>
    )
  }
}

export default UserProfile;