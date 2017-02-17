
export const fetchTopRatedMenus = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/menus',
    data: { top_rated: true }
  });
};

export const fetchMenus = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/menus'
  });
};

export const fetchMenu = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/menus/${id}`
  });
};

export const createMenu = (menu) => {
  return $.ajax({
    method: 'POST',
    url: '/api/menus',
    data: menu
  });
};

export const updateMenu = (menu) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/menus/${menu.id}`,
    data: menu
  });
};
