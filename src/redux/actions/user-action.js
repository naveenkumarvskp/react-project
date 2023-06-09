export const getAllUsers = () => {
  return {type: 'GET_ALL_USERS'};
};
export const getSingleUser = (id) => {
  return {type: 'GET_SINGLE_USER', id};
};

export const addUser = (payload) => {
  return {type: 'ADD_USER', payload};
};
export const editUser = (payload, id) => {
  return {type: 'EDIT_USER', payload, id};
};
export const deleteUser = (id) => {
  return {type: 'DELETE_USER', id};
};

export const isUpateUserLoading = () => {
  return {type: 'UPDATE_USER_LOADING'};
};

export const isAddUserLoading = () => {
  return {type: 'ADD_USER_LOADING'};
};

export const isDeleteUserLoading = () => {
  return {type: 'DELETE_USER_LOADING'};
};

export const resetAddUserNotification = () => {
  return {type: 'RESET_ADD_USER_NOTIFICATION'}
}

export const restUserDeleteNotification= () => {
  return {type: 'RESET_DELETE_USER_NOTIFICATION'}
}

export const resetEditUserNotification = () => {
  return {type: 'RESET_EDIT_USER_NOTIFICATION'}
}
