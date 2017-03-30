
export const editUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `/api/user`,
    data: user
  });
};



export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`
  });
};
