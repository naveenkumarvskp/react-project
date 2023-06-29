import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addUser,
  resetAddUserNotification,
} from "../../redux/actions/user-action";
import { LoadingIndicator } from "../LoadingIndicator";

const AddUserInfo = ({
  addUser,
  resetAddUserNotification,
  users,
  isAddUserLoading,
  isUserAddNotification,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  useEffect(() => {
    const timer = setTimeout(() => resetAddUserNotification(), 8000);
    return () => clearTimeout(timer);
  }, [isUserAddNotification, resetAddUserNotification]);

  const submitHandler = (data) => {
    addUser(data);
    reset();
  };
  return (
    <div className="below-header">
      {isUserAddNotification && (
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Well done!</h4>
          <p>New User added Successfully ! Please check below </p>
        </div>
      )}
      {users.length > 0 && (
        <table data-testid='userTest' className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.username}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-center mt-5">
        <div className="card w-50 text-center">
          <h5 class="card-header">Add User</h5>
          <div className="card-body">
            {isUserAddNotification && (
              <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>New User added Successfully ! Please check above </p>
              </div>
            )}
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="form-group row mb-3">
                <label for="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    {...register("name", {
                      required: "Name required",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Invalid name",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("name");
                    }}
                  />
                  {errors.name && (
                    <div class="invalid-validation">{errors.name.message}</div>
                  )}
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="Website" className="col-sm-2 col-form-label">
                  Website
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="Website"
                    name="website"
                    {...register("website", {
                      required: "Website required",
                    })}
                    onKeyUp={() => {
                      trigger("website");
                    }}
                  />
                  {errors.website && (
                    <div class="invalid-validation">
                      {errors.website.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="Email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="Email"
                    name="email"
                    {...register("email", {
                      required: "Email required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email Address",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <div class="invalid-validation">{errors.email.message}</div>
                  )}
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="Username" className="col-sm-2 col-form-label">
                  Username
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    name="username"
                    {...register("username", {
                      required: "Username required",
                      pattern: {
                        value: /^[A-Za-z]{1,9}$/i,
                        message: "Invalid Username",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("username");
                    }}
                  />
                  {errors.username && (
                    <div class="invalid-validation">
                      {errors.username.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="Phone" className="col-sm-2 col-form-label">
                  Phone
                </label>
                <div className="col-sm-10 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Phone"
                    name="phone"
                    {...register("phone", {
                      required: "Phone required",
                      pattern: {
                        value:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid phone number",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("phone");
                    }}
                  />
                  {errors.phone && (
                    <div class="invalid-validation">{errors.phone.message}</div>
                  )}
                </div>
              </div>

              {isAddUserLoading ? (
                <div className="d-flex justify-content-center">
                  <LoadingIndicator />
                </div>
              ) : (
                <button type="submit" fullWidth className="btn btn-primary">
                  Add User
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isAddUserLoading: state.isAddUserLoading,
    isUserAddNotification: state.isUserAddNotification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser,
      resetAddUserNotification,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserInfo);
