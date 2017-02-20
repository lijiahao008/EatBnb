
export const editUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/user`,
    data: user
  });
};
