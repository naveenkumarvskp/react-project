import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {
  addUser } from "../../redux/actions/user-action";

 const AddUserInfo = ({addUser, users}) => {

  console.log("add users---", users);
const submitHandler = e => {
  e.preventDefault();
  const data = {name: e.target.name.value, username: e.target.username.value, email: e.target.email.value, phone: e.target.phone.value, website: e.target.website.value};
  addUser(data);
  e.target.reset();
}
  return (
    <div>
    {users.length>0 && (
  <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user,index)=>
    <tr key={index}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
    </tr>
  )}
  </tbody>
</table>
  )}
   
    

    <div className="card container w-50">
  <h5 class="card-title">Add User</h5>
  <div className="card-body">
  <form onSubmit={submitHandler}>
    <label>Name</label>
    <input type="text" name="name" className="col-12"  />
    <label>Website</label>
    <input type="text" name="website" className="col-12"  />
    <label>Email Address</label>
    <input type="email" name="email" className="col-12"  />
    <label>Username</label>
    <input type="text" name="username" className="col-12"  />
    <label>Phone</label>
    <input type="text" name="phone" className="col-12"  />
    <div className="clearfix"></div>
    <button
            type="submit"
            fullWidth            
            className="btn btn-primary"
           
          >
            Add User
          </button>
    </form>
  </div>
</div>

{/* <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => addUser({name: 'naveen', username: 'navin', email: 'naveen@april.biz'})}>Add user</button> */}
    </div>

    
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserInfo);