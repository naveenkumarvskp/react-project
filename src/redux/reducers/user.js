const initialContacts = {
  users: [],
  user: {},
  isUpdateUserLoading: false,
  isAddUserLoading: false,
  isDeleteUserLoading: false,
};

export const userReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_SUCCESS':
      return {...state, users: action.data};
    case 'GET_ALL_USERS_FAILED':
      return {...state, message: action.message};
    case 'GET_SINGLE_USER_SUCCESS':
      return {...state, user: action.data};
    case 'GET_SINGLE_USER_FAILED':
      return {...state, message: action.message};
    case 'ADD_USER_SUCCESS': {
      let users = [...state.users];
      users.push(action.data);
      return {...state, users, isAddUserLoading:false};
    }
    case 'ADD_USER_FAILED':
      return {...state, message: action.message};
    case 'EDIT_USER_SUCCESS': {
      let users = [...state.users];
      let findIndex = users.findIndex((user) => user.id === action.data.id);
      users[findIndex] = action.data;
      return {...state, users, isUpdateUserLoading: false};
    }
    case 'EDIT_USER_FAILED':
      return {...state, message: action.message};
    case 'DELETE_USER_SUCCESS': {
      let users = [...state.users];
      let findIndex = users.findIndex((user) => user.id === action.data);
      users.splice(findIndex, 1);
      return {...state, users,isDeleteUserLoading: false};
    }
    case 'DELETE_USER_FAILED':
      return {...state, message: action.message};
    case 'UPDATE_USER_LOADING':
      return {...state, isUpdateUserLoading: true};
    case 'ADD_USER_LOADING':
      return {...state, isAddUserLoading: true};
    case 'DELETE_USER_LOADING':
        return {...state, isDeleteUserLoading: true};
    default:
      return state;
  }
};
