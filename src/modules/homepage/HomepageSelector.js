export const userListSelector = state => state.users.list;

export const isUserSelected = state => email =>
  state.users.selection && state.users.selection.email === email;

export const getUserSelected = state => state.users.selection;
