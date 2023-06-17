import React,{useEffect,useState  } from 'react'
import { useDispatch, connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { getAllUsers,deleteUser,restUserDeleteNotification } from "../../redux/actions/user-action";
import ModalInfo from '../ModalInfo';
import EditUserInfoModal from '../EditUserInfoModal';
import { LoadingIndicator } from '../LoadingIndicator';

const UserDetails= ({getAllUsers,restUserDeleteNotification,isUserDeleteSuccessfully,users,deleteUser,isDeleteUserLoading})=> {

  const dispatch = useDispatch();
// console.log("userdetails---", users);
  useEffect(() => {
    dispatch(getAllUsers())
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => restUserDeleteNotification(), 8000);
    return () => clearTimeout(timer);}, [isUserDeleteSuccessfully, restUserDeleteNotification]);

  const [selectedBtnId, setSelectedBtnId] = useState(-1);
 
  const [showModal, setShowModal] = useState({
    show: false,
    userDetails: ""
  });

  const handleShow = (user) => {
    setShowModal({ show: true, userDetails: user
    });
  }

  const handleClose = () => {
    setShowModal({ show: false, userDetails: "" 
    });
  }


  const [openEditModal, setOpenEditModal] = useState({
    isEditModalOpen: false,
    EditUserDetails: ""
  });

  const editUser = (user) => {
    setOpenEditModal({ isEditModalOpen: true, EditUserDetails: user
    });
  }

  const deleteUserInfo = (id) => {
    setSelectedBtnId(id);
    deleteUser(id);
  }

  const editModalClose = () => {
    setOpenEditModal({ isEditModalOpen: false, EditUserDetails: "" 
    });
  }

  return (
    <>
    <div className="album py-5 bg-body-tertiary">
    <div className="container">
      {isUserDeleteSuccessfully && (<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">You have success Deleted User!</h4>
  <p>If you want add user then please go add user info page and add the user.</p>
 
</div>)}

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {users.map((user)=>
        <div className="col" key={user.id}>
          <div className="card shadow-sm">
            <div className="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Name: </b>{user.name}</li>
                <li class="list-group-item"><b>User Name: </b>{user.username}</li>
                <li class="list-group-item"><b>Phone: </b>{user.phone}</li>
                <li class="list-group-item"><b>Website: </b>{user.website}</li>
                <li class="list-group-item"><b>Email: </b>{user.email}</li>
              </ul>
              <div className="mt-4 d-flex flex-column align-items-center">
               
                <button type="button" className="btn btn-outline-primary w-100" onClick={() => handleShow(user)} >More Details</button>
                {isDeleteUserLoading && selectedBtnId === user.id ? <div className='my-3'><LoadingIndicator/></div> :<button type="button" className="btn btn-outline-danger w-100 mt-2" onClick={() => deleteUserInfo(user.id)}>Delete</button>}
                <button type="button" className="btn btn-outline-success w-100 mt-2" onClick={() => editUser(user)}>Edit User Details</button>
              
              </div>
            </div>
          </div>
        </div>
       )}
      </div>
    </div>
  </div>
  {/* {console.log("showmodal--", showModal.userDetails)} */}
  <ModalInfo show={showModal.show} handleClose={handleClose} userInfo={showModal.userDetails}/>
  <EditUserInfoModal show={openEditModal.isEditModalOpen} handleClose={editModalClose} userInfo={openEditModal.EditUserDetails} />
  </>
  )
}


const mapStateToProps = (state) => {
  // console.log(state.users);
  return {
    users: state.users,
    isDeleteUserLoading: state.isDeleteUserLoading,
    isUserDeleteSuccessfully: state.isUserDeleteSuccessfully,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllUsers,
      deleteUser,
      restUserDeleteNotification,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);