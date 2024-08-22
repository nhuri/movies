import React from 'react';
import "./user.css";
import User from './User';
const UserList = ({users}) => {
  return (
    <div className="row">
      {
        users.map(user => (
            <User key={user.id}  user ={user}/>
        ))}
    </div>
  )
}
export default UserList