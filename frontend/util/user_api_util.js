
export const editUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `/api/user`,
    data: user
  });
};
