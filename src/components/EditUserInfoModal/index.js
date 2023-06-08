import React ,{ useState, useEffect }from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {
  editUser } from "../../redux/actions/user-action";
import { LoadingIndicator } from '../LoadingIndicator';

const EditUserInfoModal = ({editUser,isUpdateUserLoading, show ,handleClose,userInfo}) => {

  
  const initialFormValues = {
		uname: userInfo.name,
		uusername: userInfo.username,
    uemail: userInfo.email,
    uphone: userInfo.phone,
    uwebsite: userInfo.website,
	  };

    // console.log("initialformvalues", initialFormValues);
  const [userValues, setUserValues] = useState(initialFormValues);
    // console.log("userinfo---", userInfo);
    console.log("edit---", userValues);

    console.log("loading--", isUpdateUserLoading);

    const clearState = () => {
      setUserValues({
        ...userValues,
        ...initialFormValues,
      });
      // handleClose();
  };

  useEffect(() => {
    clearState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const submitHandler = e => {
    e.preventDefault();
    console.log("submit");
    const data = {name: userValues.uname, username: userValues.uusername, email: userValues.uemail, phone: userValues.uphone, website: userValues.uwebsite};
    console.log("submit", data);
    editUser(data,userInfo.id);
    // // e.target.reset();
    // clearState();
    // handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit {userInfo.name} Information</Modal.Title>
    </Modal.Header>
    <form onSubmit={submitHandler}>
    <Modal.Body>
   
            <div className="form-group row mb-3">
                <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name"  name="name" value={userValues.uname} onChange={(e) => setUserValues({...userValues,uname:e.target.value})}/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label for="Website" className="col-sm-2 col-form-label">Website</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="Website"  value={userValues.uwebsite} onChange={(e) => setUserValues({...userValues,uwebsite:e.target.value})}/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label for="Email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="Email"  value={userValues.uemail} onChange={(e) => setUserValues({...userValues,uemail:e.target.value})}/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label for="Username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="Username"  value={userValues.uusername} onChange={(e) => setUserValues({...userValues,uusername:e.target.value})}/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label for="Phone" className="col-sm-2 col-form-label">phone</label>
                <div className="col-sm-10 mb-3">
                    <input type="text" className="form-control" id="Phone" value={userValues.uphone} onChange={(e) => setUserValues({...userValues,uphone:e.target.value})}/>
                </div>
            </div>
            
          {/* <input type="hidden" className="form-control" name="id" value={userValues.id} /> */}
             
      
  
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
     {isUpdateUserLoading ? <div className='mx-4'><LoadingIndicator/></div> : <button type="submit" className="btn btn-primary">Submit</button> }
    </Modal.Footer>
    </form>
  </Modal>
  )
}

// export default EditUserInfoModal

const mapStateToProps = (state) => {
  return {
    isUpdateUserLoading: state.isUpdateUserLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      editUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserInfoModal);