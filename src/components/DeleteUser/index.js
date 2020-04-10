import React from 'react';
import { withFirebase } from '../Firebase';

const DeleteUserButton = ({ firebase, user }) => (
  <button type="button" onClick={() => firebase.doDeleteUser(user.uid)}>
    Delete User
  </button>
);

export default withFirebase(DeleteUserButton);